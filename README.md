# NEO•ONE RC1 Demo

To setup the environment:

- Make sure you are running NodeJS version 10.16.0 (preferably)
- Make sure you have C# .NET version 3.1.401 installed
- Run `yarn install` or `npm install` to install packages

Demo:

- In `neo-one/contracts` there is a sample NEP17 contract called `TestICO` which implements a sample NEP17 ICO token contract. This contract demonstrates that the NEO•ONE compiler and client can now handle complex smart contracts.

- To compile the contract run `yarn neo-one compile`
- To build the project run `yarn neo-one build`
- To test the contract run `yarn test` (see `src/__tests__/TestICO.test.ts`)

Running the test at `TestICO.test.ts` will create a local development network, compile the contract, deploy the contract to the dev network, and generate the smart contract APIs for calling the contract's methods in the test. You can see that the test calls various methods on the smart contract, with appropriate parameters, and gets back the values that we expect for those methods. This whole test demonstrates that NEO•ONE is an end-to-end tool for writing, compiling, deploying, testing, and calling a smart contract on RC3.
