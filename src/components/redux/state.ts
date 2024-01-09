// --------------------------------------------------------------------------
// сейчас мы тут будем производить типизацию state
// тип для messages
type MessageType = {
    id: number
    message: string
}
// тип для dialogs
type DialogsType = {
    id: string
    name: string
}
// тип для dialogsPage
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string  // добавил в типизацию сообщение
}
// тип для posts
type PostType = {
    id: number
    messages: string
    LikesCounts: number
}
// тип для profilePage
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
// тип для sidebar
type SideBarType = {}
// общий тип для state
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
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

// написание типов для метода dispatch
// type AddPostActionType = {
//     type: "ADD-POST",
//     newPostText: string
// }

// type UpdateNewPostTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT",
//     newText: string
// }

// // 1
// type AddPostActionType = ReturnType<typeof addPostActionCreator>
//
// // 2
// type UpdateNewPostTextActionType =ReturnType<typeof updateNewPostTextActionCreator>
// // ------------------------------------------------------------------------------

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
                {id: 1, message: " Как твои дела? 😊\n"},
                {id: 2, message: "Привет"},
                {id: 3, message: "Я очень рад помочь!"},
                {id: 4, message: "Чем я могу быть полезен? 🤔"},
                {id: 5, message: "Ура! У меня получилось! 🎉"},
                {id: 6, message: "Ой, извини, я не могу найти ответ на этот вопрос. 😕"},
                {id: 7, message: "Пожалуйста, не стесняйтесь задать мне любой вопрос! 💬"},
                {id: 8, message: "Спасибо за твою помощь! Я очень благодарен. 🙏"},
            ],
            newMessageBody: ""  // новое сообщение от users
        },
        sidebar: {}
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
        if (action.type === "ADD-POST") {
            // создание нового поста
            let newPost = {
                id: 5,
                messages: action.newPostText,
                LikesCounts: 0
            }
            // добавление нового поста в state
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = " "
            this._rerenderEntireTree()

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            // добавление нового поста в state
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()

            // создание нового message
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._rerenderEntireTree()
            // добавление нового message в state
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({id: 9, message: body})
            this._rerenderEntireTree()
        }
    }
}