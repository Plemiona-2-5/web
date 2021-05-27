import Vue from 'vue'
import Vuex from 'vuex'
import {units} from './unitsModule'
import {materials} from './materialsModule'
import {village} from './villageModule'
import {playerTribe} from './tribeModule';
import {user} from './userModule';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
    },
    mutations: {
        token (state, token) {
            state.token = token
        }
    },
    actions: {
        token (context, token) {
            context.commit("token", token)
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
        tribe: playerTribe,
        user: user
    }
})
