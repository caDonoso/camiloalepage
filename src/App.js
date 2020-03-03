import React from 'react';
import './App.css';

import Navbar from './components/navbar/index';
import Block1 from './components/block1/index';
import Block2 from './components/block2/index';
import Block3 from './components/block3/index';
import Footer from './components/footer/index';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Block1></Block1>
      <Block2></Block2>
      <Block3></Block3>
      <Footer></Footer>
    </div>
  );
}

export default App;
