import React from "react";
import classes from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={classes.content}>
            Main content
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=d4925a3bd7ad9308b115cba36d3ad35a4fc8f460-10445007-images-thumbs&n=13"
                    alt=""/>
            </div>
            <div>
                Avatar + deskription
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}