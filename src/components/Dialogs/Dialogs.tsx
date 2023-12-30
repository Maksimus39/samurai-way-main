import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


// типы для Dialogs
type DialogsType = {
    id: string
    name: string
}

// типы для messages
type MessagesType = {
    id: number
    message: string
}
// типы для Dialogs
type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m) => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


type DialogItemPropsType = {
    id: string
    name: string
}
const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.dialogs}>{props.message}</div>
    )
}