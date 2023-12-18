// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

import { BinaryHeap as BinaryHeap_ } from "./unstable_binary_heap.ts";
import {
  ascend as ascend_,
  descend as descend_,
} from "./unstable_comparators.ts";

/** @deprecated (will be removed after 0.206.0) import from `collections/unstable_binary_heap.ts` instead */
export const ascend: typeof ascend_ = ascend_;
/** @deprecated (will be removed after 0.206.0) import from `collections/unstable_binary_heap.ts` instead */
export const descend: typeof descend_ = descend_;
/** @deprecated (will be removed after 0.206.0) import from `collections/unstable_binary_heap.ts` instead */
export class BinaryHeap<T> extends BinaryHeap_<T> {}
