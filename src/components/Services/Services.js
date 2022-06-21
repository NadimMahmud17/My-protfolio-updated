import React from 'react';
import './Services.css';

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from '../../img/Nadim Mamud-Resume2 (1).pdf'
import { motion } from "framer-motion";

const Services = () => {



    const transition = {
        duration: 1,
        type: "spring",
      };

    return (
        <div className='services'>
            {/* left side */}
            <div className="swesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consequuntur, enim.</span>
                <a href={Resume} download>
                <button className='button cv-button'>Downloade Cv</button>
                </a>

                <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div 
                initial={{ left: "25rem" }}
                whileInView={{ left: "14rem" }}
                transition={transition}
                 style={{left: '14rem'}}>
                    <Card 
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    Detail = {"Figma, Sketch, PhotoShop, Adobe, Adobe xd"}
                    />
                </motion.div>
                {/* secend card */}
                <motion.div 
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                style={{top: "12rem", left: "-4rem"}}>
                <Card 
                    emoji = {Glasses}
                    heading = {'Developer'}
                    Detail = {"Html, css, JavaScript,React"}
                    />
                </motion.div>

                <motion.div
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                style={{top: "19rem", left: "12rem"}}>
                <Card 
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    Detail = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, libero!'}
                    />
                </motion.div>
                <div className="blur s-bulur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    );
};

export default Services;