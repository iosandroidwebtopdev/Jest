/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type LogMessage = string;
export type LogEntry = {|
  message: LogMessage,
  origin: string,
  type: LogType,
|};
export type LogType = 'debug' | 'log' | 'info' | 'warn' | 'error';
export type ConsoleBuffer = Array<LogEntry>;
