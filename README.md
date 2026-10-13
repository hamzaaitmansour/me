# Hamza Ait Mansour · portfolio

Static site (HTML, CSS, JS, no build step), French and English. Open `index.html` directly, or serve the folder:

```sh
python -m http.server 5181
```

## Folders

| Path | What it holds |
|---|---|
| `index.html` | The page: hero, projects, services, experience, about, contact. Project detail pages open at `#/dossier/<id>`. |
| `assets/css/main.css` | All styles (noir one-sheet: ink, amber, poster stock). |
| `assets/js/content.js` | **All the text** in FR and EN: projects, services, experience. Edit here to change the content. |
| `assets/js/main.js` | Behaviour: language switch, the light that swings the shadow, cards, dossiers, accordions. |
| `assets/img/` | Web copies of the photos (from `Desktop/pfe-pics`) and the app screenshots. |
| `assets/fonts/` | League Gothic and Courier Prime (self-hosted). |
| `cv/fr/` | French CVs: `hamza.aitmansour-flutter.pdf` (linked) and `hamza.aitmansour.se.pdf` (kept, not linked). |
| `cv/eng/` | English Flutter CV `hamza.aitmansour-flutter-en.pdf`, linked when the visitor picks EN. |
| `notes/` | Your private notes (`links.txt`). Excluded by `.gitignore`. |
| `PRODUCT.md`, `DESIGN.md`, `.impeccable/` | Product brief, design system and impeccable decisions. `.impeccable/` stays local (in `.gitignore`). |

## Publish on GitHub Pages

1. Create a repository (for example `hamzaaitmansour.github.io` for the root address, or any name for `/name/`).
2. Push this folder's content. `.nojekyll` is already there.
3. In the repository settings, go to Pages and choose Deploy from branch `main`, folder `/ (root)`.

## Still to add

- A LinkedIn link (not given yet). Add it to the hero list and the contact chips in `index.html`.
