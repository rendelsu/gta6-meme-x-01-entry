// gta6-meme-x-01 entry: copies POST.json from the repository root to /output.
// The entry itself is the post on X: the house reads the post from X (its
// first picture, the meme, plus its text) and hands that to the judge.
// Nothing this program writes about the post is judged.
//
// POST.json is not in this repository yet: it is written by the posting
// session once the meme has been posted on X, holding the post's address as
// {"url": "https://x.com/<handle>/status/<id>"}.
//
// Run it the way the grader does (with POST.json present):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  // Fail loudly instead of handing the gate a broken file: POST.json must
  // be an object naming the post's address.
  const posted = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8'));
  if (!posted || typeof posted.url !== 'string' || !posted.url.startsWith('https://')) {
    throw new Error('POST.json holds no https url');
  }
} catch (err) {
  const detail = err instanceof Error ? err.message : String(err);
  console.error('POST.json could not be copied from ' + BOT_DIR + ': ' + detail);
  process.exit(1);
}
