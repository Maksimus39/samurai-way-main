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
import {RootStateType} from "./components/redux/state";




// типы для props
type AppPropsType = {
    appState: RootStateType
    addPost:(postMessage: string)=>void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
            <div className="App-wrapper">
                <Header/>
                <Navbar/>

                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={props.appState.dialogsPage.dialogs}
                        messages={props.appState.dialogsPage.messages}/>}/>


                    <Route path="/profile" render={() => <Profile
                        posts={props.appState.profilePage.posts}
                        addPost={props.addPost}


                    />}/>


                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/musik" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
    );
}
export default App;
