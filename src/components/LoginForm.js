import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        passWord: ''
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        labelText="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChange={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        labelText="Password"
                        placeholder="password"
                        value={this.state.passWord}
                        onChange={passWord => this.setState({ passWord })}
                        secureTextEntry
                    />
                </CardSection>
                <CardSection>
                    <Button cta='Login in' />
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
