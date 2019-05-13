import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  //states:

  const digits = {
    seven: 7,
    eight: 8,
    nine: 9,
    multiply: 'X',
    four: 4,
    five: 5,
    six: 6,
    minus: '−',
    one: 1,
    two: 2,
    three: 3,
    add: '+',
  };

  const action = {
    clear: 'clear',
    zero: 0,
    divide: '÷',
};

  return (
    <div className="app-container">
      <div className="calculator-container">
        <CalculatorDisplay />
        <NumberButton text={digits} />
        <ActionButton text={action} />
      </div>

      
    </div>
  );
};


export default App;
