'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']]
]);
const headers = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; style-src 'self'; form-action https://www.google.com; base-uri 'none'; object-src 'none'; frame-ancestors 'none'",
  'Strict-Transport-Security': 'max-age=31536000'
};
const server = http.createServer((req, res) => {
  let pathname;
  try { pathname = new URL(req.url, 'http://localhost').pathname; }
  catch { res.writeHead(400, headers).end('Bad request'); return; }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { ...headers, Allow: 'GET, HEAD' }).end('Method not allowed'); return;
  }
  const entry = files.get(pathname);
  if (!entry) { res.writeHead(404, { ...headers, 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found'); return; }
  fs.readFile(path.join(__dirname, entry[0]), (error, data) => {
    if (error) { res.writeHead(500, { ...headers, 'Content-Type': 'text/plain; charset=utf-8' }).end('Server error'); return; }
    res.writeHead(200, { ...headers, 'Content-Type': entry[1], 'Content-Length': data.length });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});
const port = Number(process.env.PORT) || 10000;
server.listen(port, '0.0.0.0', () => console.log('CryptoGuard homepage listening on port ' + port));
