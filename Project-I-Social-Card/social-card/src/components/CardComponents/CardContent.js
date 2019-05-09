import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-copy">
            <h3 className="copy-header right-shift">Get started 
            with React</h3>
            <p className="copy-text right-shift">React makes 
            it painless to create interactive UIs.
            Design simple views for each state in 
            your application.
            </p>
            <p className="react-link right-shift">reactjs.org</p>
        </div>
    );
};

export default CardContent;