import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import OwlCarousel from 'react-owl-carousel2';
import coat from "./img/coat.jpg";
import dress1 from "./img/dress1.jpg";
import dress2 from "./img/dress2.png";
import lady from "./img/lady.jpg";
import lady2 from "./img/lady2.png";
import options from "./components/Owl";

function App() {
  return ( <div className="site-wrap">
          <Navigation />
          <Sidebar />

          <OwlCarousel ref="car" options={options}>
              <div><img src={coat} alt="The Last of us"/></div>
              <div><img src={dress1} alt="GTA V"/></div>
              <div><img src={dress2} alt="Mirror Edge"/></div>
          </OwlCarousel>
      </div>
  );
}

export default App;
