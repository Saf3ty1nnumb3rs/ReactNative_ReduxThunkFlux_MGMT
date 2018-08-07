import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'


class App extends Component {

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAdeTqFlXNi6NmRg2r_3-XN8jqpM5_C-gk",
            authDomain: "mgmt-62248.firebaseapp.com",
            databaseURL: "https://mgmt-62248.firebaseio.com",
            projectId: "mgmt-62248",
            storageBucket: "mgmt-62248.appspot.com",
            messagingSenderId: "457112621818"
          };
          firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;