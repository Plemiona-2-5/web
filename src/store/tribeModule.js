export const tribe = {
    state: () => ({
        name: "",
        id: null,
        description: "",
        numberOfMembers: 0,
        ownerName: ""
    }),
    getters: {
        tribe(state) {
            return {
                name: state.name,
                id: state.id,
                description: state.description,
                membersCount: state.membersCount
            }
        }
    },
    mutations: {
        setTribeInfo(state, data) {
            state.name = data.tribeName
            state.id = data.id
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