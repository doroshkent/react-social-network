import React from 'react';
import style from './App.module.css';
import PropTypes from 'prop-types';
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Template from "./components/Template/Template";

const App = ({state: {sidebar, profilePage, dialoguesPage}, dispatch}) => (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <Template sidebar={sidebar}>
                    <div className={style.appWrapperMain}>
                        <Routes>
                            <Route path='/profile'
                                   element={<Profile profile={profilePage}
                                                     dispatch={dispatch}/>}/>
                            <Route path='/dialogues/*'
                                   element={<Dialogues dialogues={dialoguesPage}
                                                       dispatch={dispatch}/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </Template>
            </div>
        </BrowserRouter>
    )

App.propTypes = {
    state: PropTypes.shape({
        sidebar: PropTypes.object,
        profilePage: PropTypes.object,
        dialoguesPage: PropTypes.object
    }),
    dispatch: PropTypes.func
}

export default App;
