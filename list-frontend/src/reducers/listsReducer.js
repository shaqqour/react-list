function listsReducer(state = { lists: [], loading: false, searchedLists: [] }, action) {
    let lists;
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
            lists = state.lists.filter(list => parseInt(list.id) !== action.listId)
            return { ...state, lists: lists }
        case "SEARCH_LISTS":
            lists = filter(state.lists, action.term)
            return { ...state, searchedLists: lists }
        case "TOGGLE_STARRED":
            lists = state.lists.map(list => {
                if (list.id === action.listId) {
                    list.starred = action.starred
                }
                return list
            })
            return { ...state, lists: lists }
        default:
            return state
    }
}

function filter(lists, term) {
    term = term.toLocaleLowerCase()
    return lists.filter(list => list.attributes.name.toLocaleLowerCase().includes(term))
}

export default listsReducer;