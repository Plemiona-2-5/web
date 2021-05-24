import Vue from 'vue'
import Vuex from 'vuex'
import {units} from './unitsModule'
import {materials} from './materialsModule'
import {village} from './villageModule'
import {playerTribe} from "./tribeModule";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        isLogged: false,
    },
    mutations: {
        loginUser (state) {
            state.isLogged = true
        },
        logoutUser (state) {
            state.isLogged = false
        }
    },
    actions: {},
    getters: {
        token(state) {
            return state.token
        },
        isLogged(state) {
            return state.isLogged
        }
    },
    modules: {
        units: units,
        materials: materials,
        village: village,
        tribe: playerTribe
    }
})
