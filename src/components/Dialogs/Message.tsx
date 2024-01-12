import classes from "./Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {

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