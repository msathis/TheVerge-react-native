import React, { Component } from 'react-native';
import DrawerLayout from '../components/DrawerLayout';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DrawerLayout {...this.props}>
                
            </DrawerLayout>
        );
    }
}
