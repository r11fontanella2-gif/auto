import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, isAbsolute, join, normalize, relative } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    const segments = relativePath.split("/").filter(Boolean);
    const candidates = [relativePath];
    if (segments.length > 1) candidates.push(segments.slice(1).join("/"));
    let filePath;

    for (const candidate of candidates) {
      const candidatePath = normalize(join(root, candidate));
      const pathFromRoot = relative(root, candidatePath);
      if (pathFromRoot.startsWith("..") || isAbsolute(pathFromRoot)) continue;
      try {
        const fileStat = await stat(candidatePath);
        const resolvedPath = fileStat.isDirectory() ? join(candidatePath, "index.html") : candidatePath;
        const resolvedStat = fileStat.isDirectory() ? await stat(resolvedPath) : fileStat;
        if (resolvedStat.isFile()) {
          filePath = resolvedPath;
          break;
        }
      } catch {
        // Tenta o próximo caminho, inclusive quando o preview adiciona o nome do projeto à URL.
      }
    }

    if (!filePath) {
      const acceptsHtml = request.headers.accept?.includes("text/html");
      if (!acceptsHtml) throw new Error("Arquivo não encontrado");
      filePath = join(root, "index.html");
    }

    response.writeHead(200, {
      "Content-Type": mime[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    response.end(await readFile(filePath));
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Não encontrado");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Vértice disponível em http://127.0.0.1:${port}`);
});
