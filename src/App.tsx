import React from 'react';
import './App.css';
import classes from "./components/Profile/Profile.module.css"
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


// типы для profile
type PostsType = {
    id: number
    messages: string
    LikesCounts: number
}

// типы для Dialogs
type DialogsType = {
    id: string
    name: string
}

// типы для messages
type MessagesType = {
    id: number
    message: string
}

// типы для props
type AppPropsType = {
    posts: PostsType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>

                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/musik" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
