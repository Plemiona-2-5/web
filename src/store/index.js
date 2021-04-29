import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materials: {
      wood: 0,
      clay: 0,
      iron: 0,
      villagers: 0,
    },
    units: {
      pikes: 0,
      swords: 0,
      axes: 0,
      archers: 0,
      trebuchets: 0,
      horses: 0
    },
    village: {
      x: 0,
      y: 0,
      points: 0
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
