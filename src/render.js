import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";
import {addPost} from "./redux/state";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
    // BrowserRouter - нужен, чтобы мы переключались независимо от введенных URL
}

