import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name="Max" id="1"/>
                <DialogItem name="Sergey" id="2"/>
                <DialogItem name="Aleksandr" id="3"/>

            </div>
            <div className={classes.messages}>

                <Message message="Hi"/>
                <Message message="Good buy"/>
                <Message message="Start"/>

            </div>
        </div>
    )
}


type DialogItemPropsType = {
    id: string
    name: string
}
const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs" + props.id

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
        <div className={classes.message}>{props.message}</div>
    )
}