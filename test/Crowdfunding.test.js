const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require ('web3');
const web3 = new Web3(ganache.provider());
const compiledEveryonefunds = require ('../ethereum/build/everyoneFunds');
const compiledCrowdfunding = require ('../ethereum/build/Crowdfunding');

let factory;
let accounts;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledEveryonefunds.interface))
        .deploy({data: compiledEveryonefunds.bytecode})
        .send({from: accounts[0], gas: "1000000"});
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

   [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
   campaign = await new web3.eth.Contract(
       JSON.parse(compiledCrowdfunding.interface),
       campaignAddress
   );
});
describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
       assert.ok(factory.options.address);
       assert.ok(campaign.options.address);
    });
    it('marks contract caller as the campaign manager', async () => {
       const manager = await campaign.methods.manager().call();
       assert.strictEqual(accounts[0], manager);
    });
    it('allows people to contribute money as marks them as approvers', async () => {
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '200'
        });
        const isDonor = await campaign.methods.approvers(accounts[1]).call();
        assert(isDonor);
    });
    it('requires a minimum contribution', async () => {
        try{
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '5'
            });
            assert(false);
        }catch(err){
            assert(err);
        }
    });
    it('allows a manager to mane a payment request', async () => {
        await campaign.methods
            .createRequest('Pay salaries', '100', accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });
        const request = await campaign.methods.requests(0).call();
        assert.strictEqual('Pay salaries', request.description);
    });
    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });
        await campaign.methods
            .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        assert(balance > 104);
    });
});
