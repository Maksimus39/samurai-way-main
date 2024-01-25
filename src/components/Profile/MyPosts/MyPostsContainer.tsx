import React from "react";
import {addPostActionCreator, StoreType, updateNewPostTextActionCreator} from "../../redux/store";
import {MyPosts} from "./MyPosts";




type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store._state.profilePage.newPostText))
    }

    // function add input
    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={props.store._state.profilePage.posts}
            newPostText={props.store._state.profilePage.newPostText}
        />
    )
}

