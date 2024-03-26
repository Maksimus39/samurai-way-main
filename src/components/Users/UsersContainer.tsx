import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator, UserType} from "../redux/users-Reduсer";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";


// type MapStateToPropsType
type MapStateToPropsType = {
    users: UserType[]
}
// type MapDispatchPropsType
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}
// type UsersPropsType
export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType



let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
       users: state.usersPage.users
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