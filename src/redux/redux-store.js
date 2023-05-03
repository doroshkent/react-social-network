import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
