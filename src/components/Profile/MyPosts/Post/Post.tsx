import React from "react";
import classes from "./Post.module.css"


type PostPropsType={
    message: string
    LikesCounts:number
}
export const Post:React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.dialog}>
            <img
                src="https://avatars.mds.yandex.net/i?id=3365798b95c3dc4450aefe6b102bec2c4a4b8a63-8981283-images-thumbs&n=13"
                alt="портрет"/>
            {props.message}
            <div>
                <span>Likes  {props.LikesCounts}</span>
            </div>
        </div>
    )
}