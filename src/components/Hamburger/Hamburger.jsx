import './Hamburger.scss';
import React, { useState } from 'react';
import HamburgerIcon from '../../assets/icons/hamburger-menu.svg';


function Hamburger() {

    const [ menuVisible, setMenuVisible ] = useState(false);

    console.log(menuVisible);

    return (
        <div onClick={() => setMenuVisible(true)}>
            <img src={HamburgerIcon} alt="menu" />

        </div>
    );
}

export default Hamburger;