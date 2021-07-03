/* @hash 3da0acd85462134009cac06a89e2b55e */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { TestICOSmartContract } from './types';
import { testIcoManifest } from './manifest';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'Ncv9S3DUSo9fyS414cdi6VsEczJnGQ7zDC',
    },
  },
  manifest: testIcoManifest,
  sourceMaps,
};

export const createTestICOSmartContract = <TClient extends Client>(client: TClient): TestICOSmartContract<TClient> =>
  client.smartContract(definition);
