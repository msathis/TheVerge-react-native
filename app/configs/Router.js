import React, {Navigator}  from 'react-native';

// Components
var Home = require('../containers/Home')
var sceneConfig = require('./sceneConfig')


var customFloatFromRight = sceneConfig.customFloatFromRight


class Router {
    constructor(navigator) {
        this.navigator = navigator
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }


    pop() {
        this.navigator.pop()
    }


    toUser(props) {
        this.push(props, {
            component: User,
            name: 'user',
            sceneConfig: customFloatFromRight
        })
    }

    toTopic(props) {
        this.push(props, {
            component: Topic,
            name: 'topic',
            sceneConfig: customFloatFromRight
        })
    }

    toComments(props) {
        this.push(props, {
            component: Comments,
            name: 'comments',
            sceneConfig: customFloatFromRight
        })
    }

    toMessage(props) {
        this.push(props, {
            component: Message,
            name: 'message',
            sceneConfig: customFloatFromRight
        })
    }

    toQRCode(props) {
        this.push(props, {
            component: QRCode,
            name: 'qrCode',
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom
        })
    }


    toAbout() {
        this.push({}, {
            component: About,
            name: 'about',
            sceneConfig: sceneConfig.customFloatFromBottom
        })
    }


    toPublish() {
        this.push({}, {
            component: Publish,
            name: 'publish',
            sceneConfig: customFloatFromRight
        })
    }


    replaceWithHome() {
        this.navigator.popToTop()
    }

    replaceWithTopic(props) {
        let routesList = this.navigator.getCurrentRoutes()
        let index = routesList[routesList.length - 1].index
        var route = {
            props: props,
            index: index,
            component: Topic,
            sceneConfig: customFloatFromRight
        }
        this.navigator.replace(route)
    }
}

module.exports = Router
