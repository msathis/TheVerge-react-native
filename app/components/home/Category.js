'use strict';

import React from 'react-native';
import Colors from '../../utilities/Colors';

var {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    } = React;

var styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.MainBackground
    },
    image: {
        height: 100,
        marginTop: 20,
        marginBottom: 20
    }
});

class Category extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Im the content </Text>
            </View>
        );
    }

}

module.exports = Category;
