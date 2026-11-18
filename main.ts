// Entry program for the make.fun bounty news-image-20261118.
//
// Copies the prepared image ./entry.png to the output location the
// competition harness expects: $MAKEFUN_OUTPUT_DIR/entry.png, or
// /output/entry.png when that variable is not set.
//
// Only the Node.js standard library is used (node:fs and node:path),
// so the program is deterministic and makes no network requests.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const src = join(import.meta.dirname, "entry.png");
// Guard: refuse to run if the prepared image is missing, so a failed
// build can never silently produce an empty or stale output.
if (!existsSync(src)) {
  throw new Error("entry.png is missing next to main.ts");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
