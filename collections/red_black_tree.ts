// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

import {
  ascend as ascend_,
  descend as descend_,
} from "./unstable_comparators.ts";
import { RedBlackTree as RedBlackTree_ } from "./unstable_red_black_tree.ts";

/** @deprecated (will be removed after 0.206.0) import from `collections/unstable_red_black_tree.ts` instead. */
export const ascend: typeof ascend_ = ascend_;
/** @deprecated (will be removed after 0.206.0) import from `collections/unstable_red_black_tree.ts` instead. */
export const descend: typeof descend_ = descend_;
/** @deprecated (will be removed after 0.206.0) import from `collections/unstable_red_black_tree.ts` instead. */
export class RedBlackTree<T> extends RedBlackTree_<T> {}
