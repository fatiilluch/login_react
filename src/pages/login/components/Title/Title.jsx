import React from 'react';
import './Title.css';

const Title = ({ text }) => {       // cuando hago ({ text }) estoy desestructurando el objeto con los atributos de props
    return (
        <div className="title-container">
            <label className="title-label">
                {text}
            </label>
        </div>
    )
};

export default Title;