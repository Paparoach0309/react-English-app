import React from 'react';
import logo from '../../img/logo.svg';

const LogoContainer = (props) => {
    return (
        <div className="logo-container">
            <img src ={logo} alt='#'/>
            <span className="level-title">LEVEL {props.level}</span>
        </div>
    )
}

export default LogoContainer;