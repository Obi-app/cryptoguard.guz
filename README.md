# CryptoGuard.GUZ homepage

A static search homepage and public mission page. GitHub Pages publishes this site for free from the `codex/cryptoguard-homepage` branch using the workflow in `.github/workflows/pages.yml`.

The homepage sends submitted searches to Google over HTTPS. CryptoGuard does not operate its own web crawler or search index.

## Security scope

This is a static website, not a protected browser. Guardian threat detection, malware scanning, downloads, website permissions, and account protections are not implemented here. The site contains no login or visitor tracking. Search terms are sent to Google when a visitor submits a search.

The Node preview server adds response security headers for local development; GitHub Pages hosts the static files and does not run that server. Do not put credentials, API keys, or private data in this public repository.
