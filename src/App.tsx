import React from 'react';
import './App.css';
import classes from "./components/Profile/Profile.module.css"
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


const App = () => {

    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>

            <div className={classes.content}>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/users" render={() => <Users/>}/>




                <Route path="/news" render={() => <News/>}/>
                <Route path="/musik" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
