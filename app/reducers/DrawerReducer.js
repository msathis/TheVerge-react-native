/**
 * Created by mars on 2015/10/14.
 */

var types = require('../constants/ActionTypes')

var initialState = {
    isDrawerOpen: false
}

export default function DrawerReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.OPEN_DRAWER:
            return {
                ...state,
                isDrawerOpen: true
            }
        default :
            return state
    }
}
