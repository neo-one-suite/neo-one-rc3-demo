/* @hash 14a0b1942e9242f99637c7235baa6c13 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'TestICO', filePath: path.resolve(__dirname, '../../neo-one/contracts/TestICO.ts') },
  { name: 'TestToken', filePath: path.resolve(__dirname, '../../neo-one/contracts/TestToken.ts') },
]);
