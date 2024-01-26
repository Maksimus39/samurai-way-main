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
    newPostText: string
    addPost: () => void
    updateNewPostText: (value: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.messages} LikesCounts={p.LikesCounts}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    // function button onClick
    const addPost = () => {
        props.addPost()
    }

    // function add input
    let onPostChange = () => {
        let text = newPostEl?.current?.value
        console.log(text)
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={classes.postsBlock}>

            <h3>My posts</h3>

            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostEl}
                        value={props.newPostText}/>
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