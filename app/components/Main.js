import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '../containers/Navigation';
import * as Actions from '../actions/HomeActions';

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

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(Main);
