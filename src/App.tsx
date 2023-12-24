import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App-wrapper">
            <header className="header">
                <img
                    src="https://avatars.mds.yandex.net/i?id=8b34ff8362b18d407a4e3286f5dc77a5f44497ad-9288635-images-thumbs&n=13"
                    alt=""/>

            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className="content">
                Main content
                <div>
                    <img
                        src="https://avatars.mds.yandex.net/i?id=d4925a3bd7ad9308b115cba36d3ad35a4fc8f460-10445007-images-thumbs&n=13"
                        alt=""/>
                </div>
                <div>Avatar + deskription</div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
