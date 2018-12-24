import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = {
        loggedIn: null,
    }
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBQSttVuiCUcs5Kyrkop8QRdVl5YqyFzGE',
            authDomain: 'react-auth-93261.firebaseapp.com',
            databaseURL: 'https://react-auth-93261.firebaseio.com',
            projectId: 'react-auth-93261',
            storageBucket: 'react-auth-93261.appspot.com',
            messagingSenderId: '882084102890'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: return (
                <CardSection>
                    <Button 
                        cta='Log Out'
                        onPress={() => firebase.auth().signOut()} 
                    />
                </CardSection>
            );

            case false: 
            return <LoginForm />;

            default: 
            return (
                <Spinner />
            );
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}


export default App;
