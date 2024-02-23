import React,{useContext} from 'react';
import './Button.css';
import { UserContext } from '../App';

export const ButtonEq = ({data}) => {
    const { value, setValue } = useContext(UserContext);

    function handleOnClick() {
      setValue(eval(value))
    }
    return (
        <span className="equal" onClick={handleOnClick}><i>{data.char}</i></span>
    );
}

export const ButtonCe = ({data}) => {
    const { setValue } = useContext(UserContext);

    function handleOnClick() {
      setValue('0')
    }
  
    return (
        <span className="clear" onClick={handleOnClick}><i>{data.char}</i></span>
    );
}

const Button = ({data}) => {
    const {value, setValue } = useContext(UserContext);
    let clas = 'num';

    const handleOnClick = () => {
        if (value === '0') {
            setValue(data.char)
        } else {
            setValue(value + data.char)
        }
    };

    if (data.char === '+'){
        clas += ' plus'
    };

    return (
        <span className={clas} onClick={handleOnClick}><i>{data.char}</i></span>
    );
}


export default Button;