import web3 from './web3';
import everyoneFunds from './build/everyoneFunds';

const instance = new web3.eth.Contract(
    JSON.parse(everyoneFunds.interface),
    '0xACD9c724Aa6db0a9e382ED2E3610e05489cA6479'
);

export default instance;
