import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


        
        return (
            <Provider store={store}>
                    <LoginForm />
            </Provider>
        );
    }
}

export default App;