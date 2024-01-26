import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-Page-Reduсer";
import {dialogsPageReducer} from "./dialogs-Page-Reduсer";
import {sidebarReducer} from "./sidebar-Reducer";


export const rootReducer = combineReducers({
    profilePageReducer: profilePageReducer,
    dialogsPageReducer: dialogsPageReducer,
    sidebarReducer: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)



