'use strict';

import React, {
    Component,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    View,
} from 'react-native';

import Colors from '../../utilities/Colors';

export default class NoResults extends Component {

    render() {
        return (
            <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}> No Results </Text>
            </View>
        );
    }

}

var styles = StyleSheet.create({
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 60,
  },
  noResultsText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.DarkGrey,
    fontFamily: 'Avenir Next',
  },
});
