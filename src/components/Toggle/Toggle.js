import React from 'react';
import './Toggle.css';
import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';
const Toggle = () => {
    return (
        <div className='toggle'>
            <BsMoonStars/>
            <BsSun/>
            <div className="t-button">

            </div>
        </div>
    );
};

export default Toggle;