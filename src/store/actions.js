export default {
    addToList({ state, commit }, item) {
        commit(`addToList`, item);
    },
    changePosition({ state, commit }, item, index) {
        // commit(`addToList`, item);
    }
}