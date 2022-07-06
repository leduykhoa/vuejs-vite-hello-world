export default {
    getListToJson: state => JSON.stringify(state.list),
    getList: state => state.list,
    getActivated: state => state.activated,
    getItemActivated: (state) => {
        if (state.activated !== undefined && (state.list.length > parseInt(state.activated))) {
            // if (state.list[state.activated]) {
            return state.list[parseInt(state.activated)];
        }
        return false;
    },
}