# AI Agency Landing

## Run locally

```powershell
$env:PATH = "D:\software\nodejs;" + $env:PATH
& "D:\software\nodejs\node.exe" "D:\software\nodejs\node_modules\npm\bin\npm-cli.js" install
& "D:\software\nodejs\node.exe" "D:\software\nodejs\node_modules\npm\bin\npm-cli.js" run dev
```

## Build

```powershell
$env:PATH = "D:\software\nodejs;" + $env:PATH
& "D:\software\nodejs\node.exe" "D:\software\nodejs\node_modules\npm\bin\npm-cli.js" run build
```

## Deploy

### Vercel
1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Keep the default build command: `npm run build`.
4. Keep the output directory: `dist`.

### Netlify
1. Push this folder to GitHub.
2. Import the repo into Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`
