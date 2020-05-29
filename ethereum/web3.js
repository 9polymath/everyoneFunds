import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is nor running metamask
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/a72a96e5c484457ab73ef4aff41f251e');
    web3 = new Web3(provider);
}

export default web3;
