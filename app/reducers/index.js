/**
 * Created by mars on 2015/10/14.
 */

import { combineReducers } from 'redux';

import drawerState from './DrawerReducer.js';
import postsState from './PostsReducer.js';

const rootReducer = combineReducers({
    drawerState,
    postsState
});

export default rootReducer;
