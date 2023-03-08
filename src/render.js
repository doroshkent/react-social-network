import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost, updatePostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <App state={state} addPost={addPost} updatePostText={updatePostText} />
    );
}
