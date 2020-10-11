import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Contacts from "./components/Contacts";
import Fitting from "./components/Fitting";
import Profile from "./components/Profile";


function App(props) {
    return (<BrowserRouter>
                <div className="container">
                    <Navigation/>
                </div>
                <div className="container">
                    <Route path="/home" render={() => <Home function={props.function}/>}/>
                    <Route path="/contactUs" component={Contacts}/>
                    <Route path="/fitting" component={Fitting}/>
                    <Route path="/lk" render={() => <Profile function={props.function}/>}/>
                </div>
            </BrowserRouter>
    );
}

export default App;
