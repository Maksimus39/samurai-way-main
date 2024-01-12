import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-Page-Reduсer";
import {dialogsPageReducer} from "./dialogs-Page-Reduсer";
import {sidebarReducer} from "./sidebar-Reducer";


let reducers = combineReducers({
    profilePageReducer: profilePageReducer,
    dialogsPageReducer: dialogsPageReducer,
    sidebarReducer: sidebarReducer
})


 let store = createStore(reducers)


export default store