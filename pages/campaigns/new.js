import React, { Component } from 'react';
import { Form, Button, Input, Message, Embed, Dropdown, TextArea } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import everyoneFunds from '../../ethereum/everyoneFunds';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state ={
        minimumDonation: '',
        targetDonation: '',
        name: '',
        description: '',
        media: '',
        location: '',
        date: '',
        links: '',
        errorMessage: '',
        loading: false
    };
    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true, errorMessage: ''});
        const {minimumDonation,
                targetDonation,
                } = this.state;
        try {
            const accounts = await web3.eth.getAccounts();
            await everyoneFunds.methods
                .createCampaign(minimumDonation, web3.utils.toWei(targetDonation, 'ether'))
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
                        <label> Campaign Name</label>
                        <Input
                               value={this.state.name}
                               onChange={event =>
                                 this.setState({name: event.target.value})}
                        />
                        <label> Media</label>
                        <Input
                               value={this.state.media}
                               onChange={event =>
                                 this.setState({media: event.target.value})}
                        />
                        <label> Description</label>
                        <TextArea
                               placeholder = 'Description of Campaign'
                               value={this.state.description}
                               onChange={event =>
                                 this.setState({description: event.target.value})}
                        />
                        <label> Location</label>
                        <Input
                               value={this.state.location}
                               onChange={event =>
                                 this.setState({location: event.target.value})}
                        />
                        <label> Date</label>
                        <Input
                               value={this.state.date}
                               onChange={event =>
                                 this.setState({date: event.target.value})}
                        />
                        <label> Relevant Links</label>
                        <Input
                               value={this.state.links}
                               onChange={event =>
                                 this.setState({links: event.target.value})}
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
