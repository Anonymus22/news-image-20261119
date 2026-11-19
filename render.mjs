// Renders poster.html to entry.png at exactly 1024x1024, and also writes a
// 300px-wide preview (preview300.png) so the design can be checked at the
// size the judge's "reads at 300 pixels" test implies.
//
// Puppeteer is borrowed from the radar shots-tool install:
//   node render.mjs
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire('/home/hatch/workspace/makefun/radar/shots-tool/package.json');
const puppeteer = require('puppeteer');

const here = dirname(fileURLToPath(import.meta.url));
const posterUrl = pathToFileURL(join(here, 'poster.html')).href;
const entryPath = join(here, 'entry.png');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto(posterUrl, { waitUntil: 'load', timeout: 60000 });
  await page.screenshot({ path: entryPath, type: 'png' });
  console.log('wrote', entryPath);

  // Legibility preview: the same picture squeezed to 300px wide. Written as
  // a real file (not setContent) so the file:// image is allowed to load.
  const { writeFileSync } = await import('node:fs');
  const previewHtml = '/tmp/news20261119-preview.html';
  writeFileSync(previewHtml, `<body style="margin:0"><img src="${pathToFileURL(entryPath).href}" width="300" height="300"></body>`);
  const preview = await browser.newPage();
  await preview.setViewport({ width: 300, height: 300, deviceScaleFactor: 1 });
  await preview.goto(pathToFileURL(previewHtml).href, { waitUntil: 'networkidle0', timeout: 60000 });
  await preview.screenshot({ path: '/tmp/preview300.png', type: 'png' });
  console.log('wrote /tmp/preview300.png');
} finally {
  await browser.close();
}
