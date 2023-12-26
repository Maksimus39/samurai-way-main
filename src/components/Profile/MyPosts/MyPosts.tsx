import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={"I am a champion in weightlifting"} LikeCounts={15}/>
                <Post message={"Ha, hold my beer!"} LikeCounts={20}/>
            </div>
        </div>
    )
}