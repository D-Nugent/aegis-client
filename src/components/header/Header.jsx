import './Header.scss';
import React, { useState } from 'react';
import AegisLogo from '../../assets/logo/aegis-logo.svg';
import HamburgerIcon from '../../assets/icons/hamburger-menu.svg';

function Header() {
    
    const [ showMenu, setShowMenu ] = useState(true);

    const handleLogin = () => {};

    const handleShowModel = () => setShowMenu(!showMenu);

    return (
        <div>
            <div className="header__spacer"></div>
            <header className="header">
                <div className="header__column">
                    <img className="header__logo" src={AegisLogo} alt="logo" />
                    {/* navbar hidden at mobile */}
                </div>
                <div className="header__column">
                    <button className="button-primary header__button" type="button" onClick={handleLogin}>Login</button>
                    <div className="header__hamburger-container" onClick={handleShowModel}>
                        <img src={HamburgerIcon} alt="hamburger menu" />
                    </div>
                </div>            
            </header>
        </div>
        
    );
}

export default Header;