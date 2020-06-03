import web3 from './web3';
import everyoneFunds from './build/everyoneFunds';

const instance = new web3.eth.Contract(
    JSON.parse(everyoneFunds.interface),
    '0x01beA6388eF6926a924a362F1F5eC9AAd35007b5'
);

export default instance;
