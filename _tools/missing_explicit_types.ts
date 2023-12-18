// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import { discoverExportsByPackage, discoverPackages } from "./packages.ts";
import { join } from "../path/mod.ts";
import $ from "https://deno.land/x/dax@0.36.0/mod.ts";

const packages = await discoverPackages();
const exportsByPackage = await discoverExportsByPackage(packages);

const paths = [];
for (const pkg of packages) {
  const exports = exportsByPackage.get(pkg)!;
  for (const [_name, path] of exports) {
    if (path.endsWith(".json")) {
      continue;
    }
    paths.push(join(pkg, path));
  }
}

paths.push("./types.d.ts");

const text = await $`deno doc --lint ${paths}`.printCommand().env(
  "NO_COLOR",
  "1",
).noThrow().captureCombined().text();
const lines = text.split("\n");
let currentMessageCount = 0;
let currentJsDocCount = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes("Missing JSDoc comment.")) {
    currentJsDocCount++;
    currentMessageCount++;
  } else if (line.trimStart().startsWith("at ")) {
    if (currentJsDocCount !== currentMessageCount) {
      console.log(line);
    } else {
      i++; // skip a blank line
    }
    currentJsDocCount = 0;
    currentMessageCount = 0;
  } else {
    if (line.trim().length > 0) {
      currentMessageCount++;
    }
    console.log(line);
  }
}
