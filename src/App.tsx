import React from 'react';
import './App.css';
import classes from "./components/Profile/Profile.module.css"
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./components/redux/state";


// типы для props
type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>

            <div className={classes.content}>
                <Route path="/dialogs" render={() => <Dialogs
                    store={props.store}
                />}/>

                <Route path="/profile" render={() => <Profile
                    profilePage={props.store._state.profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}/>

                <Route path="/news" render={() => <News/>}/>
                <Route path="/musik" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
