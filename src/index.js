import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/store";

let state = store.getState();

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
