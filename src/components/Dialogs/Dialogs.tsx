import React, {useRef} from "react";
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

export const Dialogs:React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m) => <Message message={m.message}/>)



    // поле ввода для сообщений
    let newPostEl = useRef<HTMLTextAreaElement>(null)
    // function button onClick
    const addPost = () => {
        if (newPostEl.current !== null) {
            alert(newPostEl.current.value)
        }
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}


                <div>
                    <textarea ref={newPostEl}></textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
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