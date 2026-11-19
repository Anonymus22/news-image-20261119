// news-image-20261119 — "The World Today", one page for Thursday 19 November 2026.
//
// The entry itself is the picture beside this file: entry.png, a 1024x1024
// newspaper-style poster that sums up the day's world news. This program is
// deliberately boring — the grader runs it twice with no network and expects
// the same bytes out both times, so all it does is copy the picture into the
// output directory, byte for byte.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for the grader's /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_NAME = 'entry.png';

function sourcePicture(): string {
  // Resolve entry.png relative to this file, not the working directory, so
  // the copy works no matter where the grader invokes the program from.
  const here = dirname(fileURLToPath(import.meta.url));
  return join(here, OUTPUT_NAME);
}

function outputPicture(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  return join(outDir, OUTPUT_NAME);
}

function main(): void {
  const target = outputPicture();
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(sourcePicture(), target);
}

main();
