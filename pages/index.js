import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import everyoneFunds from '../ethereum/everyoneFunds';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Campaign from "../ethereum/Campaign";

class CampaignIndex extends Component {
  static async getInitialProps (){
    const campaigns = await everyoneFunds.methods.getDeployedCampaigns().call();

    return {campaigns};
  }
/* await everyoneFunds.methods.removeDeployedCampaign().send({from: accounts[0]}); */
  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
        return {
            header: address,
            description:
                (<Link route={`/campaigns/${address}`}>
                        <a> View Campaigns</a>
                </Link>),
            fluid: true
        }
    });
    return <Card.Group items={items} />;
  }
  render(){
    return(
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
             <a>
              <Button
              floated = "right"
              content = "Create Campaign"
              icon="add circle"
              primary
              />
             </a>
         </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}
export default CampaignIndex;
