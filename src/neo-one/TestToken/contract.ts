/* @hash aa2bf64e33059d6bc1d9b0ee8b5c26cd */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { TestTokenSmartContract } from './types';
import { testTokenManifest } from './manifest';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'NRFYC9ErF3ZtLdRCDiHt4LkLQUMG5x3EbE',
    },
  },
  manifest: testTokenManifest,
  sourceMaps,
};

export const createTestTokenSmartContract = <TClient extends Client>(
  client: TClient,
): TestTokenSmartContract<TClient> => client.smartContract(definition);
