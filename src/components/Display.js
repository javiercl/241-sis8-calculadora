import {useContext} from 'react';
import './Display.css';
import { UserContext } from '../App';

const Display = () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <div className="value">{value}</div>
    );
}

export default Display;