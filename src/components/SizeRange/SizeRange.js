import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`

`;

const SizeRange = ({ state, resetArray }) => {
  
  return(
    <Styles>
      <input 
        type="range" 
        min={5} 
        max={500} 
        value={state.value} 
        className="slider" 
        onChange={(event) => {
          state.size = event.target.value;
          resetArray(state.size);
          console.log(event.target.value)
        }} />
    </Styles>
    )
}

export default SizeRange

