import './index.css';
import {store} from "./components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>,
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree()


store.subscribe(rerenderEntireTree)