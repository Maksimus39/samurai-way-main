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
    addPost:(postMessage: string)=>void
}

export const Profile:React.FC<ProfilePostsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
            />
        </div>
    )
}