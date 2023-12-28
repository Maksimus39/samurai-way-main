import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

    let dialogsData = [
        {id:"1", name: "Max"},
        {id:"2", name: "Sergey"},
        {id:"3", name: "Aleksandr"}
    ]

    let messagesData=[
        {id:1, message:"Hi"},
        {id:2, message:"Good buy"},
        {id:3, message:"Start"}
    ]

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={classes.messages}>

                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

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