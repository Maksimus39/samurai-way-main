import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, messages: "I am a champion in weightlifting", LikesCounts: 15},
        {id: 2, messages: "Ha, hold my beer!", LikesCounts: 20}
    ]
    let postsElement = posts.map(p => <Post message={p.messages} LikesCounts={p.LikesCounts}/>)

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
                {postsElement}
            </div>
        </div>
    )
}