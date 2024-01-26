import {addPostActionCreator, store, updateNewPostTextActionCreator} from "../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePageReducer.posts,
        newPostText: state.profilePageReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator(store._state.profilePage.newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)