import React from 'react';

import LogoContainer from './LogoContainer';
import {NavLink} from 'react-router-dom';

const Nav = ( {level} ) => {
    return (
        <nav className = "nav">
            <NavLink to='/home'>
                <LogoContainer level={level}/>
            </NavLink>
            <ul className="nav-container">
                <NavLink to ='/library'>Library</NavLink>
                <NavLink to='/training'>Training</NavLink>
                <NavLink to='/learn'>Learn</NavLink>
            </ul>
        </nav>
    )
}

export default Nav;