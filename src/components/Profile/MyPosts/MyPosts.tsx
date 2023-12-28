import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData=[
        {id:1, messages: "I am a champion in weightlifting", LikesCounts:15},
        {id:2, messages: "Ha, hold my beer!", LikesCounts: 20}
    ]


    return (
        <div className={classes.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                <Post message={postData[0].messages} LikesCounts={postData[0].LikesCounts}/>
                <Post message={postData[1].messages} LikesCounts={postData[1].LikesCounts}/>
            </div>
        </div>
    )
}