import React from "react";
import classes from "./Post.module.css"

export const Post = () => {
    return (
        <div className={classes.item}>
            <img
                src="https://avatars.mds.yandex.net/i?id=3365798b95c3dc4450aefe6b102bec2c4a4b8a63-8981283-images-thumbs&n=13"
                alt="портрет"/>
            post1
            <div>
                <span>   Like</span>
            </div>
        </div>
    )
}