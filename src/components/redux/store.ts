// --------------------------------------------------------------------------
// сейчас мы тут будем производить типизацию state
// тип для messages
import {profilePageReducer, ProfilePageType} from "./profile-Page-Reduсer";
import {dialogsPageReducer} from "./dialogs-Page-Reduсer";
import {sidebarReducer} from "./sidebar-Reducer";
import {followActionCreator, unfollowActionCreator, usersReducer, UsersType} from "./users-Reduсer";


export type MessageType = {
    id: string
    message: string
}
// тип для dialogs
export type DialogsType = {
    id: string
    name: string
}
// тип для dialogsPage
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string  // добавил в типизацию сообщение
}

// тип для sidebar
type SideBarType = {}


// общий тип для state
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
    // new state
    usersReducer: {
        users:  UsersType[]
    }
}

// ---------------------------------------------------------------------------
// типизация объекта store
export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: DispatchActionType) => void
}

// -----------------------------------------------------------------------------
// название общего типа для метода dispatch
export type DispatchActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>

    // добавил два экшен креэйтора
    | ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>

//--------------------------------------------------------------------------------


// создание ActionCreator -------------------------------------------------------------------------------

// это два экшена для добавления users на стену
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

// а тут я напишу два экшена для добавления переписки между пользователями
export const updateNewMessageBodyActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: text
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}

// ----------------------------------------------------------------------------------------------------


// создание объекта store
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: "I am a champion in weightlifting", LikesCounts: 15},
                {id: 2, messages: "Ha, hold my beer!", LikesCounts: 20}
            ],
            newPostText: " "
        },
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Max"},
                {id: "2", name: "Sergey"},
                {id: "3", name: "Aleksandr"}
            ],
            messages: [
                {id: "1", message: " Как твои дела? 😊\n"},
                {id: "2", message: "Привет"},
                {id: "3", message: "Я очень рад помочь!"},
                {id: "4", message: "Чем я могу быть полезен? 🤔"},
                {id: "5", message: "Ура! У меня получилось! 🎉"},
                {id: "6", message: "Ой, извини, я не могу найти ответ на этот вопрос. 😕"},
                {id: "7", message: "Пожалуйста, не стесняйтесь задать мне любой вопрос! 💬"},
                {id: "8", message: "Спасибо за твою помощь! Я очень благодарен. 🙏"},
            ],
            newMessageBody: ""  // новое сообщение от users
        },
        sidebar: {},
        usersReducer: {
            users: [
                {
                    id: 1,
                    followed: true,
                    fullName: "Max",
                    status: "I am boss",
                    location: {city: "Lipeck", country: "Russia"}
                },
                {
                    id: 2,
                    followed: true,
                    fullName: "Andrey",
                    status: "I am boss",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 3,
                    followed: false,
                    fullName: "Kolyan",
                    status: "I am boss",
                    location: {city: "Sochi", country: "Russia"}
                },
            ]
        }
    },
    // перерисовка callback
    _rerenderEntireTree() {
        console.log("state")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    // написание реализации метода dispatch
    dispatch(action) {  // { type: "ADD-POST"}
        // export reducer

        profilePageReducer(store._state.profilePage, action)
        dialogsPageReducer(store._state.dialogsPage, action)
        sidebarReducer(store._state.sidebar, action)
        usersReducer(store._state.usersReducer, action)

        // _rerenderEntireTree
        this._rerenderEntireTree()

    }


}

