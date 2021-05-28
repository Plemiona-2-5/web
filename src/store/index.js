import Vue from 'vue'
import Vuex from 'vuex'
import {units} from './unitsModule'
import {materials} from './materialsModule'
import {village} from './villageModule'
import {tribe} from './tribeModule';
import {user} from './userModule';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        setToken({commit}, token) {
            commit("setToken", token)
        }
    },
    getters: {
        token(state) {
            return state.token
        },
    },
    modules: {
        units: units,
        materials: materials,
        village: village,
        tribe: tribe,
        user: user
    }
})
