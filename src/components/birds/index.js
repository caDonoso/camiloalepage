import React, { useState, useEffect } from 'react';
import BirdCard from './birdCard/index'

function Birds(){
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setBirds(
      {
        'name': 'Chincol',
        'size': 15
      },
      {
        'name': 'Gorrión',
        'size': 16
      }
    );
    setLoading(false);
  }, []);

  if(loading){
    return <p>Cargando aves...</p>
  }

  return (
    <BirdCard />
  )
}

export default Birds;