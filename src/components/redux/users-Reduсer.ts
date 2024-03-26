import {DispatchActionType} from "./store";


// типизация для usersType
export type UsersType = {
    id: number
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
    users: UsersType[]
}

const initialState = {
    users: [
        {id: 1, followed: true, fullName: "Max", status: "I am boss", location: {city: "Lipeck", country: "Russia"}},
        {id: 2, followed: true, fullName: "Andrey", status: "I am boss", location: {city: "Moscow", country: "Russia"}},
        {id: 3, followed: false, fullName: "Kolyan", status: "I am boss", location: {city: "Sochi", country: "Russia"}},
    ] as  UsersType[]
}

export const usersReducer = (state: InitialStateType = initialState, action: DispatchActionType): InitialStateType => {
    switch (action.type) {

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



