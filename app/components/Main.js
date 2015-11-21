import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

import Navigation from '../containers/Navigation';
import * as Actions from '../actions/HomeActions';

@connect(state => ({
  state
}))
export default class Main extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let {dispatch} = this.props;
        return (
            <Navigation {...this.props} actions={Actions}> </Navigation>
        )
    }
}
