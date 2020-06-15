import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
    lists: listsReducer,
    items: itemsReducer
});

export default rootReducer;