import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBQSttVuiCUcs5Kyrkop8QRdVl5YqyFzGE',
            authDomain: 'react-auth-93261.firebaseapp.com',
            databaseURL: 'https://react-auth-93261.firebaseio.com',
            projectId: 'react-auth-93261',
            storageBucket: 'react-auth-93261.appspot.com',
            messagingSenderId: '882084102890'
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
