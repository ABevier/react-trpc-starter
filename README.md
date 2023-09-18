# React-tRPC-starter

# TODO
- React Router
- Auth
- CI/CD
- Server does not reload when files change (esbuild serverless plugin)

# Tasks

The following can be run with [`xc`], eg. `xc build`.

## Setup

Setup ensures that required configuration placeholder files are present and
installs dependencies.

```sh
pnpm install
cp ./packages/client/.env.local.example ./packages/client/.env.local
cp ./packages/server/.env.local.example.yml ./packages/server/.env.local.yml
```

## Dev

Install dependencies and start both frontend and backend processes

```sh
pnpm install
pnpm run --filter server prisma:generate
pnpm run dev
```

## Deploy-Client

Build and deploy the front end client

```sh
pnpm install
rm -rf packages/client/dist
pnpm run --filter client build
aws s3 sync packages/client/dist "$CLIENT_S3_BUCKET"/ --delete
# TODO: invalidate CDN
```

## Deploy-Server

Build and deploy the lambda backend

```sh
pnpm install
pnpm run --filter server deploy
```

# Dependencies

[`tea/cli`] will automagically make these available to your environment.

| Project    | Version  |
| ---------- | -------- |
| nodejs.org | =18.16.0 |
