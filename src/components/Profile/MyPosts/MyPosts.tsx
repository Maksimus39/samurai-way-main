import React, {useRef} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";


type PostsType = {
    id: number
    messages: string
    LikesCounts: number
}

type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.messages} LikesCounts={p.LikesCounts}/>)


    let newPostEl = useRef<HTMLTextAreaElement>(null)
    // function button onClick
    const addPost = () => {
        let text = newPostEl?.current?.value
        props.addPost(text ? text : "")
        if (newPostEl.current) {
            newPostEl.current.value = ""
        }
    }

    return (
        <div className={classes.postsBlock}>

            <h3>
                My posts
            </h3>

            <div>
                <div>
                    <textarea ref={newPostEl}></textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}