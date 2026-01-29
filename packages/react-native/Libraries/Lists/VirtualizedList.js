/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import VirtualizedLists from '@not-react-native-macos/virtualized-lists'; // [macOS]

type VirtualizedListType = typeof VirtualizedLists.VirtualizedList;
const VirtualizedListComponent: VirtualizedListType =
  VirtualizedLists.VirtualizedList;

export type {
  ListRenderItemInfo,
  ListRenderItem,
  ListViewToken,
  Separators,
  VirtualizedListProps,
} from '@not-react-native-macos/virtualized-lists'; // [macOS]
export default VirtualizedListComponent;
