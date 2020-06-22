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
        case "DELETE_ITEM":
            const items = state.items.filter(item => parseInt(item.id) !== action.itemId)
            return { ...state, items: items }
        default:
            return state
    }
}

export default itemsReducer;