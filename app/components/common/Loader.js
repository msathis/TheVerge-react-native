'use strict';

import React, {
    Component,
    StyleSheet,
    Dimensions,
    ProgressBarAndroid,
    View,
} from 'react-native';

import Colors from '../../utilities/Colors';

const DEVICE_HEIGHT = (Dimensions.get('window').height) - 60;

export default class Loader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ProgressBarAndroid styleAttr="Inverse" />
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: DEVICE_HEIGHT,
        backgroundColor: Colors.MainBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
