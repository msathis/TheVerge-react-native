/**
 * Created by mars on 2015/10/11.
 */

var React=require('react-native');

var {
    Component,
    ToolbarAndroid,
    StyleSheet
    }=React;

import { connect } from 'react-redux/native';

@connect(state => state)
class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {dispatch, actions} = this.props;

        return (
            <ToolbarAndroid
                titleColor="#ffffff"
                title="The Verge"
                navIcon={require('./img/ic_menu_white_24dp.png')}
                style={styles.toolbar}
                onIconClicked={()=>actions.openDrawer()}
                >
            </ToolbarAndroid>
        )
    }
}



var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#F62459',
        height: 56
    },
});

module.exports = Toolbar;
