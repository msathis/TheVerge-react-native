'use strict';

import React, {
    Component,
    StyleSheet,
    ListView,
    Dimensions,
    ScrollView,
    View,
} from 'react-native';

import Colors from '../../utilities/Colors';
import ListItem from './ListItem';

const DEVICE_HEIGHT = (Dimensions.get('window').height) - 60;

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    componentDidMount() {
        this.fetchCategoryData();
    }

    componentDidUpdate() {
        this.fetchCategoryData();
    }

    fetchCategoryData() {
        let {dispatch, selected, actions: {fetchCategory}} = this.props;
        console.log(selected.url);
        dispatch(fetchCategory(selected.url));
    }

    onEndReached() {

    }

    renderRow(post) {
        return (<ListItem post={post} />)
    }

    render() {
        let {postsState: {posts}} = this.props.state;
        return (
            <ScrollView style={styles.container}>
                <ListView
                    style={styles.navigationList}
                    dataSource={this.dataSource.cloneWithRows(posts)}
                    renderRow={this.renderRow}
                    keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps={true}
                    showsVerticalScrollIndicator={false}
                    onEndReached={this.onEndReached}
                />
            </ScrollView>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.MainBackground
    },
    navigationList: {
        height: DEVICE_HEIGHT
    },
    image: {
        height: 100,
        marginTop: 20,
        marginBottom: 20
    }
});
