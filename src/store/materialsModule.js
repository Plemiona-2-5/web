export const materials = {
    state: () => ({
        wood: 0,
        clay: 0,
        iron: 0,
        villagers: 0
    }),
    getters: {
        materials(state) {
            return {
                wood: state.wood,
                clay: state.clay,
                iron: state.iron,
                villagers: state.villagers,
            }
        }
    },
    mutations: {},
    actions: {}
}