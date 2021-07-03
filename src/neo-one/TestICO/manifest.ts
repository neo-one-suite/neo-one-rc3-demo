/* @hash e3769fc134858da39530fde1311b2475 */
// tslint:disable
/* eslint-disable */
import { ContractManifestClient } from '@neo-one/client';

export const testIcoManifest: ContractManifestClient = {
  abi: {
    events: [
      {
        name: 'Transfer',
        parameters: [
          {
            forwardedValue: false,
            name: 'from',
            optional: true,
            type: 'Address',
          },
          {
            forwardedValue: false,
            name: 'to',
            optional: true,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
        ],
      },
      {
        name: 'approveSendTransfer',
        parameters: [
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            forwardedValue: false,
            name: 'to',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
        ],
      },
      {
        name: 'revokeSendTransfer',
        parameters: [
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            forwardedValue: false,
            name: 'to',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
        ],
      },
    ],
    methods: [
      {
        constant: true,
        name: 'name',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          forwardedValue: false,
          optional: false,
          type: 'String',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'decimals',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          decimals: 0,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'symbol',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          forwardedValue: false,
          optional: false,
          type: 'String',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'icoStartTimeSeconds',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          decimals: 0,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'icoDurationSeconds',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          decimals: 0,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'amountPerNEO',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          decimals: 0,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'owner',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          forwardedValue: false,
          optional: false,
          type: 'Address',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'totalSupply',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          decimals: 8,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'balanceOf',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'address',
            optional: false,
            type: 'Address',
          },
        ],
        returnType: {
          decimals: 8,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: true,
        name: 'approvedTransfer',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            forwardedValue: false,
            name: 'to',
            optional: false,
            type: 'Address',
          },
        ],
        returnType: {
          decimals: 8,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: false,
        name: 'transfer',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            forwardedValue: false,
            name: 'to',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
        ],
        returnType: {
          forwardedValue: false,
          optional: false,
          type: 'Boolean',
        },
        safe: false,
      },
      {
        constant: false,
        name: 'approveSendTransfer',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            forwardedValue: false,
            name: 'to',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
        ],
        returnType: {
          forwardedValue: false,
          optional: false,
          type: 'Boolean',
        },
        safe: false,
      },
      {
        constant: false,
        name: 'approveReceiveTransfer',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
          {
            forwardedValue: false,
            name: 'asset',
            optional: false,
            type: 'Address',
          },
        ],
        returnType: {
          forwardedValue: false,
          optional: false,
          type: 'Boolean',
        },
        safe: false,
      },
      {
        constant: false,
        name: 'onNEP17Payment',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
          {
            forwardedValue: false,
            name: 'data',
            optional: false,
            type: 'Buffer',
          },
        ],
        returnType: {
          optional: false,
          type: 'Void',
        },
        safe: false,
      },
      {
        constant: false,
        name: 'revokeSendTransfer',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            forwardedValue: false,
            name: 'to',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
        ],
        returnType: {
          forwardedValue: false,
          optional: false,
          type: 'Boolean',
        },
        safe: false,
      },
      {
        constant: false,
        name: 'onRevokeSendTransfer',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'from',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 8,
            forwardedValue: false,
            name: 'amount',
            optional: false,
            type: 'Integer',
          },
          {
            forwardedValue: false,
            name: 'asset',
            optional: false,
            type: 'Address',
          },
        ],
        returnType: {
          optional: false,
          type: 'Void',
        },
        safe: false,
      },
      {
        constant: true,
        name: 'remaining',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          decimals: 0,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: true,
      },
      {
        constant: false,
        name: 'mintTokens',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          optional: false,
          type: 'Void',
        },
        safe: false,
      },
      {
        constant: false,
        name: 'getICOAmount',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
        ],
        returnType: {
          decimals: 8,
          forwardedValue: false,
          optional: false,
          type: 'Integer',
        },
        safe: false,
      },
      {
        name: 'deploy',
        offset: 0,
        parameters: [
          {
            name: '__neoonemethodstring',
            type: 'String',
          },
          {
            forwardedValue: false,
            name: 'owner',
            optional: false,
            type: 'Address',
          },
          {
            decimals: 0,
            forwardedValue: false,
            name: 'startTimeSeconds',
            optional: true,
            type: 'Integer',
          },
        ],
        returnType: {
          type: 'Boolean',
        },
        safe: false,
      },
    ],
  },
  groups: [],
  name: 'TestICO',
  permissions: [],
  supportedStandards: ['NEP-17'],
  trusts: '*',
};
