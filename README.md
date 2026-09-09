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
- `_pages/research.md`: publication page
- `_pages/cv.md`: education and experience
- `_projects/`: project card content and external links (individual pages are disabled)
- `_news/`: dated homepage announcements
- `_data/socials.yml`: contact links
- `assets/img/`: photographs and project images
- `_config.yml`: site identity, URL, and theme features

## Build and publication

The `Build and deploy site` workflow builds with the same Docker image used locally. Pushes to `al-folio` and pull requests into `main` only upload a preview artifact; they never deploy. Pushes to `main` publish the successful build directly to GitHub Pages. The workflow can also be run manually; only runs on `main` deploy.

Before merging, set repository Settings > Pages > Source to GitHub Actions. If the `github-pages` environment restricts deployment branches, allow `main`. No personal access token or local Docker deployment is needed.

See `MIGRATION.md` for publication steps. The previous React source is preserved on `react-backup`; this workflow does not write to `gh-pages`.
