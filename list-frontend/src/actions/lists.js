const BASE_URL = "http://localhost:3000";
const LISTS_URL = `${BASE_URL}/lists`;
const ITEMS_URL = `${BASE_URL}/items`;

export const fetchLists = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_LISTS" })
        fetch(LISTS_URL)
        .then(response => response.json())
        .then(jsonObject => dispatch({ type: 'ADD_LISTS', lists: jsonObject.data }))
    }
}

export const addList = (listName) => {
    let formData = {
        "name": listName
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return (dispatch) => {
        dispatch({ type: "LOADING_LISTS" })
        fetch(LISTS_URL, configObj)
        .then(response => response.json())
        .then(jsonObject => {
            dispatch({ type: 'ADD_LIST', list: jsonObject.data.attributes })
        });

    }
}

export const deleteList = (listId) => {
    let configObj = { method: "Delete" };
    fetch(LISTS_URL + "/" + listId, configObj)
    return { type: "DELETE_LIST", listId }
}