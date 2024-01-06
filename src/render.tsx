import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType} from "./components/redux/state";


export let rerenderEntireTre=(state:RootStateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost}/>,
        </BrowserRouter>,  document.getElementById('root')
    );
}

