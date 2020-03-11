import React, { Component } from 'react';
import './App.css';

//Animations
import FadeInSection from './components/fadeIn/index'

import Navbar from './components/navbar/index';
import Header from './components/header/index';
import Footer from './components/footer/index';

import Block1 from './components/block1/index';
import Block2 from './components/block2/index';
import Block3 from './components/block3/index';

import { LoremIpsum } from 'react-lorem-ipsum';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <FadeInSection>
          <Block1></Block1>
        </FadeInSection>
        <FadeInSection>
          <Block2></Block2>
        </FadeInSection>
        <FadeInSection>
          <Block3></Block3>
        </FadeInSection>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
