# My Ly — Portfolio

A React + Vite portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and publishes the site automatically every time you push to `main`.

1. Push this repo to GitHub as **`my-ly-portfolio`** (or update `base` in
   `vite.config.js` to match whatever repo name you use).
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes it.
4. Your site will be live at:
   `https://<your-username>.github.io/my-ly-portfolio/`

If you rename the repo to `<your-username>.github.io` (a user site), set
`base: '/'` in `vite.config.js` instead.
