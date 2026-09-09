# Kenichi Maeda

Personal academic website built with [al-folio v0.14.0](https://github.com/alshedivat/al-folio/tree/v0.14.0) and Jekyll. The theme is imported from its release archive, not forked. Its original MIT license is retained in `LICENSE`.

## Local preview

Start Docker Desktop, then run from this directory:

```powershell
docker compose up
```

Open http://localhost:8080. Content changes rebuild automatically. After changing `_config.yml`, run `docker compose restart`. Stop with Ctrl+C, or `docker compose down` for a detached preview.

The source is mounted read-only; generated output stays inside the container. Responsive image generation is disabled so Jekyll does not write thumbnails into source files.

## Editing content

- `_pages/about.md`: biography and homepage settings
- `_data/profile_sections.yml`: homepage education and experience entries, including logos
- `_data/publications.yml`: publication metadata, thumbnails, and resource links
- `_pages/research.md`: publication page introduction and talks
- `_pages/cv.md`: education and experience
- `_projects/`: individual project pages
- `_news/`: dated homepage announcements
- `_data/socials.yml`: contact links
- `assets/img/`: photographs and project images
- `_config.yml`: site identity, URL, and theme features

## Build and publication

The `al-folio` branch workflow builds the site and uploads a preview artifact. It does not deploy. Nothing is published merely by pushing this branch.

See `MIGRATION.md` for review and publication steps. The previous React site remains in the `main` branch's Git history.
