import React from "react";
import classes from "./ProfileInfo.module.css"
export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=8d5b369c6ba45dda3b69022d4f5c140b81a550c6-5337839-images-thumbs&n=13"
                    alt="штангист"/>
            </div>
            <div className={classes.descriptionBlock}>
                Avatar + deskription
            </div>

        </div>
    )
}