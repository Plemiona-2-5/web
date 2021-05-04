export const units = {
    state: () => ({
        infantry: {
            pikes: 0,
            swords: 0,
            axes: 0
        },
        cavalry: {
            light: 0,
            heavy: 0
        }
    }),
    getters: {
        infantry(state) {
            return {
                pikes: state.infantry.pikes,
                swords: state.infantry.swords,
                axes: state.infantry.axes,
            }
        },
        cavalry(state) {
            return {
                light: state.cavalry.light,
                heavy: state.cavalry.heavy,
            }
        },
    },
    mutations: {},
    actions: {}
}