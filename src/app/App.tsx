import React from 'react';
import './App.css';
import {Error404} from "../common/Error404/Error404";
import {Navigate, Route, Routes} from "react-router-dom";
import {Posts} from "../features/Posts/Posts";
import {Main} from "../features/Main/Main";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                {/*<Route path={'/'} element={<Main/>}/>*/}
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/error404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to='/error404'/>} />
            </Routes>
        </div>
    );
}