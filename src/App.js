import React from 'react';
import style from './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsNavbarState={props.state.friends}/>
                <div className={style.appWrapperMain}>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path='/dialogues/*'
                               element={<Dialogues dialoguesState={props.state.dialoguesPage}/>}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;