import router from "../router";

export const user = {
    state: () => ({
        isLogged: false,
    }),
    mutations: {
        loginUser (state) {
            state.isLogged = true
            router.push("overview")
        },
        logoutUser (state) {
            state.isLogged = false
        }
    },
    getters: {
        isLogged(state) {
            return state.isLogged
        }
    }
}