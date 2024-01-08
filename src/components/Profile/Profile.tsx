import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";


type ProfilePostsType={
    profilePage:ProfilePageType
    addPost:()=>void
    updateNewPostText:(newText: string)=>void
}

export const Profile:React.FC<ProfilePostsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    )
}