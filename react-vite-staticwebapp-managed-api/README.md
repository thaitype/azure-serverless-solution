# react-vite-staticwebapp-managed-api

To install dependencies:

```bash
pnpm install
```

To run:

```bash
pnpm dev
```

then go to http://localhost:3000

for API go to http://localhost:3030/api/hello

## Deploy

```
az login
az account set --subscription <subscription-id>
pnpm build
pnpm run deploy
```

## Screenshot

![Screenshot](./docs/screenshot.png)
