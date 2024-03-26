import {DispatchActionType} from "./store";


// типизация для usersType
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
}
export type InitialStateType = {
    users: UserType[]
}


const initialState: InitialStateType = {
    users: [
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
    ] as UserType[]
}

export const usersReducer = (state: InitialStateType = initialState, action: DispatchActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(us => us.id === action.userId ? {...us, followed: true} : us)
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(us => us.id === action.userId ? {...us, followed: false} : us)
            }
        case "SET_USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followActionCreator = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId,
    } as const
}
export const unfollowActionCreator = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId,
    } as const
}
export const setUsersActionCreator = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}



