export default {
    addToList(state, item, index) {
        if (!index || parseInt(index) == NaN || parseInt(index) > state.list.length) {
            index = state.list.length;
        }
        state.list.splice(index, 0, item);
    },
    removeItem(state, index) {
        if (!index || parseInt(index) == NaN || parseInt(index) > state.list.length) {
            index = state.list.length;
        }
        state.list.splice(index, 1);
    },
    changePositionItem(state, item, index) {
        // 
    },
    setList(state, list) {
        state.list = [...[], ...list];
    },
    getList(state) {
        state.list;
    },
    // Apply for pull data from the server
    cloneListToListOrigin(state) {
        state.listOrigin = [...[], ...state.list];
    },
    // Apply for reset form
    cloneListOriginToList(state) {
        state.list = [...[], ...state.listOrigin];
    },
}