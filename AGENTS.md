# AGENTS.md

This file provides guidance to coding agents (e.g. Claude Code, claude.ai/code) when working with code in this repository.

## Repository purpose

`@bytebuilders/deploy-button` — an embeddable JavaScript widget that renders a "Deploy to ByteBuilders" button on third-party sites (vendor catalogs, docs, demos). Clicking it opens a modal that hands the user off to the ByteBuilders console with the chart/source pre-filled. Built with webpack and shipped as a minified bundle under `dist/`.

## Architecture

- `src/` — widget source (the `DeployButton` class, modal logic, styles).
- `modal.html` — modal template.
- `public/` — static assets.
- `dist/` — built bundle (committed for direct CDN consumption).
- `webpack.config.js` — bundler config.
- `package.json` — npm scripts and dependencies.

## Common commands

- `npm install` — install dependencies.
- `npm run build` — webpack production build → `dist/`.
- (No tests configured.)

## Conventions

- This is an **embeddable widget**, not a SPA. Keep the bundle small and self-contained.
- The bundle is checked into `dist/` so third parties can consume it directly from GitHub; rebuild + commit `dist/` when changing `src/`.
- Don't introduce global state that conflicts with the host page.
- License: see `LICENSE` if present.
