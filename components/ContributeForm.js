import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/Campaign";
import { Router } from "../routes";

class ContributeForm extends Component {
    state ={
        value: ''
    };
    onSubmit = async event =>{
        event.preventDefault();
        this.setState({loading:true, errorMessage: ''});
        try {
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .contribute()
                .send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'ether')
                });
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
        this.setState({loading:false, value: ''});
    };
    render () {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Donate to this Campaign</label>
                    <Input label='ether'
                           labelPosition='right'
                           value={this.state.value}
                           onChange={event => this.setState({value: event.target.value})}
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>Donate</Button>
            </Form>
        );
    }
}
export default ContributeForm;
