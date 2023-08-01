import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { locale } from 'primereact/api';
import './data/locale.js';
import './data/styles.js';         
import routes from "./data/routes";
import Hello from './components/Hello';

locale('fr');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {routes.map((route,index)=>(
                    <Route
                        key={index} 
                        path={route.path} 
                        element={route.element}
                    />
                ))}
                <Route path='/mety/:nom?' element={<Hello nom='Faneva'/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
