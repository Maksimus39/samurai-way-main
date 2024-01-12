import {DispatchActionType} from "./store";


// объявление initialState для dialogsPageReducer ---------------------------------------------
let initialState = {
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
}

// ------------------------------------------------------------------------------------------


// reducer dialogs-Page-Reducer
export const dialogsPageReducer = (state = initialState, action: DispatchActionType) => {
    // создание нового message

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state

        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 9, message: body});
            return state

        default:
            return state
    }
}

