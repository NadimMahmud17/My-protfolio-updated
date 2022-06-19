import React from 'react';
import './Card.css';

const Card = ({emoji, heading, Detail}) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{Detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    );
};

export default Card;