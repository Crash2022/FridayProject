import React from 'react';
import './App.css';
import {Error404} from "./n1-main/m1-UI/components/Error404";
import {NewPassword} from "./n1-main/m1-UI/components/NewPassword";
import {RecoveryPassword} from "./n1-main/m1-UI/components/RecoveryPassword";
import {Registration} from "./n1-main/m1-UI/components/Registration";
import {TestComponents} from "./n1-main/m1-UI/components/TestComponents";
import {Login} from "./n1-main/m1-UI/components/Login";
import {Profile} from "./n1-main/m1-UI/components/Profile";
import {Route, Routes} from "react-router-dom";
import {Main} from "./n1-main/m1-UI/components/Main";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Main/>}/>

                <Route path={'/profile'} element={<Profile/>}/>
                {/*<Profile/>*/}

                {/*<Registration/>*/}
                {/*<Login/>*/}
                <Route path={'/login'} element={<Login/>}/>

                {/*<RecoveryPassword/>*/}
                {/*<NewPassword/>*/}
                {/*<TestComponents/>*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}