// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import { createExtractor, Extractor, Parser } from "./create_extractor.ts";
import { Format } from "./_formats.ts";
import { test as _test } from "./test.ts";
import { parse } from "../toml/parse.ts";

export { Format } from "./_formats.ts";

/* @deprecated (will be removed after 0.210.0) Import test from test.ts and use `test(str, ["toml"])`. */
export function test(str: string): boolean {
  return _test(str, [Format.TOML]);
}

export const extract: Extractor = createExtractor({
  [Format.TOML]: parse as Parser,
});
/** @deprecated (will be removed after 0.210.0) import `extract` (named export) instead. */
export default extract;
