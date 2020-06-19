import uuid from 'uuid';

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
            const list = {id: uuid(), name: action.listName, items:[]}
            return { ...state, lists:[...state.lists, list] }
        default:
            return state
    }
}

export default listsReducer;