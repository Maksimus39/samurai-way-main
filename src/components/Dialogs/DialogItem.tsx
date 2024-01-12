import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}
export const DialogItem: React.FC<DialogItemPropsType> = (props) => {

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