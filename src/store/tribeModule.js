export const playerTribe = {
    state: () => ({
        name: "NameOfTheTribe",
        description: "DescOfTheTribe",
        points: 50000
    }),
    getters: {
        playerTribe(state) {
            return {
                name: state.name,
                description: state.description,
                points: state.points
            }
        }
    },
    mutations: {},
    actions: {}
}