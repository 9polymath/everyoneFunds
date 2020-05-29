const path = require ('path');
const fs = require ('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
const crowdfundingPath = path.resolve(__dirname, 'contracts', 'Crowdfunding.sol');
const source = fs.readFileSync(crowdfundingPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);
for(let contract in output){
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(':', '') + '.json'),
      output[contract]
    );
}
