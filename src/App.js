import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Owl from "./components/Owl";
import SingleItem from "./components/SingleItemPage";
import Home from "./components/Home";
import About from "./components/About";



function App() {
  return ( <div className="site-wrap">
          <Navigation />
          <div className="row">
              <div className="col-sm-2">
                  <Sidebar />
              </div>
              <div className="col-xl-8, col-sm-8">
                    <Owl />
                    <About />
                    <Home />
              </div>

          </div>
          <div className="row">
              <SingleItem />
          </div>

      </div>
  );
}

export default App;
