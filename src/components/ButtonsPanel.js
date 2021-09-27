import React from "react";
import Button from "./Button";

import './ButtonsPanel.css';

const ButtonsPanel = ({onButtonClick, setDisplayValue}) => {

    return (
        <div className="panel">
            <Button onButtonClick={onButtonClick} content="AC" type="function" />
            <Button onButtonClick={onButtonClick} content="±" type="function" />
            <Button onButtonClick={onButtonClick} content="%" type="function" />
            <Button onButtonClick={onButtonClick}content="÷" type="operator" />

            <Button onButtonClick={onButtonClick} content="7" />
            <Button onButtonClick={onButtonClick} content="8" />
            <Button onButtonClick={onButtonClick} content="9" />
            <Button onButtonClick={onButtonClick} content="×" type="operator" />

            <Button onButtonClick={onButtonClick} content="4" />
            <Button onButtonClick={onButtonClick} content="5" />
            <Button onButtonClick={onButtonClick} content="6" />
            <Button onButtonClick={onButtonClick} content="-" type="operator" />

            <Button onButtonClick={onButtonClick} content="1" />
            <Button onButtonClick={onButtonClick} content="2" />
            <Button onButtonClick={onButtonClick} content="3" />
            <Button onButtonClick={onButtonClick} content="+" type="operator" />

            <Button onButtonClick={onButtonClick} content="0" />
            <Button onButtonClick={onButtonClick} content="." />
            <Button onButtonClick={onButtonClick} content="=" type="operator" />
        </div>
    );
};

export default ButtonsPanel;