import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type PostsType={
    id:number
    messages:string
    LikesCounts:number
}

type ProfilePostsType={
    posts:PostsType[]
}

export const Profile:React.FC<ProfilePostsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}