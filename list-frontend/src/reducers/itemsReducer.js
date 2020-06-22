function itemsReducer(state = { items: [], loading: false }, action) {
    switch (action.type) {
        case "LOADING_ITEMS":
            return {
                ...state,
                items: [...state.items],
                loading: true
            }
        case "ADD_ITEMS":
            return {
                ...state,
                items: action.items,
                loading: false
            }
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.item] }
        default:
            return state
    }
}

export default itemsReducer;