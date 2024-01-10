import {DispatchActionType, RootStateType} from "./state";


// reducer dialogs-Page-Reducer
export const dialogsPageReducer = (state: RootStateType, action: DispatchActionType) => {
    // создание нового message

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.dialogsPage.newMessageBody = action.body;
            return state

        case "SEND-MESSAGE":
            let body = state.dialogsPage.newMessageBody;
            state.dialogsPage.newMessageBody = "";
            state.dialogsPage.messages.push({id: 9, message: body});
            return state

        default:
            return state
    }
}

