import React from 'react';
import './Intro.css';

import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linedin from '../../img/linkedin.png';

import Vectorl  from '../../img/Vector1.png';
import Vector2  from '../../img/Vector2.png';
import boy1 from '../../img/boy1.png';

import glassesImg from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import FloatingButtom from '../FloatingDiv/FloatingButtom';

import { motion } from "framer-motion";

const Intro = () => {
    
    const transition = {duratoon: 3, type: 'spring'}

    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Nadim Mahmud</span>
                    <span>
                        Frontend Developer With high level of experience in web designing and development, producting the Quality work
                    </span>
                </div>
                <button className='button i-button'>Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            
            <div className="i-right">
                
                <img src={Vectorl} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy1} alt="" />
                <motion.img 
                initial={{left: "-36%"}}
                whileInView={{left: "-24%"}}
                transition={transition}
                src={glassesImg} alt="" />

                <motion.div
                initial={{top: "-4%", left: "74%"}}
                whileInView={{left: "68%"}}
                transition={transition}
                className="floatingdiv"
                style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv></FloatingDiv>
                </motion.div>

                <motion.div
                initial={{ left: "9rem", top: "18rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className="FlatingButtom"
                style={{top: '18rem',left: '0rem'}}>
                    <FloatingButtom></FloatingButtom>
                </motion.div>
    {/* blur div  */}
                    <div className="blur" style={{background:'rgb (238 210 255'}}></div>

                    <div className="blur"style={{background:'#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                    }}></div>
            </div>
        </div>
    );
};

export default Intro;