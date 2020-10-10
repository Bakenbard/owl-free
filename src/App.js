import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Contacts from "./components/Contacts";
import Fitting from "./components/Fitting";
import Profile from "./components/Profile";



function App(props) {
  return ( <div className="container-fluid">
              <BrowserRouter>
                  <div className="row">
                  <Navigation/>
                  </div>
                  <Route path="/home" render={()=><Home function={props.function}/>}/>
                  <Route path="/contactUs" component={Contacts}/>
                  <Route path="/fitting" component={Fitting}/>
                  <Route path="/lk" render={()=><Profile function={props.function}/>}/>
              </BrowserRouter>
        </div>
  );
}

export default App;
