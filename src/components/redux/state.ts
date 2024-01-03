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
type ProfilePageType = {
    posts: PostType[]
}

// тип для sidebar
type SideBarType = {}

// общий тип для state
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

// а тут производим типизацию нашего state
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, messages: "I am a champion in weightlifting", LikesCounts: 15},
            {id: 2, messages: "Ha, hold my beer!", LikesCounts: 20}
        ]
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
}