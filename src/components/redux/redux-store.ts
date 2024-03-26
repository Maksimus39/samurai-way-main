import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-Page-Reduсer";
import {dialogsPageReducer} from "./dialogs-Page-Reduсer";
import {sidebarReducer} from "./sidebar-Reducer";
import {usersReducer} from "./users-Reduсer";


export const rootReducer = combineReducers({
    profilePageReducer: profilePageReducer,
    dialogsPageReducer: dialogsPageReducer,
    sidebarReducer: sidebarReducer,
    usersPage:usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)



