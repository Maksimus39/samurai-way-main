import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




// данные posts
let posts = [
    {id: 1, messages: "I am a champion in weightlifting", LikesCounts: 15},
    {id: 2, messages: "Ha, hold my beer!", LikesCounts: 20}
]
// данные dialogs
let dialogs = [
    {id: "1", name: "Max"},
    {id: "2", name: "Sergey"},
    {id: "3", name: "Aleksandr"}
]
// данные messages
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Good buy"},
    {id: 3, message: "Start"}
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);