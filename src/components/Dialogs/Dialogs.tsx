import React, {ChangeEvent, useRef} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {DialogsPropsType} from "./DialogsContainer";



export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>) // не забудь вынести эти компоненты
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>)  // не забудь вынести эти компоненты

    // поле ввода для сообщений
    let newPostEl = useRef<HTMLTextAreaElement>(null)


    // function button onClick
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    // function textarea onChange
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
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


