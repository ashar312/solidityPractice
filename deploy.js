const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

//const { abi, evm } = require('./compile');
const { interface, bytecode } = require('./compile');

//Lottery Project
provider = new HDWalletProvider(
  'apart ancient regret soft farm dilemma size feed oppose list modify income',
  'https://rinkeby.infura.io/v3/38ed1f2a2e9d4292acebe4e474abbf4d'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode }) //evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(interface)
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};

deploy();