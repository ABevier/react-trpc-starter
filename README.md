# React-tRPC-starter

# TODO

- Deploy React site
- Ensure Prisma works when deployed in lambda
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
cp ./packages/server/.env.example ./packages/server/.env
```

## Dev

Install dependencies and start both frontend and backend processes

```
pnpm install
pnpm run dev
```

# Dependencies

[`tea/cli`] will automagically make these available to your environment.

| Project    | Version  |
| ---------- | -------- |
| nodejs.org | =18.16.0 |
