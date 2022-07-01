# Next.js, Prisma, TRPC Demo

This is a [Next.js](https://nextjs.org/) project implementing [Prisma](https://www.prisma.io/) and [TRPC](https://trpc.io/) to access a Postgres database.

## Getting Started

Requirements:

- Docker
- Yarn

First, install dependencies:

```bash
yarn install
```

Next, start the docker postgres database:

```bash
yarn db:start
```

Finally, start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Overview

top-level directories:

- `components` - individual react components
- `lib` - server libraries (this is where our TRPC logic is)
- `pages` - Next.js file-system based pages
- `prisma` - Prisma schema and migrations
- `public` - public assets
- `styles` - css for styling
- `utils` - client-side utilities

## How to develop

#### Modify the Prisma Schema

1. Add a `model` to the `schema.prisma` file in `./prisma`
2. Run `yarn prisma migrate dev` to generate the migration and client

#### Create the TRPC router

1. Add a new router to `./lib/trpc/routers/*` to access data
2. Merge the router in `./lib/trpc/trpc.ts`

#### Build 🔨

1. Build the components/pages that use the `trpc` util from `./utils/trpc.ts`
