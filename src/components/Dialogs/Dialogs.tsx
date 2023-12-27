import React from "react";
import classes from "./Dialogs.module.css"

export const Dialogs = () => {
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    Max
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Aleksandr
                </div>
            </div>


            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Good buy</div>
                <div className={classes.message}>Start</div>
            </div>
        </div>
    )
}