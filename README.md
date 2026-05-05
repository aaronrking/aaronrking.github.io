# Aaron R. King academic website

This is a Quarto website designed for GitHub Pages and the repository `aaronrking.github.io`.

## Local preview

Install Quarto: https://quarto.org/docs/get-started/

```bash
quarto preview
```

## Render the site

```bash
quarto render
```

The rendered site will be written to the `docs/` folder. In GitHub, set Pages to publish from the `main` branch and `/docs` folder.

## Publish updates

```bash
git add .
git commit -m "Update website"
git push
```

## Custom domain

The root `CNAME` file sets the canonical domain to `aaronrking.com`. Quarto should copy it into `docs/` when rendering. After publishing, configure GitHub Pages and DNS records for the apex domain and `www` variant.
