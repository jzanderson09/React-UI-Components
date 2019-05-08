import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = 'May';
    let dateString = date.toString() + ' ' + month;
    return(
        <div className="header-title">
            <h3 className="title-items title">Lambda School</h3>
            <h3 className="title-items twitter-link">
                <a href="https://twitter.com/lambdaschool?lang=en">@lambdaSchool</a>
            </h3>
            {/* <h3 className="title-items period">.</h3> */}
            <h3 className="title-items date">{dateString}</h3>
        </div>



    );
};

export default HeaderTitle;