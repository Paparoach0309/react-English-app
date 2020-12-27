import React from 'react';
// import imgMode1 from './../img/screenMode1.png';
import {NavLink} from 'react-router-dom';

export default (props) => {
    const modeClassName = 'mode-container ' + props.modeClassName;
    return(
        <NavLink to={`/training/${props.path}`}>
            <div className={modeClassName}>
                <div>
                    <h2 className='mode-title'>{props.modeTitle}</h2>
                    <p className='mode-description'>{props.modeDescription}</p>
                </div>
                <div>
                    <img src={props.imgMode} alt='#'/>
                </div>
            </div>
        </NavLink>
    );
};