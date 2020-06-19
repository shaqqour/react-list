export const fetchLists = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_LISTS" })
        fetch("http://localhost:3000/lists")
        .then(response => response.json())
        .then(jsonObject => dispatch({ type: 'ADD_LISTS', lists: jsonObject.data }))
    }
}

export const addList = (listName) => {
    return {
        type: 'ADD_LIST',
        listName
    }
}