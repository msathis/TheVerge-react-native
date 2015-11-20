import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

import Navigation from '../containers/Navigation';
import Actions from '../actions';

@connect(state => ({
    state: state
}))
class Main extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { state, dispatch } = this.props;
        var actions = bindActionCreators(Actions, dispatch);

        return (
            <Navigation state={state} actions={actions}></Navigation>
        )
    }
}

export default Main;
