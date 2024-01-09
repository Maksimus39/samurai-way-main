import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType} from "../redux/state";


type ProfilePostsType={
    profilePage:ProfilePageType
    dispatch:(action:DispatchActionType)=>void
}

export const Profile:React.FC<ProfilePostsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}