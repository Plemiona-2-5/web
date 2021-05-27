import router from "../router";

export const user = {
    state: () => ({
        isPlaying: false,
    }),
    mutations: {
        setIsUserPlaying(state, isPlaying) {
            state.isPlaying = isPlaying
        }
    },
    actions: {
        setIsUserPlaying(context, isPlaying) {
            context.commit("setIsUserPlaying", isPlaying)
            if (isPlaying === "true") router.push("overview")
        }
    },
    getters: {
        isPlaying(state) {
            return state.isPlaying
        }
    }
}