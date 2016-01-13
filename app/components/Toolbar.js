/**
 * Created by mars on 2015/10/11.
 */

import React, {
    Component,
    ToolbarAndroid,
    StyleSheet
}
from 'react-native';

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
                onIconClicked={()=>dispatch(actions.openDrawer())}
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

export default Toolbar;
