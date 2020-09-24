import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

`;
const showValue = (value) => {
    const element = document.getElementById("showValue");
    element.innerHTML = value;
  }
const SizeRange = ({ state, resetArray }) => {
  
  return(
    <div>
      <Styles>
        <h2>Size Range</h2>
        <input 
          type="range" 
          min={5} 
          max={500} 
          value={state.value} 
          className="slider" 
          onChange={(event) => {
            state.size = event.target.value;
            resetArray(state.size);
            showValue(state.size);
          }} />
          <br></br>
          <span id="showValue">20</span>
      </Styles>
    </div>
    )
}

export default SizeRange

