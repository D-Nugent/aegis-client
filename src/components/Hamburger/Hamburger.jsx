import './Hamburger.scss';
import React, { useState } from 'react';
import HamburgerIcon from '../../assets/icons/hamburger-menu.svg';


function Hamburger() {
    const [ menuVisible, setMenuVisible ] = useState(false);

    return (
        <div className="hamburger">
            <img src={HamburgerIcon} alt="menu" onClick={() => setMenuVisible(true)}/>
            {menuVisible &&
            <aside className="hamburger-menu">
                <header className="hamburger-menu__header">
                    <img className="icon" src={null} alt="close menu" onClick={() => setMenuVisible(false)}/>
                </header>
                <nav>
                    <ul>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </nav>
            </aside>
            }
        </div>
    );
}

export default Hamburger;