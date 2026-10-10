import { cp, mkdir } from "node:fs/promises";

const output = new URL("./dist/", import.meta.url);
await mkdir(output, { recursive: true });
for (const name of ["index.html", "styles.css", "script.js", "assets"]) {
  await cp(new URL(`./${name}`, import.meta.url), new URL(name, output), {
    recursive: true,
  });
}
console.log("Site pronto para publicação em dist/.");
