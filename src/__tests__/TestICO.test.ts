import { common, crypto } from '@neo-one/client-common';
import { Hash160, privateKeyToAddress } from '@neo-one/client';
import BigNumber from 'bignumber.js';
import { withContracts } from '../neo-one/test';

jest.setTimeout(10000);

const MINTER = {
  PRIVATE_KEY:
    '536f1e9f0466f6cd5b2ea5374d00f038786daa0f0e892161d6b0cb4d6b154740',
  PUBLIC_KEY:
    '03463b7a0afc41ff1f6a386190f99bafd1deca48f4026aeac95435731af278cb7d',
};

describe('TestICO', () => {
  test('smart contract', async () => {
    await withContracts(
      async ({
        client,
        networkName,
        testIco: smartContract,
        masterAccountID,
      }) => {
        crypto.addPublicKey(
          common.stringToPrivateKey(MINTER.PRIVATE_KEY),
          common.stringToECPoint(MINTER.PUBLIC_KEY),
        );
        const deployResult = await smartContract.deploy(
          masterAccountID.address,
          new BigNumber(Math.round(Date.now() / 1)),
        );
        const deployReceipt = await deployResult.confirmed({ timeoutMS: 2500 });
        if (deployReceipt.result.state !== 'HALT') {
          throw new Error(deployReceipt.result.message);
        }

        expect(deployReceipt.result.gasConsumed.toString()).toMatchSnapshot(
          'deploy consumed',
        );
        expect(deployReceipt.result.value).toBeTruthy();

        const [
          nameResult,
          decimalsResult,
          symbolResult,
          minter,
        ] = await Promise.all([
          smartContract.name(),
          smartContract.decimals(),
          smartContract.symbol(),
          client.providers.memory.keystore.addUserAccount({
            network: networkName,
            name: 'minter',
            privateKey: MINTER.PRIVATE_KEY,
          }),
        ]);
        expect(nameResult).toEqual('TestToken');
        expect(decimalsResult.toString()).toEqual('8');
        expect(symbolResult).toEqual('TT');

        const [initialTotalSupply, transferResult] = await Promise.all([
          smartContract.totalSupply(),
          client.transfer(
            [
              {
                amount: new BigNumber(10000),
                asset: Hash160.NEO,
                to: privateKeyToAddress(MINTER.PRIVATE_KEY),
              },
              {
                amount: new BigNumber(154460781), // TODO: why is the GAS required so large?
                asset: Hash160.GAS,
                to: privateKeyToAddress(MINTER.PRIVATE_KEY),
              },
            ],
            {
              from: masterAccountID,
            },
          ),
        ]);
        expect(initialTotalSupply.toString()).toEqual('0');

        await transferResult.confirmed({ timeoutMS: 2500 });

        const firstMint = new BigNumber('10');
        const mintResult = await smartContract.mintTokens({
          from: minter.userAccount.id,
          sendTo: [
            {
              amount: firstMint,
              asset: common.nativeScriptHashes.NEO,
            },
          ],
        });

        const mintReceipt = await mintResult.confirmed({ timeoutMS: 2500 });
        expect(mintReceipt.result.gasConsumed.toString()).toMatchSnapshot(
          'mint consumed',
        );
        expect(mintReceipt.result.value).toBeUndefined();
        expect(mintReceipt.events).toHaveLength(3);
        const event = mintReceipt.events[2];
        expect(event.name).toEqual('Transfer');
        expect(event.parameters.from).toBeUndefined();
        expect(event.parameters.to).toEqual(minter.userAccount.id.address);
        if (event.parameters.amount === undefined) {
          expect(event.parameters.amount).toBeTruthy();
          throw new Error('For TS');
        }
        const firstBalance = firstMint.times(10).toString();
        expect(
          event.parameters.amount.times(new BigNumber(100000000)).toString(),
        ).toEqual(firstBalance);

        const [minterBalance, mintTotalSupply] = await Promise.all([
          smartContract.balanceOf(minter.userAccount.id.address),
          smartContract.totalSupply(),
        ]);

        expect(
          minterBalance.times(new BigNumber(100000000)).toString(10),
        ).toEqual(firstBalance);
        expect(
          mintTotalSupply.times(new BigNumber(100000000)).toString(10),
        ).toEqual(firstBalance);
      },
      { deploy: false },
    );
  });
});
