import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});
