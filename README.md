# Abdallah Id Lahcen — Portfolio

Personal portfolio built with HTML, CSS, and vanilla JavaScript. Website: [abdev.online](https://abdev.online/), hosted by GitHub Pages.

## GitHub Pages

GitHub Pages serves the `master` branch from the repository root (`/`). The site uses relative asset links and requires no build step. `.nojekyll` keeps the static files unchanged during publishing.

The current website source is `index.html`, `styles.css`, and `app.js`. Its screenshots, favicon, and current CV are in `assets/`; `robots.txt` and `sitemap.xml` point to the canonical domain.

The downloadable CV (`assets/abdallah-id-lahcen-cv.pdf`) reflects the current profile, work history, and skills. The same PDF is served at `/cv.pdf` for existing links. Versioned download links help returning visitors receive the update.

Historical project pages, images, and scripts remain available to preserve existing links. They are retained as legacy content and are separate from the current homepage.

## Local preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173/](http://127.0.0.1:4173/).

## Verification

Run `node --check app.js` for JavaScript syntax. Check the page in a browser when changing layout or interactions. Google Fonts use system fallbacks; email links open the visitor’s mail application. The site has no form backend or analytics tracking.

## Structured data

`index.html` contains one static JSON-LD graph in `script#portfolio-schema`: `WebSite`, `ProfilePage`, `Person`, dated employment and freelance roles, organizations, and an `ItemList` of nine projects. Portfolio project entries use `CreativeWork`; the two public source repositories use `SoftwareSourceCode`.

Keep this graph aligned with the visible page and project details in `app.js`. Preserve month-level work dates, omit an end date for the current role, and keep PetPals marked as in development. Validate changes with [Schema.org Validator](https://validator.schema.org/) and check supported Google features with [Rich Results Test](https://search.google.com/test/rich-results). Structured data does not guarantee a particular search appearance.

## Updating the CV

The editable source is `scripts/build_cv.py`. With ReportLab installed, run `python3 scripts/build_cv.py` to generate `output/pdf/abdallah-id-lahcen-cv.pdf`. Visually review the PDF before copying it to `assets/abdallah-id-lahcen-cv.pdf` and `cv.pdf`. Keep its facts and language names aligned with the page.
