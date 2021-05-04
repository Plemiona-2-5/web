export const village = {
    state: () => ({
        x: 0,
        y: 0,
        points: 0
    }),
    getters: {
        coords(state) {
            return {
                x: state.x,
                y: state.y
            }
        },
        points(state) {
            return state.points
        }
    },
    mutations: {},
    actions: {}
}