/**
 * Created by mars on 2015/10/14.
 */

import types from '../constants/ActionTypes';
import Categories from '../constants/Categories';


var initialState = {
    posts: [],
    isLoading: true,
    selected: Categories.Home
}

export default function PostsReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.FEED_LOADING:
            return {
                ...state,
                isLoading: true,
                selected: action.selected
            };
        case types.FETCH_FEED:
            return {
                ...state,
                posts: action.data.responseData.feed.entries,
                isLoading: false,
                status: action.data.responseStatus,
                selected: action.selected
            }
        default :
            return state
    }
}
