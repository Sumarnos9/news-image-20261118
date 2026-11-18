// Entry program for the make.fun bounty news-image-20261118:
// "Sum up 18 November's world news in one image".
//
// The finished artwork is ./entry.png, sitting next to this file.
// All this program does is place an exact copy of it where the
// competition harness expects it: $MAKEFUN_OUTPUT_DIR/entry.png,
// falling back to /output/entry.png when that variable is unset.
//
// Only node:fs and node:path are used. No network, no randomness,
// no image processing — the output bytes are always identical to
// the artwork that was reviewed before submission.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The artwork has to be present beside this program. If it is not,
// stop loudly instead of writing an empty or stale entry.
const source = join(import.meta.dirname, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const destination = join(outputDir, "entry.png");
copyFileSync(source, destination);
console.log(`wrote ${destination}`);
