var types = require('../constants/ActionTypes');

function sendPosts(status, data, selected) {
    if (status != 200) {
        console.log(data);
        return null;
    }
    return {
        type: types.FETCH_FEED,
        status,
        selected,
        data
    };
}

export function openDrawer() {
    return {
        type: types.OPEN_DRAWER,
        isDrawerOpen: true
    }
}

export function closeDrawer() {
    return {
        type: types.OPEN_DRAWER,
        isDrawerOpen: false
    }
}

export function openLoginModal() {
    return {
        type: types.OPEN_LOGIN_MODAL,
        isModalOpen: true
    }
}

export function closeLoginModal() {
    return {
        type: types.CLOSE_LOGIN_MODAL,
        isModalOpen: false
    }
}

export function fetchCategory(selected) {
    return dispatch => {
        var feed = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=' + encodeURIComponent(selected.url);

        return fetch(feed)
            .then(response => response.json())
            .then(json => dispatch(sendPosts(200, json, selected)))
            .catch(error => dispatch(sendPosts(400, error, selected)))
    }
}
