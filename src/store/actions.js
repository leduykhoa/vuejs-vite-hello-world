export default {
    addToList({ state, commit }, item) {
        commit(`addToList`, item);
    },
    changePosition({ state, commit }, item, index) {
        // commit(`addToList`, item);
    },
    setActivated({ state, commit }, index) {
        commit(`setActivated`, index);
    },
    // Get data list from the server
    pullList({ state, commit }) {
    },
    // Push data list to the server
    pushList({ state, commit }) {
    },
}