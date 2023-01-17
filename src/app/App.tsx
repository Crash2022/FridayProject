import React from 'react';
import './App.css';
import {Error404} from "../common/Error404/Error404";
import {Route, Routes} from "react-router-dom";
import {Main} from "../features/Main/Main";
import {Posts} from "../features/Posts/Posts";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}