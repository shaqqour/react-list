function itemsReducer(state = { items: [], loading: false }, action) {
    let items;
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
            items = state.items.filter(item => item.id !== action.itemId)
            return { ...state, items: items }
        case "CHANGE_TO_DOING":
            items = state.items.map(item => {
                if(item.id === action.itemId) {
                    item.status = "doing"
                }
                return item
            })
            return { ...state, items: items }
        case "CHANGE_TO_DONE":
            items = state.items.map(item => {
                if (item.id === action.itemId) {
                    item.status = "done"
                }
                return item
            })
            return { ...state, items: items }
        default:
            return state
    }
}

export default itemsReducer;