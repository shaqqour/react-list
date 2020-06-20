const BASE_URL = "http://localhost:3000";
const LISTS_URL = `${BASE_URL}/lists`;
const ITEMS_URL = `${BASE_URL}/items`;

export const fetchItems = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_ITEMS" })
        fetch(ITEMS_URL)
        .then(response => response.json())
        .then(jsonObject => dispatch({ type: 'ADD_ITEMS', items: jsonObject.data }))
    }
}