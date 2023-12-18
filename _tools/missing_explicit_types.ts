// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import { discoverPackages, discoverExportsByPackage} from "./packages.ts";
import { join } from "../path/mod.ts";
import $ from "https://deno.land/x/dax@0.36.0/mod.ts";

const packages = await discoverPackages();
const exportsByPackage = await discoverExportsByPackage(packages);

for (const pkg of packages) {
  const exports = exportsByPackage.get(pkg)!;
  const paths = [];
  for (const [_name, path] of exports) {
    if (path.endsWith(".json")) {
      continue;
    }
    paths.push(join(pkg, path));
  }
  if (paths.length === 0) {
    continue;
  }

  const text = await $`deno doc --lint ${paths}`.printCommand().env("NO_COLOR", "1").noThrow().captureCombined().text();
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("error:")) {
      // ignore
    } else if (line.includes("Missing JSDoc comment.")) {
      i += 2;
    } else {
      console.log(line);
    }
  }
}
