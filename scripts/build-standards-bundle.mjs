import { readFile, writeFile } from "node:fs/promises";

const fromRoot = (path) => new URL(`../${path}`, import.meta.url);
const bundlePath = fromRoot("data/standards/bundle.js");

const readJson = async (path) =>
  JSON.parse(await readFile(fromRoot(path), "utf8"));

const index = await readJson("data/standards/index.json");
const standards = {};
const translations = {};

for (const entry of index) {
  standards[entry.path] = await readJson(entry.path);

  if (entry.translationsPath) {
    const translationPack = await readJson(entry.translationsPath);

    if (translationPack.standardId && translationPack.standardId !== standards[entry.path].id) {
      throw new Error(
        `Translation pack ${entry.translationsPath} belongs to ${translationPack.standardId}, not ${standards[entry.path].id}`
      );
    }

    translations[entry.translationsPath] = translationPack;
  }
}

await writeFile(
  bundlePath,
  `window.FLIPCARDS_STANDARDS_BUNDLE = ${JSON.stringify({
    index,
    standards,
    translations
  })};\n`
);
