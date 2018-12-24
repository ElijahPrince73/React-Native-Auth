import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        passWord: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const { email, passWord } = this.state;

        this.setState({ errorTextMessage: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, passWord)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, passWord)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((error) => {
                        console.log('-->', error);
                        this.onLoginFail();
                    });
            });
    }
    
    onLoginSuccess() {
        this.setState({
            email: '',
            passWord: '',
            loading: false,
            errorTextMessage: ''
        });
    }

    onLoginFail() {
        this.setState({ error: 'Failed', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return (<Spinner size='small' />);
        }
        return (
            <Button cta='Login in' onPress={this.onButtonPress.bind(this)} />
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        labelText="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        labelText="Password"
                        placeholder="password"
                        value={this.state.passWord}
                        onChangeText={passWord => this.setState({ passWord })}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextMessage}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                    
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        marginTop: 10,
        marginBottom: 10
    }
};

export default LoginForm;
