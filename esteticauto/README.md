# Vértice Estética Automotiva

Landing page estática, responsiva e sem dependências de produção.

## Visualizar

Abra `index.html` diretamente no navegador ou execute:

```bash
npm run dev
```

O servidor local usa a porta `4173` por padrão.

## Antes de publicar

### Publicação na Vercel

Envie o projeto completo, incluindo `vercel.json`, `build.mjs`, `package.json` e a pasta `assets`. O `vercel.json` configura automaticamente Framework Preset como Other, Build Command como `npm run build` e Output Directory como `dist`.

Em Settings → Build and Deployment, Root Directory deve apontar para a pasta que contém `package.json` e `index.html`. Se esses arquivos estiverem na raiz do repositório, mantenha a raiz; se estiverem dentro de `esteticauto`, selecione essa subpasta. Não selecione `dist` como Root Directory: ela será criada durante o build.

Publique uma nova implantação contendo esses arquivos. Em integração Git, envie as mudanças para o repositório e aguarde a nova implantação. Fazer Redeploy de uma versão antiga sem as mudanças não aplica a correção.

Para conferir o pacote localmente, execute `npm run build`. A pasta `dist` deve conter `index.html`, `styles.css`, `script.js` e `assets/`. O servidor `dev-server.mjs` é apenas para visualização local.

Substitua os placeholders identificados no conteúdo:

- links com `data-whatsapp-placeholder="true"` (substitua o `href` pelo link real e remova o atributo)
- `[TELEFONE]`
- `[ENDEREÇO COMPLETO]`
- `[HORÁRIO DE FUNCIONAMENTO]`
- `@[USUÁRIO DO INSTAGRAM]`
- diferenciais, depoimentos e condições comerciais marcados como informações a confirmar

## Verificação

```bash
npm run check
```

O comando verifica a sintaxe JavaScript, assets locais, IDs duplicados, dimensões e textos alternativos das imagens, conteúdo obrigatório, comparador, lazy loading e suporte a movimento reduzido.

## Mídia

A interface usa principalmente fotografias reais do Pexels, armazenadas localmente e otimizadas. A licença do Pexels permite uso e modificação em sites.

- Polimento profissional — Dextar Studio: <https://www.pexels.com/photo/person-polishing-the-surface-of-a-car-14615262/>
- Cuidado da pintura — Orhun Rüzgar ÖZ: <https://www.pexels.com/photo/person-waxing-a-car-6026083/>
- Carro azul — astesmedia: <https://www.pexels.com/photo/blue-sports-car-in-urban-setting-with-palm-trees-36031716/>
- Licença: <https://www.pexels.com/license/>

O banner de movimento e a camada “Antes” do comparador são imagens conceituais geradas. No comparador, a edição parte da fotografia real do mesmo veículo e preserva posição, enquadramento e geometria. Fotografias de banco e depoimentos demonstrativos não representam instalações, profissionais, clientes ou atendimentos reais da Vértice.
