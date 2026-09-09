# al-folio migration

## Prepared

- Imported al-folio v0.14.0 with its matching Docker image.
- Migrated the biography, two publications, one talk, four projects, education, internships, contact details, and two news items.
- Preserved the original site URL, Google site verification token, and images.
- Added a build-only GitHub Actions workflow for the migration branch and pull requests to main.
- Kept deployment disabled during review.
- Disabled the optional HTML minifier after a production build spent several minutes in that step. Sass and JavaScript compression remain enabled.

## Content to review

The original biography says the Brown M.S. is in progress, while the education component says “Incoming student.” This version follows the biography and keeps the original 2025 start date. Confirm the current degree status before publication.

The mesh repair paper is still marked “Under review,” matching the source. Its old link pointed back to the homepage, so it is omitted until an actual paper URL is available.

The CV is an HTML page; the source site did not provide a PDF CV. No new credentials, dates, or publication claims have been invented.

## Publish after review

1. Review the local preview at http://localhost:8080, including the mobile layout, project links, contact email, and research status.
2. Commit and push the `al-folio` branch when ready. Inspect the build workflow's preview artifact.
3. In repository Settings > Pages, change Source to GitHub Actions. If Settings > Environments > github-pages restricts deployment branches, allow `main`.
4. Merge the reviewed migration into `main`. The `Build and deploy site` workflow builds with the same Docker image and publishes `_site` directly through GitHub Pages after a successful build. Do not run the previous React `npm run deploy` command.
5. Wait for the deploy job to finish, then check the live site. If setup was incomplete, rerun the workflow on `main` after correcting the settings.

Pushes to `al-folio` and pull requests never deploy. The previous React source is backed up on `react-backup`, and this workflow leaves the existing `gh-pages` branch untouched.

The production configuration is `url: https://kenichi-maeda.github.io` with an empty `baseurl`. A preview hosted under a separate repository path needs its own baseurl override.

No GitHub fork or new repository is involved. Creating this local branch does not change the remote repository or live site.
