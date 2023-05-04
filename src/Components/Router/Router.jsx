import { Route, Routes } from "react-router-dom";
import React from "react";
import DialoguesContainer from "pages/Dialogues/DialoguesContainer";
import Music from "pages/Music/Music";
import News from "pages/News/News";
import UsersContainer from "pages/Users/UsersContainer";
import Settings from "pages/Settings/Settings";
import ProfileContainer from "pages/Profile/ProfileContainer";
import Login from "pages/Login/Login";

function Router() {
  return (
    <Routes>
      <Route path="/profile" element={<ProfileContainer />}>
        <Route path=":userId" element={<ProfileContainer />} />
      </Route>
      <Route path="/dialogues/*" element={<DialoguesContainer />} />
      <Route path="/music" element={<Music />} />
      <Route path="/news" element={<News />} />
      <Route path="/users" element={<UsersContainer />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
