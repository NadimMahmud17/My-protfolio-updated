import React, { useContext } from 'react';
import './Toggle.css';
import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';
import {themeContext} from '../../Context';

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;

    const handleClick = () => {
        theme.dispatch({ type: "toggle" });
      };


    return (
        <div className='toggle'onClick={handleClick}>
            <BsMoonStars/>
            <BsSun/>
            <div className="t-button"
            style = {darkmode? {left: "2px"}:{right: "2px"} }
            >
                
            </div>
        </div>
    );
};

export default Toggle;