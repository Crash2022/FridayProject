// React 17
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {App} from './App';
//
// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// );

// новая версия React 18
import {createRoot} from 'react-dom/client';
import React from 'react';
import './index.css';
import {App} from './App';
import {Provider} from "react-redux";
import {store} from "./n1-main/m2-BLL/store";
import {BrowserRouter, HashRouter} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
);