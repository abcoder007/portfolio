# Abdallah Id Lahcen — Portfolio

Personal portfolio built with HTML, CSS, and vanilla JavaScript. Canonical website: [abdev.online](https://abdev.online/).

## GitHub Pages

GitHub Pages serves the `master` branch from the repository root (`/`). The site uses relative asset links and requires no build step. `.nojekyll` keeps the static files unchanged during publishing.

The current website source is `index.html`, `styles.css`, and `app.js`. Its screenshots, favicon, and original CV are in `assets/`; `robots.txt` and `sitemap.xml` point to the canonical domain.

The downloadable CV (`assets/abdallah-id-lahcen-cv.pdf`) is the original CV. Employment details on the website reflect the newer LinkedIn history.

Historical project pages, images, scripts, and the original root `cv.pdf` remain available to preserve existing links. They are retained as legacy content and are separate from the current homepage.

## Local preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173/](http://127.0.0.1:4173/).

## Verification

Run `node --check app.js` for JavaScript syntax. Check the page in a browser when changing layout or interactions. Google Fonts use system fallbacks; email links open the visitor’s mail application. The site has no form backend or analytics tracking.
