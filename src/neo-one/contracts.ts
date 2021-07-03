/* @hash 65b98f0b8f28d3f1c5b60a219e8b8904 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { TestICOSmartContract, TestICOMigrationSmartContract } from './TestICO/types';
import { TestTokenSmartContract, TestTokenMigrationSmartContract } from './TestToken/types';

import { createTestICOSmartContract } from './TestICO/contract';
import { createTestTokenSmartContract } from './TestToken/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly testIco: TestICOSmartContract<TClient>;
  readonly testToken: TestTokenSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly testIco: TestICOMigrationSmartContract;
  readonly testToken: TestTokenMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  testIco: createTestICOSmartContract(client),
  testToken: createTestTokenSmartContract(client),
});
