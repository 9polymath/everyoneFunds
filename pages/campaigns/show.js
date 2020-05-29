import React, { Component }from 'react';
import Layout from '../../components/Layout';
import Campaign from "../../ethereum/Campaign";
import {Card, Grid, Button, Message, Form, Progress} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link, Router} from '../../routes';
import everyoneFunds from "../../ethereum/everyoneFunds";

class CampaignShow extends Component {
    state={
        errorMessage: '',
        loading: false
    };
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary =  await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumDonation: summary[0],
            targetDonation: summary[1],
            balance: summary[2],
            requestCount: summary[3],
            approversCount: summary[4],
            manager: summary[5],

        };
    }
    onClick = async (event) => {
        event.preventDefault();
        this.setState({loading:true, errorMessage: ''});
        const address = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await address.methods
                .endCrowdfunding()
                .send({
                    from: accounts[0]
                });
            await everyoneFunds.methods.removeDeployedCampaign().send({from: accounts[0]});
            Router.pushRoute('/');
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
        this.setState({loading:false});
    };
    renderCards(){
        const {
            balance,
            manager,
            minimumDonation,
            targetDonation,
            requestCount,
            approversCount
        } = this.props;
        const items = [

            {
                header: manager,
                meta: 'Address of Manager',
            description: 'The manager created this campaign and can create requests to withdraw money',
            style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumDonation,
                meta: 'Minimum Donation (wei)',
            description: 'You must donate at least this much wei to become an approver'
            },
            {
                header: web3.utils.fromWei(targetDonation, 'ether'),
                meta: 'Target Donation (ether)',
            description: 'This is how much the campaign manager intends to raise with this campaign.'
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
            description: 'A request tries to withdraw money from this contract. Requests must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
            description: 'Number of people that have donated to this contract.'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
            description: 'The balance is how much money this campaign has left to spend'
            }

        ];
        return <Card.Group items={items}/>
    }
    render() {
        return (
            <Layout>
                <h3> Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Button onClick = {this.onClick} loading={this.state.loading} error={!!this.state.errorMessage} negative>End Campaign</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;
