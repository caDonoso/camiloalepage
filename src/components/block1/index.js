import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

class Block1 extends React.Component {
  render() {
    return (<div className="block-style block-1" id="block-1">
      <h1> Bloque 1 </h1>
      <LoremIpsum p={2}></LoremIpsum>
    </div>);
  }
}

export default Block1;