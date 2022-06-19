import React from 'react';
import './FlatingButtom.css';

import thumbup from '../../img/thumbup.png';

const FloatingButtom = () => {
    return (
        <div className='FlatingButtom'>
            <img src={thumbup} alt="" />
            <span>Best Design <br />
            Award
            </span>
        </div>
    );
};

export default FloatingButtom;