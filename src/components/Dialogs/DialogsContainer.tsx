import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../redux/store";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


export const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {

            (store) => {
                let state = store.getState().dialogsPage

                // function button onClick
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                // function textarea onChange
                const onNewMessageChange = (body: string) => {
                    // let body = event.target.value
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }
                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>


}


