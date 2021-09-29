import React, {useState} from 'react';

import './App.css';
import ButtonsPanel from './ButtonsPanel';
import Display from './Display';

const App = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operation, setOperation] = useState('');
    const [buffer, setBuffer] = useState(null);

    const checkOperation = () => {
        switch(operation) {
            case 'add': setBuffer((buffer + parseFloat(displayValue)));
                        setDisplayValue('0');
                        return;

            case 'sub': setBuffer((buffer - parseFloat(displayValue)));
                        setDisplayValue('0');
                        return;

            case 'mul': setBuffer((buffer * parseFloat(displayValue)));
                        setDisplayValue('0');
                        return;

            case 'div': setBuffer((buffer / parseFloat(displayValue)));
                        setDisplayValue('0');
                        return;
            
            default: return;
        }
    };

    const onButtonClick = content => () => {

        if(content === 'AC') {
            setDisplayValue('0');
            setOperation('');
            setBuffer(null);
            return;
        }

        const num = parseFloat(displayValue);

        if(content === "+") {
            if(operation === ''){
                setBuffer(num);
                setDisplayValue('0');
            } else {
                checkOperation();
            }
            setOperation('add');
            return;
        }

        if(content === "-") {
            if(operation === ''){
                setBuffer(num);
                setDisplayValue('0');
            } else {
                checkOperation();
            }
            setOperation('sub');
            return;
        }

        if(content === "×") {
            if(operation === ''){
                setBuffer(num);
                setDisplayValue('0');
            } else {
                checkOperation();
            }
            setOperation('mul');
            return;
        }

        if(content === "÷") {
            if(operation === ''){
                setBuffer(num);
                setDisplayValue('0');
            } else {
                checkOperation();
            }
            setOperation('div');
            return;
        }

        if(content === '.') {
            if(displayValue.includes('.'))
                return;
            
            setDisplayValue(displayValue + '.');
            return;
        }

        if(content === '±') {
            if(displayValue !== '0'){
                setDisplayValue(displayValue * (-1));
            }
            return;
        }

        if(content === '%') {
            if(displayValue !== '0'){
                setDisplayValue(displayValue / 100);
            }
            return;
        }
        

        if(content === "=") {
            if(operation === '')
                return;

            switch (operation) {
                case 'add': setDisplayValue((buffer + num).toString());
                            setOperation('');
                            setBuffer(null);
                            return;
            
                case 'sub': setDisplayValue((buffer - num).toString());
                            setOperation('');
                            setBuffer(null);
                            return;

                case 'mul': setDisplayValue((buffer * num).toString());
                            setOperation('');
                            setBuffer(null);
                            return;

                case 'div': setDisplayValue((buffer / num).toString());
                            setOperation('');
                            setBuffer(null);
                            return;

                default: return;
            }
        }

        if(displayValue[displayValue.length - 1] === '.'){
            setDisplayValue(displayValue + content);
        } else {
            setDisplayValue(parseFloat(num + content).toString());
        }
    };

    return (
        <div className="app">
            <Display valueOnDisplay = {displayValue} />
            <ButtonsPanel onButtonClick={onButtonClick} setDisplayValue = {setDisplayValue} />
        </div>
    );
};

export default App;