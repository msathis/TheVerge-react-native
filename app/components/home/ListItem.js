'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableNativeFeedback,
    PropTypes,
    Dimensions,
} from 'react-native';

import Colors from '../../utilities/Colors';

const DEVICE_WIDTH =  Dimensions.get('window').width;
const IMG_HEIGHT = 160;

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.imageRegex = /\ssrc=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/;
    }

    onImageLayout(e) {
        var layout = e.nativeEvent.layout;
        var aspectRatio = DEVICE_WIDTH / IMG_HEIGHT;
        var measuredHeight = layout.width / aspectRatio;
        var currentHeight = layout.height;

        if (measuredHeight != currentHeight) {
          this.setState({
            style: {
              height: measuredHeight
            }
          });
        }
    }

    _handlePostSelected() {
        let {router, postIndex} = this.props;
        let {posts} = this.props.state;
        router.toPost({posts: posts, selectedIndex: postIndex});
    }

    render() {
        let {post} = this.props;
        let res = post.content.match(this.imageRegex);
        let image = res && res.length ? (res[1]||res[2]||res[3]) : null;

        return (
            <View {...this.props} style={styles.container} >
                <TouchableNativeFeedback
                    onPress={() => this._handlePostSelected(post)}
                    background={TouchableNativeFeedback.Ripple("#ccc")} >
                    <View>
                        <Text style={styles.storyTitle}> {post.title} </Text>
                        <Image style={styles.image} source={{uri: image}}
                            defaultSource={require('../img/placeholder.png')}
                            onLayout={this.onImageLayout} />
                        <Text style={styles.summary}> {post.contentSnippet.trim()} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

var styles = StyleSheet.create({
  container: {
      padding: 4,
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
  },
  storyTitle: {
    flex: 1,
    fontSize: 16,
    color: '#373737',
  },
  storyTitleRead: {
    flex: 1,
    fontSize: 16,
    color: '#777777'
  },
  image: {
    width: DEVICE_WIDTH,
    height: IMG_HEIGHT,
    marginTop: 8,
    marginBottom: 8,
    resizeMode: 'cover'
  },
  summary: {
      color: '#777777',
      paddingBottom: 16,
      fontSize: 14,
      marginLeft: 4,
      marginRight: 4,
  }
});
