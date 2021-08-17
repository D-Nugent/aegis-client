import './Header.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { aboutURL, loginRegisterURL, faqURL } from '../../utilities/routerConfig';
import AegisLogo from '../../assets/logo/aegis-logo.svg';
import HamburgerIcon from '../../assets/icons/hamburger-menu.svg';

function Header() {
    
    const [ showMenu, setShowMenu ] = useState(true);

    const handleLoginMob = () => console.log("Logged In");

    const handleLogin = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log({ username, password });
    };

    const handleShowModel = () => setShowMenu(!showMenu);

    return (
        <div>
            <div className="header__spacer"></div>
            <header className="header">
                <div className="header__column">
                    <img className="header__logo" src={AegisLogo} alt="logo" />
                    <nav className="header__nav">
                        <ul className="header__items">
                            <li className="header__item">
                                <NavLink className="header__link" to={aboutURL}>About
                                </NavLink>
                            </li>
                            <li className="header__item">
                                <NavLink className="header__link" to={faqURL}>FAQ's
                                </NavLink>
                            </li>
                            <li className="header__item">
                                <NavLink className="header__link" to={loginRegisterURL}>Register
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__column">
                    <form className="header__login-form" onSubmit={handleLogin}>
                        <label htmlFor="username">
                            <input className="header__input" type="text" name="username" placeholder="username..." />
                        </label>
                        <label htmlFor="password">
                            <input className="header__input" type="text" name="password" placeholder="username..." />
                        </label>
                        <button className="button-primary header__button" type="submit" >Login</button>
                    </form>
                    <button className="button-primary header__button header__button--mob" type="button" onClick={handleLoginMob}>Login</button>
                    <div className="header__hamburger-container" onClick={handleShowModel}>
                        <img src={HamburgerIcon} alt="hamburger menu" />
                    </div>
                </div>            
            </header>
        </div>
        
    );
}

export default Header;