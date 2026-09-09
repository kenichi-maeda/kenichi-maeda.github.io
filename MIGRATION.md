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
3. Add a deployment workflow restricted to pushes on `main`, building with the same Docker image and publishing `_site` to `gh-pages`. Confirm GitHub Pages uses `gh-pages` as its source before enabling deployment.
4. Merge the reviewed migration into `main` and allow that workflow to publish. Do not run the previous React `npm run deploy` command.

The production configuration is `url: https://kenichi-maeda.github.io` with an empty `baseurl`. A preview hosted under a separate repository path needs its own baseurl override.

No GitHub fork or new repository is involved. Creating this local branch does not change the remote repository or live site.
