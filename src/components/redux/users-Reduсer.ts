import {DispatchActionType} from "./store";


// типизация для usersType
export type UserType = {
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
    users: UserType[]
}



const initialState:InitialStateType = {
    users: [
        // {id: 1, followed: true, fullName: "Max", status: "I am boss", location: {city: "Kiev", country: "Russia"}},
        // {id: 2, followed: true, fullName: "Andrey", status: "I am boss", location: {city: "Moscow", country: "Russia"}},
        // {id: 3, followed: false, fullName: "Victor", status: "I am boss", location: {city: "Sochi", country: "Russia"}},
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
                ...state, users: [...state.users,...action.users]
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



