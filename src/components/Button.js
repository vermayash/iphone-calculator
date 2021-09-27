import React from "react"; 

import './Button.css';

const Button = ({onButtonClick, content, type}) => {
    return (
        <div 
            className={`button ${content === '0' ? 'zero' : ""} ${type || ""}`}
            onClick = {onButtonClick(content)}
            >
            {content}
        </div>
    );
};

export default Button;