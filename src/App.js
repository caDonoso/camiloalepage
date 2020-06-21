import React, { Component } from 'react';
import './App.css';

//Animations

import Navbar from './components/navbar/index';
import Search from './components/search/index';
import Birds from './components/birds/index';
import Footer from './components/footer/index';

function App(){
  return (
    <div className="my-container">
      {/*<div id="navbar">
        <Navbar/>
  </div>*/}
      <div id="search">
        <Search />
      </div>
      <div id="birds">
        <Birds />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;
