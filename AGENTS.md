# AGENTS.md

This file provides guidance to coding agents (e.g. Claude Code, claude.ai/code) when working with code in this repository.

## Repository purpose

`@bytebuilders/deploy-button` is an embeddable JavaScript widget that renders a "Deploy with ByteBuilders" button on third-party pages (vendor catalogs, docs sites, demos). When the visitor clicks the button, a full-screen modal opens an `<iframe>` pointing at the ByteBuilders deploy console (`deploy.byte.builders`) with the chart or product context pre-filled.

The package is bundled with webpack as a UMD library, published to npm as `@bytebuilders/deploy-button`, and committed to `dist/` so it can also be consumed directly via a `<script>` tag from a CDN / GitHub. There is no UI framework, no router, no build-time CSS — everything is imperative DOM manipulation and inline style strings so the widget can be dropped onto any host page without interfering with the host's stack.

## Tech stack

| Layer | Library / Tool |
|---|---|
| Language | ES2018 JavaScript (no TypeScript) |
| Bundler | webpack 4 (UMD output, `library: BytebuildersDeployButton`) |
| Minifier | `uglifyjs-webpack-plugin` |
| Transpiler | Babel (`@babel/preset-env`, browser targets: `last 2 versions, safari >= 7`) |
| Icons | `@fortawesome/fontawesome-svg-core` + `@fortawesome/free-solid-svg-icons` |
| Linting | ESLint 6 with `airbnb-base` (+ `eslint-plugin-html`, `eslint-plugin-import`) |
| CI | GitHub Actions (Node.js 22, Ubuntu 24.04) |
| Tests | None configured |
| Node requirement | CI uses Node 22 |

## Folder structure

```
deploy-button/
├── src/
│   └── js/
│       ├── index.js            # Entry point. Exports `initialize(ref, conf)`. Renders button + modal HTML, wires events.
│       ├── event-handlers.js   # iFrameDomain table (local/dev/prod), button hover handlers, ESC keydown handler,
│       │                       # postMessage handler that toggles modal visibility and swaps to "Need to sign in" state.
│       └── styles.js           # `css(el, styles)` helper + `addStyles(...)` that applies inline styles to button & modal.
├── public/
│   └── js/
│       └── bundle.js           # Legacy / alternate prebuilt bundle (older `DbbButton` UMD name). Not produced by current webpack config.
├── dist/
│   └── bytebuilders-deploy-button.min.js   # Production build output. Committed so it can be served from GitHub / CDN.
├── modal.html                  # Demo page: loads `dist/bytebuilders-deploy-button.min.js` and calls `initialize("#ac-bb-deploy", {...})`.
├── webpack.config.js           # Production webpack 4 config (UMD, UglifyJs, babel-loader).
├── .babelrc                    # @babel/preset-env with browser targets.
├── .eslintrc.json              # airbnb-base, browser + es6 env, ecmaVersion 2018, sourceType module.
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # PR + master push: npm ci && npm run build on Node 22.
│   │   └── release.yml         # On `*.*` tag push: build, bump version to tag, `npm publish --access public` using NPM_AUTH_TOKEN.
│   ├── dependabot.yml          # npm ecosystem, daily schedule, open-pull-requests-limit: 0 (notifications-only).
│   └── .kodiak.toml            # Kodiak auto-merge: squash, delete branch on merge, auto-approve tamalsaha / 1gtm bots.
├── package.json
├── package-lock.json
└── .gitignore                  # node_modules
```

## Public API

The bundle exposes a single UMD global, `BytebuildersDeployButton`, with one function:

```js
BytebuildersDeployButton.initialize(selector, config);
```

| Param | Type | Notes |
|---|---|---|
| `selector` | string | CSS selector for the host `<div>` (e.g. `"#ac-bb-deploy"`) that the button + modal will be injected into. |
| `config.mode` | `'local' \| 'dev' \| 'prod'` | Chooses the iframe domain. Falls back to `prod` when unset/unknown. |
| `config.chartUrl` | string | "UC" (URL chart) flow. When present, iframe URL is built from `chart_url`, `chart_name`, `chart_version`. |
| `config.chartName` | string | Used with `chartUrl`. |
| `config.chartVersion` | string | Used with `chartUrl`. |
| `config.productId` | string | "UP" (product) flow. When present (and `chartUrl` is not), iframe URL uses `product_id`. |
| `config.product` | string | Used with `owner` when `productId` is absent. |
| `config.owner` | string | Used with `product`. |

The iframe URL targets, by `mode`:

| Mode | URL |
|---|---|
| `local` | `http://deploy.bb.test:5994` |
| `dev` | `https://deploy.appscode.ninja` |
| `prod` | `https://deploy.byte.builders` |

## How the widget works (runtime flow)

1. `initialize(ref, conf)` injects `buttonHtml` (a styled `<button>` with the ByteBuilders logo) and `getModalHtml(...)` (a hidden fullscreen `.ac-bb-modal` containing an `<iframe>` pointing at the deploy console URL) into the target element.
2. `addStyles(...)` applies all visual styles inline via the `css(el, styles)` helper — no external stylesheet is required on the host page.
3. The iframe height is set to roughly 80% of the viewport (`100vh - 18.5%`).
4. Event listeners are wired:
   - `mouseenter` / `mouseleave` on the button toggle cursor styling.
   - `keydown` on the button hides the modal on `Esc` (keyCode 27).
   - `window` `message` listener (`handleIframeMessages`) processes `postMessage` events whose `origin` is one of the known `iFrameDomain` values.
5. The iframe (deploy console) is expected to post two message types back:
   - `{ type: 'acLogin', isLoggedIn, loginUrl }` — if logged out, prepends a red "Need to sign in" warning (FontAwesome `faExclamationTriangle`) inside the button and rebinds the click to `window.open(loginUrl, '_blank')`. If logged in, binds the click to open the modal.
   - `{ type: 'acModalClose', closeModal }` — when `closeModal` is truthy, hides the modal (`display: none`).
6. The iframe origin is validated against `Object.values(iFrameDomain)` before any message data is trusted.

## Styling

- All styles are applied imperatively from `src/js/styles.js` via the `css(el, styles)` helper that assigns to `el.style[prop]`.
- No CSS / SCSS files, no preprocessors, no Bulma. This is intentional so the widget doesn't fight with the host page's stylesheet.
- Element class names are namespaced with `ac-bb-` (`ac-bb-modal`, `ac-bb-modal-button`, `ac-bb-modal-background`, `ac-bb-modal-content`, `ac-bb-box`, `ac-iframe`) to reduce host-page collisions.
- The Deploy button's brand color is `#003466` on a `#fff` background; the modal backdrop is `rgba(10,10,10,.86)`.

## Common commands

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies. |
| `npm run build` | Webpack production build → `dist/bytebuilders-deploy-button.min.js`. |
| `npm run watch` | `webpack --watch` for iterative development. |
| `npm ci` | Used by CI; clean install from `package-lock.json`. |

There is no `test`, `lint`, or `format` script wired in `package.json` — ESLint is configured but only invoked manually (`npx eslint src/`).

## Local development & manual testing

1. `npm install && npm run build` (or `npm run watch`).
2. Serve the repo root with any static server (e.g. `python3 -m http.server` or `npx serve .`).
3. Open `modal.html` in the browser. The demo calls:
   ```js
   BytebuildersDeployButton.initialize("#ac-bb-deploy", {
     product: "kubedb",
     owner: "appscode",
     mode: "local",
   });
   ```
   so it expects the deploy console running locally at `http://deploy.bb.test:5994` (configure `/etc/hosts` accordingly when testing the `local` mode).
4. To test the `dev` / `prod` modes, change `mode` in `modal.html` accordingly — the deploy console must implement the `postMessage` contract above (`acLogin`, `acModalClose`).

## CI & release

- **CI (`.github/workflows/ci.yml`)** — runs on every PR (any branch) and on pushes to `master`. Steps: checkout, set up Node 22, `npm ci`, `npm run build`. Concurrency group cancels superseded runs.
- **Release (`.github/workflows/release.yml`)** — triggered on push of a tag matching `*.*` (e.g. `0.0.2`). Steps: checkout (full history), Node 22, `npm ci`, `npm run build`, then write `NPM_AUTH_TOKEN` to `~/.npmrc`, bump the version to the tag with `npm --no-git-tag-version --allow-same-version version <tag>`, and `npm publish --access public`. The `NPM_AUTH_TOKEN` secret must be configured in the repo.
- **Dependabot** — daily npm scans, but `open-pull-requests-limit: 0` means it does NOT auto-open PRs; it only refreshes its internal state.
- **Kodiak** — squash-merges, deletes branches on merge, auto-approves PRs from `tamalsaha`, `1gtm`, and `1gtm-app[bot]`.

## Conventions & best practices

- **Embeddable widget, not a SPA.** Keep the bundle small and self-contained; avoid pulling in heavy dependencies. Currently only FontAwesome icons are bundled.
- **Imperative DOM only.** No frameworks, no JSX, no virtual DOM. Build markup with template strings and wire listeners with `addEventListener`.
- **Inline styles only.** Apply all styling through `css(el, styles)` in `src/js/styles.js`. Do not add `.css`/`.scss` files or rely on the host page providing CSS.
- **Namespace everything with `ac-bb-`** to avoid colliding with host-page class names.
- **No globals beyond the UMD export.** Don't leak helpers onto `window`; the only intentional global is `BytebuildersDeployButton` (set by webpack via `library: 'BytebuildersDeployButton'`).
- **Validate `postMessage` origin** against `Object.values(iFrameDomain)` before trusting any message — never widen this check.
- **Commit `dist/` after rebuilding** when `src/` changes. The bundle is consumed directly from GitHub and via npm, so the committed artifact must match the source.
- **Browser support** is dictated by `.babelrc` targets (`last 2 versions, safari >= 7`); don't use syntax/APIs that won't be transpiled or polyfilled for those targets.
- **Lint with airbnb-base** (`.eslintrc.json`). Match its style (single quotes, trailing commas where airbnb expects them, no unused vars, etc.) — the existing files largely follow this style.
- **Releases are tag-driven.** To publish a new version, push a tag like `0.0.2`; the workflow handles `npm version` and `npm publish`. Do not bump `version` in `package.json` manually for releases.
- **No tests** — there is no test harness; if adding behavior, exercise it manually via `modal.html` and document the test steps in the PR description.
