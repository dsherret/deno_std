// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import { createExtractor, type Extractor, Parser } from "./create_extractor.ts";
import { test as _test } from "./test.ts";
import { parse } from "../yaml/parse.ts";

export { Format } from "./_formats.ts";

/** @deprecated (will be removed after 0.210.0) Import {@link https://deno.land/std/front_matter/yaml.ts} and use `test(str, ["yaml"])` instead. */
export function test(str: string): boolean {
  return _test(str, ["yaml"]);
}

export const extract: Extractor = createExtractor({
  ["yaml"]: parse as Parser,
});
/** @deprecated (will be removed after 0.210.0) Import {@linkcode extract} as a named import instead. */
export default extract;
