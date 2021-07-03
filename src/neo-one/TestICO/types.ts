/* @hash 16e642d6e71578593efc4a77312fb938 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  BufferString,
  Client,
  Event,
  GetOptions,
  InvokeReceipt,
  SmartContract,
  Transaction,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export interface TestICOTransferEventParameters {
  readonly from: AddressString | undefined;
  readonly to: AddressString | undefined;
  readonly amount: BigNumber;
}
export interface TestICOTransferEvent extends Event<'Transfer', TestICOTransferEventParameters> {}
export interface TestICOApproveSendTransferEventParameters {
  readonly from: AddressString;
  readonly to: AddressString;
  readonly amount: BigNumber;
}
export interface TestICOApproveSendTransferEvent
  extends Event<'approveSendTransfer', TestICOApproveSendTransferEventParameters> {}
export interface TestICORevokeSendTransferEventParameters {
  readonly from: AddressString;
  readonly to: AddressString;
  readonly amount: BigNumber;
}
export interface TestICORevokeSendTransferEvent
  extends Event<'revokeSendTransfer', TestICORevokeSendTransferEventParameters> {}
export type TestICOEvent = TestICOTransferEvent | TestICOApproveSendTransferEvent | TestICORevokeSendTransferEvent;

export interface TestICOSmartContract<TClient extends Client = Client> extends SmartContract<TClient, TestICOEvent> {
  readonly amountPerNEO: () => Promise<BigNumber>;
  readonly approveReceiveTransfer: {
    (from: AddressString, amount: BigNumber, asset: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TestICOEvent>>
    >;
    readonly confirmed: (
      from: AddressString,
      amount: BigNumber,
      asset: AddressString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly approveSendTransfer: {
    (from: AddressString, to: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TestICOEvent>>
    >;
    readonly confirmed: (
      from: AddressString,
      to: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly approvedTransfer: (from: AddressString, to: AddressString) => Promise<BigNumber>;
  readonly balanceOf: (address: AddressString) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: {
    (owner: AddressString, startTimeSeconds?: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TestICOEvent>>
    >;
    readonly confirmed: (
      owner: AddressString,
      startTimeSeconds?: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly getICOAmount: {
    (options?: TransactionOptions): Promise<TransactionResult<InvokeReceipt<BigNumber, TestICOEvent>>>;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<BigNumber, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly icoDurationSeconds: () => Promise<BigNumber>;
  readonly icoStartTimeSeconds: () => Promise<BigNumber>;
  readonly mintTokens: {
    (options?: TransactionOptions): Promise<TransactionResult<InvokeReceipt<undefined, TestICOEvent>>>;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly name: () => Promise<string>;
  readonly onNEP17Payment: {
    (from: AddressString, amount: BigNumber, data: BufferString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, TestICOEvent>>
    >;
    readonly confirmed: (
      from: AddressString,
      amount: BigNumber,
      data: BufferString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly onRevokeSendTransfer: {
    (from: AddressString, amount: BigNumber, asset: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, TestICOEvent>>
    >;
    readonly confirmed: (
      from: AddressString,
      amount: BigNumber,
      asset: AddressString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly owner: () => Promise<AddressString>;
  readonly remaining: () => Promise<BigNumber>;
  readonly revokeSendTransfer: {
    (from: AddressString, to: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TestICOEvent>>
    >;
    readonly confirmed: (
      from: AddressString,
      to: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  };
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: {
    (from: AddressString, to: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TestICOEvent>>
    >;
    readonly confirmed: (
      from: AddressString,
      to: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  };
}

export interface TestICOMigrationSmartContract {
  readonly amountPerNEO: () => Promise<BigNumber>;
  readonly approveReceiveTransfer: (
    from: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    asset: AddressString | Promise<AddressString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly approveSendTransfer: (
    from: AddressString | Promise<AddressString>,
    to: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly approvedTransfer: (
    from: AddressString | Promise<AddressString>,
    to: AddressString | Promise<AddressString>,
  ) => Promise<BigNumber>;
  readonly balanceOf: (address: AddressString | Promise<AddressString>) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: (
    owner: AddressString | Promise<AddressString>,
    startTimeSeconds?: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly getICOAmount: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<BigNumber, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly icoDurationSeconds: () => Promise<BigNumber>;
  readonly icoStartTimeSeconds: () => Promise<BigNumber>;
  readonly mintTokens: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly name: () => Promise<string>;
  readonly onNEP17Payment: (
    from: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    data: BufferString | Promise<BufferString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly onRevokeSendTransfer: (
    from: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    asset: AddressString | Promise<AddressString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly owner: () => Promise<AddressString>;
  readonly remaining: () => Promise<BigNumber>;
  readonly revokeSendTransfer: (
    from: AddressString | Promise<AddressString>,
    to: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: (
    from: AddressString | Promise<AddressString>,
    to: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TestICOEvent> & { readonly transaction: Transaction }>;
}
