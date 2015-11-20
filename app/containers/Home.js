import React, { Component } from 'react-native';
import DrawerLayout from '../components/DrawerLayout';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { root, dispatch, actions } = this.props;
        return (<DrawerLayout actions={actions} state={root} />);
    }
}

export default Home;
