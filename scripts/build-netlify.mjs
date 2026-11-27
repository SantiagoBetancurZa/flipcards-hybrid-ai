import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

const fromRoot = (path) => new URL(`../${path}`, import.meta.url);
const toDist = (path) => new URL(`../dist/${path}`, import.meta.url);

// Never publish editor/OS cruft or the runaway *.backup* snapshots that can
// pile up inside data/, audio/, and assets/. This keeps Netlify deploys lean and avoids
// exposing stale copies of the glossary at the public URL.
const EXCLUDE_FROM_DIST = /(^|\/)\.DS_Store$|\.backup($|[-.])|\.tmp$|\.log$/i;
const copyFilter = (source) => !EXCLUDE_FROM_DIST.test(source);

const files = [
  "index.html",
  "privacy.html",
  "styles.css",
  "script.js",
  "sw.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
];

await rm(fromRoot("dist"), { recursive: true, force: true });
await mkdir(fromRoot("dist"), { recursive: true });

for (const file of files) {
  await cp(fromRoot(file), toDist(file));
}

await cp(fromRoot("data"), toDist("data"), { recursive: true, filter: copyFilter });
await cp(fromRoot("audio"), toDist("audio"), { recursive: true, filter: copyFilter });
await cp(fromRoot("assets"), toDist("assets"), { recursive: true, filter: copyFilter });

if (existsSync(fromRoot(".well-known"))) {
  await cp(fromRoot(".well-known"), toDist(".well-known"), { recursive: true, filter: copyFilter });
}
