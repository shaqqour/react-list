function listsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_LIST":
            return [ ...state, action.list ]
        default:
            return state
    }
}

export default listsReducer;