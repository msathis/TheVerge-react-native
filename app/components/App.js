import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { Provider } from 'react-redux/native';
import thunkMiddleware from 'redux-thunk';
import Main from './Main';
import reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                {() => <Main />}
            </Provider>
        );
    }
}

export default App;
