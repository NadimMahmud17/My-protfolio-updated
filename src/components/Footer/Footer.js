import React from 'react';
import './Footer.css';

import Wave from "../../img/wave.png";
import {FiInstagram} from 'react-icons/fi';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';



const Footer = () => {
    return (
        <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
          <span>nadim.bd62@gmail.com</span>
          <div className="f-icons">
            <FiInstagram color="white" size={"3rem"} />
            <BsFacebook color="white" size={"3rem"} />
            <BsGithub color="white" size={"3rem"} />
          </div>
        </div>
      </div>
    );
};

export default Footer;