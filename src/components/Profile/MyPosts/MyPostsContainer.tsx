import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/store";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostActionCreator(store._state.profilePage.newPostText))
                    }

                    // function add input
                    let onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

