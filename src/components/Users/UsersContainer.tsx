import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator,
    InitialStateType,
    setUsersActionCreator,
    unfollowActionCreator,
    UserType
} from "../redux/users-Reduсer";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import users from "./Users";




type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followActionCreator(userID));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersActionCreator(users));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)