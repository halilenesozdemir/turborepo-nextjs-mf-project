# Next.js Micro-Frontends with Module Federation

A Turborepo monorepo where one Next.js host app loads pages and components from two independently built Next.js remotes at runtime, using Webpack Module Federation (`@module-federation/nextjs-mf`).

## Architecture

| App | Port | Role |
| --- | --- | --- |
| `apps/host-next` | 3010 | Host. Consumes `remote_next/page`, `remote_next/component` and `other_remote/page` |
| `apps/remote-next` | 3020 | Remote. Exposes `./page` and `./component` |
| `apps/other-remote` | 3015 | Remote. Exposes `./page` |

Shared packages:

- `packages/ui` — React components used by every app (`HostPage`, `RemotePage`, `Button`, `Typography`)
- `packages/tsconfig`, `packages/eslint-config-custom` — shared TypeScript and ESLint config

Remotes are loaded client-side with `next/dynamic` (`ssr: false`) inside `Suspense`. Remote URLs come from `REMOTE_NEXT_URL` and `REMOTE_OTHER_URL`, falling back to localhost.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3010 (host). Each remote can also be opened on its own port.

## Stack

Next.js 13 · TypeScript · Turborepo · pnpm workspaces · Module Federation
