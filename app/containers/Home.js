import React, { Component } from 'react-native';
import DrawerLayout from '../components/DrawerLayout';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<DrawerLayout {...this.props} />);
    }
}

export default Home;
