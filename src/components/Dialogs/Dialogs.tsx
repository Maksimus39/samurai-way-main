import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                     <NavLink to="/dialogs/1">Max</NavLink>
                </div>
                <div className={classes.dialog}>
                   <NavLink to="/dialogs/2">Sergey</NavLink>
                </div>
                <div className={classes.dialog}>
                  <NavLink to="/dialogs/3">Aleksandr</NavLink>
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