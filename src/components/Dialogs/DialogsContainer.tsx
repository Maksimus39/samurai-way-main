import React from "react";
import {sendMessageActionCreator, StoreType, updateNewMessageBodyActionCreator} from "../redux/store";
import {Dialogs} from "./Dialogs";


// типы для Dialogs
type DialogsPropsType = {
    store:StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogsPage


    // function button onClick
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    // function textarea onChange
    const onNewMessageChange = (body:string) => {
       // let body = event.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
    )
}


