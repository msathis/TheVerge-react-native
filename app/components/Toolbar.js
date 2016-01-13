/**
 * Created by mars on 2015/10/11.
 */

import React, {
    Component,
    ToolbarAndroid,
    StyleSheet
}
from 'react-native';

export default class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, navIconClicked, title, type} = this.props;
        const icon = !type || type === 'home' ? require('./img/ic_menu_white_24dp.png') : require('./img/ic_arrow_back_white_24dp.png')

        return (
            <ToolbarAndroid
                titleColor="#ffffff"
                title={title || "The Verge"}
                navIcon={icon}
                style={styles.toolbar}
                onIconClicked={()=>navIconClicked()}
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
