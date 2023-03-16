import React from 'react';
import PropTypes from 'prop-types';
import Profile from "Pages/Profile/Profile";
import Dialogues from "Pages/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "Pages/Music/Music";
import News from "Pages/News/News";
import Settings from "Pages/Settings/Settings";
import Template from "Components/Template/Template";
import AppWrapper from "style/AppWrapper";

const App = ({state: {sidebar, profilePage, dialoguesPage}, dispatch}) => (
    <BrowserRouter>
        <AppWrapper>
            <Template sidebar={sidebar}>
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
            </Template>
        </AppWrapper>
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
