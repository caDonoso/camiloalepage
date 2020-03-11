import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

class Block2 extends React.Component {
  render() {
    return (<div className="block-style block-2" id="block-2">
      <h1> Bloque 2 </h1>
      <LoremIpsum p={2}></LoremIpsum>
    </div>);
  }
}

export default Block2;