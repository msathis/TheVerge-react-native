/**
 * Created by mars on 2015/10/11.
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    View,
    Image,
    } = React;

import Colors from '../../utilities/Colors';

var styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White
    },
    image: {
        height: 100,
        marginTop: 20,
        marginBottom: 20
    }
});

class DrawerHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../img/TheVerge_logo.png')} />
            </View>
        );

    }
}

module.exports = DrawerHeader;
