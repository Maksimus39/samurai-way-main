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


const App = () => {
    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <Header/>
            <Navbar/>

            <div className={classes.content}>
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/news" component={News}/>
                <Route path="/musik" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
