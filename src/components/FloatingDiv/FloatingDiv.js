import React from 'react';
import './FloatingDiv.css';

import Crown from '../../img/crown.png';

const FloatingDiv = () => {
    return (
        <div className='floatingdiv'>
            
            <img src={Crown} alt="" />
            <span>Web <br />
            Developer</span> 
            
            
        </div>
    );
};

export default FloatingDiv;