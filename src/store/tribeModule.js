export const playerTribe = {
    state: () => ({
        tribeName: "",
        description: "",
        numberOfMembers: 0,
        ownerName: ""
    }),
    getters: {
        playerTribe(state) {
            return {
                name: state.name,
                description: state.description,
                memebersCount: state.memebersCount
            }
        }
    },
    mutations: {
        setTribeInfo(state, data) {
            state.name = data.tribeName
            state.description = data.description
            state.membersCount = data.numberOfMembers
            state.owner = data.ownerName
        }
    },
    actions: {
        setTribeInfo({commit}, data) {
            commit("setTribeInfo", data)
        }
    }
}