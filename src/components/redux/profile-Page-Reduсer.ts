import {DispatchActionType, RootStateType} from "./state";


// reducer profile-Page-Reducer
export const profilePageReducer = (state: RootStateType, action: DispatchActionType) => {

    switch (action.type) {
        case "ADD-POST": {
            // создание нового поста
            let newPost = {
                id: 5,
                messages: action.newPostText,
                LikesCounts: 0
            };
            // добавление нового поста в state
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = " ";
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            // добавление нового поста в state
            state.profilePage.newPostText = action.newText;
            return state
        }
        default:
            return state
    }
}

