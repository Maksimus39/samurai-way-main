import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";




type PostsType={
    id:number
    messages:string
    LikesCounts:number
}

type MyPostsPropsType={
    posts:PostsType[]
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.messages} LikesCounts={p.LikesCounts}/>)

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