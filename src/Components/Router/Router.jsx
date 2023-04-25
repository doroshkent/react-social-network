import { Route, Routes } from "react-router-dom";
import React from "react";
import DialoguesContainer from "Pages/Dialogues/DialoguesContainer";
import Music from "Pages/Music/Music";
import News from "Pages/News/News";
import UsersContainer from "Pages/Users/UsersContainer";
import Settings from "Pages/Settings/Settings";
import ProfileContainer from "Pages/Profile/ProfileContainer";

function Router() {
  return (
    <Routes>
      <Route path="/profile/:userId" element={<ProfileContainer/>}/>
      <Route path="/profile/" element={<ProfileContainer/>}/>
      <Route path="/dialogues/*" element={<DialoguesContainer />} />
      <Route path="/music" element={<Music />} />
      <Route path="/news" element={<News />} />
      <Route path="/users" element={<UsersContainer />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default Router;
