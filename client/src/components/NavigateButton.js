import React from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/base.css';

const NavigateButton = ({buttonName, url, extraOnClick, color}) => {
    const history = useHistory();

    return (
        <div>
            <button className={`btn btn-${color?color:"light"}`} onClick={() => {
                history.push(url);
                if(extraOnClick){
                    extraOnClick();
                }
            }}>
                {buttonName}
            </button>
        </div>
    )
}

export default NavigateButton