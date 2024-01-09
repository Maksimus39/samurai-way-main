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


// типизация объекта store
export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}


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
            ]
        },
        sidebar: {}
    },

    // реализация добавления users на стену
    updateNewPostText(newText: string) {

        // добавление нового поста в state
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },

    // реализация добавления users на стену
    addPost() {

        // создание нового поста
        let newPost = {
            id: 5,
            messages: this._state.profilePage.newPostText,
            LikesCounts: 0
        }
        // добавление нового поста в state
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = " "
        this._rerenderEntireTree()
    },

    // перерисовка коллбеком
    _rerenderEntireTree() {
        console.log("state")
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    getState() {
        return this._state
    }
}