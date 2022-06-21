import React from 'react';
import './Work.css';

import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

import { motion } from "framer-motion";

const Work = () => {
    return (
        <div className='works'>
            <div className="swesome">
                <span>Work for All these</span>
                <span>Brands & clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consequuntur, enim.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing.
                <br />
                Lorem ipsum dolor sit amet.
                </span>
                
                <button className='button cv-button'>Here me</button>
               

                <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div
                 initial={{ rotate: 45 }}
                 whileInView={{ rotate: 0 }}
                 viewport={{ margin: "-40px" }}
                 transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>{""}

                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>

                </motion.div>
                {/* Background circle */}
                <div className="w-backCirlce blueCirle"></div>
                <div className="w-backCirlce yellowCirle"></div>
            </div>

        </div>
    );
};

export default Work;