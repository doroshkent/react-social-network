import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Music from "pages/Music/Music";
import News from "pages/News/News";
import Settings from "pages/Settings/Settings";
import ProfileContainer from "pages/Profile/ProfileContainer";
import Login from "pages/Login/Login";
import Preloader from "../common/Preloader";

const DialoguesContainer = lazy(() =>
  delayForDemo(import("pages/Dialogues/DialoguesContainer"))
);
const UsersContainer = lazy(() =>
  delayForDemo(import("pages/Users/UsersContainer"))
);

function Router() {
  return (
    <Suspense fallback={<Preloader />}>
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
    </Suspense>
  );
}

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default Router;
