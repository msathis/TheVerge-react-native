/**
 * Created by mars on 2015/10/14.
 */

var types = require('../constants/ActionTypes')

var initialState = {
    posts: [],
    isLoading: true
}

export default function PostsReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.FETCH_FEED:
            return {
                ...state,
                posts: action.data.responseData.feed.entries,
                isLoading: false,
                status: action.data.responseStatus
            }
        default :
            return state
    }
}
