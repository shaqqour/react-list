function listsReducer(state = { lists: [], loading: false }, action) {
    switch (action.type) {
        case "LOADING_LISTS":
            return {
                ...state,
                lists: [...state.lists],
                loading: true
            }
        case "ADD_LISTS":
            return {
                ...state,
                lists: action.lists,
                loading: false
            }
        case "ADD_LIST":
            return { ...state, lists: [...state.lists, action.list] }
        case "DELETE_LIST":
            const lists = state.lists.filter(list => parseInt(list.id) !== action.listId)
            return { ...state, lists: lists }
        default:
            return state
    }
}

export default listsReducer;