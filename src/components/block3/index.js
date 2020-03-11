import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

class Block3 extends React.Component {
  render() {
    return (<div className="block-style block-3" id="block-3">
      <h1> Bloque 3 </h1>
      <LoremIpsum p={2}></LoremIpsum>
    </div>);
  }
}

export default Block3;