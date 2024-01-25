import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePostsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePostsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}