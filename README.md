# CryptoGuard.GUZ homepage

Public search homepage: https://obi-app.github.io/cryptoguard.guz/

GitHub Pages publishes the static site for free from `main`. The homepage sends web searches to Google; CryptoGuard does not operate its own web crawler or index. Google receives queries when visitors search.

## Security and maintenance

The static page uses a restrictive Content Security Policy and a no-referrer policy. GitHub Pages provides HTTPS. The scheduled `CryptoGuard site health` workflow checks the public homepage and stylesheet over HTTPS, verifies expected security controls, and also runs after a successful site deployment. Dependabot checks GitHub Actions weekly and proposes updates for review.

These checks detect problems; they do not repair or rewrite the website automatically. Website changes still require review and a normal deployment.

This is a search homepage, not a protected browser. Guardian threat detection, malware scanning, download quarantine, website permission controls, and cryptocurrency wallet protections are not implemented here.

The Node preview server adds response security headers locally; GitHub Pages hosts static files and does not run that server. Do not put credentials, API keys, or private data in this public repository.
