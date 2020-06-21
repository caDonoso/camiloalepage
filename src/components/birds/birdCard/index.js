import React, { useState, useEffect } from 'react';

function BirdCard(){

  return(
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Nombre comun del ave</h5>
        <p class="card-text">Descripción del ave</p>
        <a href="#" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  )
}

export default BirdCard;