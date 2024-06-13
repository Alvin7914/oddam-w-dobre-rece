import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './scss/main.scss'
import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import LogOut from "./components/LogOut.jsx";
import Register from "./components/Register.jsx";
import GiveAway from "./components/GiveAway.jsx";

const App = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='logowanie' element={<LogIn />} />
               <Route path='rejestracja' element={<Register />} />
               <Route path='wylogowano' element={<LogOut />} />
               <Route path='oddaj-rzeczy' element={<GiveAway />}/>
           </Routes>
       </BrowserRouter>
    )
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)