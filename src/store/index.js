import { createStore, createLogger } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import App from '../App'

const state = {
    App: App,
    list: [],
    listOrigin: [],
    activated: undefined
}

export default createStore({
    state,
    getters,
    actions,
    mutations,
    plugins: process.env.NODE_ENV !== `production`
        ? [createLogger()]
        : []
});