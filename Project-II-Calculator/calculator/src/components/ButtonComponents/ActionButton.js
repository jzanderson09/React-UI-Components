import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className="action-button-container">
            <h1 className ="numbers action-button clear">{props.text.clear}</h1>
            <h1 className ="numbers operator divide">{props.text.divide}</h1>
            <h1 className ="numbers action-button zero">{props.text.zero}</h1>
            <h1 className ="numbers operator equals">{props.text.equals}</h1>
        </div>
    );
};

export default ActionButton;