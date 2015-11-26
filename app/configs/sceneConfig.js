import React, {Navigator}  from 'react-native';
import Dimensions from 'Dimensions';

var { width, height } = Dimensions.get('window');

var baseConfig = Navigator.SceneConfigs.FloatFromRight;
var popGestureConfig = Object.assign({}, baseConfig.gestures.pop, {
    edgeHitWidth: 50
});


var fullPopGestureConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom.gestures.pop, {
    edgeHitWidth: 50
})


exports.customFloatFromRight = Object.assign({}, baseConfig, {
    gestures: {
        pop: popGestureConfig
    }
})


exports.customFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom, {
    gestures: {
        pop: fullPopGestureConfig
    }
})
