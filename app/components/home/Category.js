'use strict';

import React, {
    Component,
    StyleSheet,
    ListView,
    Dimensions,
    ScrollView,
    View,
} from 'react-native';
import { connect } from 'react-redux';

import Colors from '../../utilities/Colors';
import ListItem from './ListItem';
import Loader from '../common/Loader';
import NoResults from '../common/NoResults';
import Types from '../../constants/ActionTypes';

const DEVICE_HEIGHT = (Dimensions.get('window').height) - 60;

class Category extends Component {

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
        let {dispatch, actions: {fetchCategory}} = this.props;
        let {selected} = this.props.state;
        if (this.selectedCategory != selected) {
            this.selectedCategory = selected;
            dispatch(fetchCategory(selected));
        }
    }

    onEndReached() {

    }

    renderRow(post, secId, rowId) {
        return (<ListItem {...this.props} post={post} postIndex={rowId}/>)
    }

    render() {
        let {posts, isLoading, status} = this.props.state;
        if (isLoading)
            return (<Loader />);
        else if (posts.length == 0)
            return (<NoResults />);
        return (
            <ScrollView style={styles.container}>
                <ListView
                    style={styles.navigationList}
                    dataSource={this.dataSource.cloneWithRows(posts)}
                    renderRow={this.renderRow.bind(this)}
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


function mapStateToProps(state) {
    return {
        state: state.postsState
    };
}

export default connect(mapStateToProps)(Category);
