import React from 'react';
import './Button.css';

  //props:
  const NumberButton = props => {
    return (
      <div className="numbers-div">
        <h1 className="numbers">{props.text.seven}</h1>
        <h1 className="numbers">{props.text.eight}</h1>
        <h1 className="numbers">{props.text.nine}</h1>
        <h1 className="numbers operator">{props.text.multiply}</h1>
        <h1 className="numbers">{props.text.four}</h1>
        <h1 className="numbers">{props.text.five}</h1>
        <h1 className="numbers">{props.text.six}</h1>
        <h1 className="numbers operator minus">{props.text.minus}</h1>
        <h1 className="numbers">{props.text.one}</h1>
        <h1 className="numbers">{props.text.two}</h1>
        <h1 className="numbers">{props.text.three}</h1>
        <h1 className="numbers operator">{props.text.add}</h1>
      </div>
    );
  };
  
 export default NumberButton;