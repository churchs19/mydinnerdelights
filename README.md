# Dinner Delights

Dinner Delights is a Nuxt 4 static website for a personal chef in Des Moines, Iowa. Page content is managed in Storyblok and rendered through Storyblok components in `app/storyblok/`. The site is generated for deployment to Netlify.

## Prerequisites

- Node.js `>=22.19.0`
- npm (the repository includes `package-lock.json`)
- A Storyblok space and access token for local development and builds
- Netlify CLI, if you want to run the Netlify build locally or deploy from the command line

## Environment variables

Create a `.env` file in the project root for local development:

```dotenv
STORYBLOK_ACCESS_TOKEN=your-storyblok-access-token
NUXT_PUBLIC_NODE_ENV=development
# Optional: enables the Meta Pixel script when set
NUXT_PUBLIC_SCRIPTS_META_PIXEL_ID=your-meta-pixel-id
```

`STORYBLOK_ACCESS_TOKEN` is passed to the Storyblok Nuxt module. `NUXT_PUBLIC_NODE_ENV=development` enables Nuxt DevTools. Do not commit `.env` or production secrets.

## Install and develop

Install dependencies with npm:

```bash
npm install
```

Start the standard Nuxt development server at `http://localhost:3000`:

```bash
npm run dev
```

The repository also defines an HTTPS development command:

```bash
npm run dev-ssl
```

This expects `localhost.pem` and `localhost-key.pem` in the project root and is available at the port reported by Nuxt.

## Netlify CLI development

The Netlify configuration uses `npm run generate` for builds, publishes `/dist`, and configures Netlify Dev to run the HTTPS development command on port `8080`.

Install the CLI globally or invoke it with `npx`:

```bash
npm install --global netlify-cli
# or use npx netlify-cli without a global install
```

Authenticate and link the local checkout to an existing Netlify site:

```bash
netlify login
netlify link
```

Run the site through the Netlify development proxy:

```bash
netlify dev
```

Useful Netlify CLI commands:

```bash
netlify env:list
netlify env:set STORYBLOK_ACCESS_TOKEN your-storyblok-access-token
netlify env:set NUXT_PUBLIC_SCRIPTS_META_PIXEL_ID your-meta-pixel-id
netlify build
netlify deploy --prod
```

Use `netlify env:set` for the site environment rather than committing secrets to the repository. When using `netlify dev`, make sure the certificate files required by `npm run dev-ssl` are available.

## Build and preview

Generate the static site using the project script:

```bash
npm run generate
```

Build the Nuxt application directly when you need a production server bundle:

```bash
npm run build
```

Preview a Nuxt production build locally:

```bash
npm run preview
```

For the Netlify-equivalent build and publish configuration, use:

```bash
netlify build
```

## Project scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Nuxt development server on the default port (`3000`) |
| `npm run dev-ssl` | Start Nuxt development server with local HTTPS certificates |
| `npm run generate` | Generate the static site used by Netlify |
| `npm run build` | Build the Nuxt application |
| `npm run preview` | Preview the production build locally |

## Deployment

Netlify reads [netlify.toml](netlify.toml). Its production build runs `npm run generate` and publishes `/dist`. Configure `STORYBLOK_ACCESS_TOKEN` in the Netlify site environment before deploying:

```bash
netlify env:set STORYBLOK_ACCESS_TOKEN your-storyblok-access-token
netlify build
netlify deploy --prod
```

The site can also be deployed through the Netlify dashboard using the repository's existing `netlify.toml` configuration.

## Content editing

Storyblok content is fetched by the catch-all route in `app/pages/[...slug].vue` and mapped to Vue components in `app/storyblok/`. Storyblok preview mode is supported by the preview plugin in `app/plugins/preview.js`.
