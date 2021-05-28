import router from "../router";

export const user = {
    state: () => ({
        isPlaying: false,
        username: ""
    }),
    mutations: {
        setIsUserPlaying(state, isPlaying) {
            state.isPlaying = isPlaying
        },
        setUsername(state, name) {
            state.name = name
        }
    },
    actions: {
        setIsUserPlaying({commit}, isPlaying) {
            commit("setIsUserPlaying", isPlaying)
            if (isPlaying === "true") router.push("overview")
        },
        setUserInfo({commit}, data) {
            commit("setUsername", data.userName)
            commit("setToken", data.accessToken)
        }
    },
    getters: {
        isPlaying(state) {
            return state.isPlaying
        },
        username(state) {
            return state.username
        }
    }
}