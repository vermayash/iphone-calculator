import React from "react";

import './Display.css';

const Display = ({valueOnDisplay}) => {
    return (
        <div className="display">
            {valueOnDisplay}
        </div>
    );
};

export default Display;