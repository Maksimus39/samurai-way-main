import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

    let dialogs = [
        {id: "1", name: "Max"},
        {id: "2", name: "Sergey"},
        {id: "3", name: "Aleksandr"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Good buy"},
        {id: 3, message: "Start"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map((m) => <Message message={m.message}/>)

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