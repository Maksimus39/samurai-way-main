import React, {ChangeEvent, useRef} from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, StoreType, updateNewMessageBodyActionCreator} from "../redux/state";


// // типы для Dialogs
// type DialogsType = {
//     id: string
//     name: string
// }
//
// // типы для messages
// type MessagesType = {
//     id: number
//     message: string
// }


// типы для Dialogs
type DialogsPropsType = {
    store:StoreType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.store._state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) // не забудь вынести эти компоненты
    let messagesElements = props.store._state.dialogsPage.messages.map((m) => <Message message={m.message}/>)  // не забудь вынести эти компоненты


    // поле ввода для сообщений
    let newPostEl = useRef<HTMLTextAreaElement>(null)


    // function button onClick
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    // function textarea onChange
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>


                <div>
                    <textarea
                        ref={newPostEl}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message">
                    </textarea>
                </div>

                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}


type DialogItemPropsType = {
    id: string
    name: string
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={classes.dialog + " " + classes.active}>
            <img
                src="https://avatars.mds.yandex.net/i?id=3365798b95c3dc4450aefe6b102bec2c4a4b8a63-8981283-images-thumbs&n=13"
                alt="портрет"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {

    return (
        <div>
            <ul>
                <li>
                    <div className={classes.dialogs}>{props.message}</div>
                </li>
            </ul>
        </div>
    )
}