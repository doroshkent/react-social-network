import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers);

export default store;
