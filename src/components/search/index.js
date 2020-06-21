import React from 'react';

function Search(){
  return (
    <input type='search' 
      className='form-control form-control-md' 
      placeholder="search" 
      autocomplete='off' 
      spellcheck='false'>
    </input>
  )
}

export default Search;