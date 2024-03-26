import {UsersPropsType} from "./UsersContainer";
import classes from "./Users.module.css"
import React from "react";

const Users = (props: UsersPropsType) => {

    if(props.users.length === 0){
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://mnogonotka.com/wp-content/uploads/2020/01/maks-korzh-shantazh-in.jpg',
                followed: true,
                fullName: "Max",
                status: "I am boss",
                location: {city: "Kiev", country: "Russia"}
            },
            {
                id: 2,
                photoUrl: 'https://sun9-43.userapi.com/impf/c840122/v840122720/8547a/UIIm32UT6c0.jpg?size=768x960&quality=96&sign=8599a180c2a69c511358060d70e43855&c_uniq_tag=6FDfH_kbR-fhCntiOlrtAEHLbpUvjC0BIMD4R2YRunQ&type=album',
                followed: true,
                fullName: "Andrey",
                status: "I am boss",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/12776f88-26f2-4f34-85a4-3084550ef932/1920x',
                followed: false,
                fullName: "Victor",
                status: "I am boss",
                location: {city: "Sochi", country: "Russia"}
            },
        ])
    }

    return (
        <>
            {
                props.users.map(user => <div key={user.id}>
            <span>
                <div>
                 <img src={user.photoUrl} className={classes.userPhoto} alt={'photo'}/>
                </div>
                <div>
                  {user.followed
                      ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                      : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                     <div>{user.location.city}</div>
                </span>
            </span>
                </div>)
            }
        </>
    )
}

export default Users