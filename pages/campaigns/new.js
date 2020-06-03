import React, { Component } from 'react';
import { Form, Button, Input, Message, Embed, Dropdown, TextArea } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import everyoneFunds from '../../ethereum/everyoneFunds';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state ={
        name: '',
        description: '',
        minimumDonation: '',
        targetDonation: '',
        location: '',
        date: '',
        errorMessage: '',
        loading: false
    };
    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true, errorMessage: ''});
        const {name, description, minimumDonation, targetDonation, location, date} = this.state;
        try {
            const accounts = await web3.eth.getAccounts();
            await everyoneFunds.methods
                .createCampaign(name, description, minimumDonation, web3.utils.toWei(targetDonation, 'ether'), location, date)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute('/');
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
        this.setState({loading:false});
    };
    render() {
        return (
            <Layout>
                <h3> Create a New Campaign</h3>
                <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label> Campaign Name</label>
                        <Input
                               value={this.state.name}
                               onChange={event =>
                                 this.setState({name: event.target.value})}
                        />
                        <label> Campaign Description</label>
                        <TextArea
                               value={this.state.description}
                               placeholder = 'Description of Campaign'
                               onChange={event =>
                                 this.setState({description: event.target.value})}
                        />
                        <label> Minimum Donation</label>
                        <Input label="wei"
                               labelPosition="right"
                               value={this.state.minimumDonation}
                               onChange={event =>
                                 this.setState({minimumDonation: event.target.value})}
                        />
                        <label> Target Donation</label>
                        <Input label="ether"
                               labelPosition="right"
                               value={this.state.targetDonation}
                               onChange={event =>
                                 this.setState({targetDonation: event.target.value})}
                        />
                        <label> Location</label>
                        <Input
                               value={this.state.location}
                               onChange={event =>
                                 this.setState({location: event.target.value})}
                        />
                        <label> Start date</label>
                        <Input
                               value={this.state.date}
                               onChange={event =>
                                 this.setState({date: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button loading={this.state.loading} primary>Create</Button>
                </Form>
             </Layout>
        );
    }
}
export default CampaignNew;
