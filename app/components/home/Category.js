'use strict';

import React, {
    Component,
    StyleSheet,
    ListView,
    Dimensions,
    ScrollView,
    View,
    RefreshControl
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
        let {dispatch, actions: {fetchCategory}} = this.props
        let {selected} = this.props.state
        if (this.forceUpdate || this.selectedCategory != selected) {
            this.selectedCategory = selected
            this.forceUpdate = false
            dispatch(fetchCategory(selected))
        }
    }

    onEndReached() {

    }

    renderRow(post, secId, rowId) {
        return (<ListItem {...this.props} post={post} postIndex={rowId}/>)
    }

    _onRefresh() {
        this.forceUpdate = true
        this.setState({ isLoading: true, posts: [] })
    }

    render() {
        let {posts, isLoading, status} = this.props.state;

        if (!isLoading && posts.length == 0)
            return (<NoResults />);
        return (
                <ListView
                    style={styles.list}
                    dataSource={this.dataSource.cloneWithRows(posts)}
                    renderRow={this.renderRow.bind(this)}
                    keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps={true}
                    showsVerticalScrollIndicator={false}
                    onEndReached={this.onEndReached}
                    refreshControl={
                        <RefreshControl
                          refreshing={isLoading}
                          onRefresh={this._onRefresh.bind(this)}
                          title="Loading..." />
                    }
                />
        );
    }

}

var styles = StyleSheet.create({
    list: {
        height: DEVICE_HEIGHT,
        backgroundColor: Colors.MainBackground
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
