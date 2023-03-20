import React from "react";
import Profile from "Pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Music from "Pages/Music/Music";
import News from "Pages/News/News";
import Settings from "Pages/Settings/Settings";
import Template from "Components/Template/Template";
import AppWrapper from "style/AppWrapper";
import DialoguesContainer from "./Pages/Dialogues/DialoguesContainer";
import Friends from "./Pages/Friends/Friends";

const App = () => (
    <AppWrapper>
        <Template>
            <Routes>
                <Route path='/profile'
                       element={<Profile />}/>
                <Route path='/dialogues/*'
                       element={<DialoguesContainer />}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/friends' element={<Friends />}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </Template>
    </AppWrapper>
)

export default App;
