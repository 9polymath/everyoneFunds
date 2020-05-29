const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/everyoneFunds.json');
const provider = new HDWalletProvider(
  'nothing fee public magic because frown observe tornado object tuna cruise have',
  'https://rinkeby.infura.io/v3/a72a96e5c484457ab73ef4aff41f251e'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
