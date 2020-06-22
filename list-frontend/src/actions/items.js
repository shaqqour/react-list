const BASE_URL = "http://localhost:3000";
const ITEMS_URL = `${BASE_URL}/items`;

export const fetchItems = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_ITEMS" })
        fetch(ITEMS_URL)
        .then(response => response.json())
        .then(jsonObject => dispatch({ type: 'ADD_ITEMS', items: jsonObject }))
    }
}

export const addItem = (item) => {
    let formData = {
        "name": item.name,
        "status": item.status,
        "priority": item.priority,
        "due_date": item.due_date,
        "list_id": item.list_id
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
        dispatch({ type: "LOADING_ITEMS" })
        fetch(ITEMS_URL, configObj)
        .then(response => response.json())
        .then(jsonObject => {
            dispatch({ type: 'ADD_ITEM', item: jsonObject.data.attributes })
        });
    }
}