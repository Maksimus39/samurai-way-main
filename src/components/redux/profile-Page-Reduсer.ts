import {DispatchActionType} from "./store";


// объявление initialState для profilePageReducer -------------------------------------
let initialState = {
    posts: [
        {id: 1, messages: "I am a champion in weightlifting", LikesCounts: 15},
        {id: 2, messages: "Ha, hold my beer!", LikesCounts: 20}
    ],
    newPostText: " "
}
// ------------------------------------------------------------------------------------


// reducer profile-Page-Reducer
export const profilePageReducer = (state = initialState, action: DispatchActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            // создание нового поста
            let newPost = {
                id: 5,
                messages: action.newPostText,
                LikesCounts: 0
            };
            // добавление нового поста в state
            state.posts.push(newPost);
            state.newPostText = " ";
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            // добавление нового поста в state
            state.newPostText = action.newText;
            return state
        }
        default:
            return state
    }
}

