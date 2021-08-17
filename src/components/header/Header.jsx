import './Header.scss';
import React, { useState } from 'react';
import AegisLogo from '../../assets/logo/aegis-logo.svg';
import HeaderNav from '../HeaderNav/HeaderNav';
import HamburgerIcon from '../../assets/icons/hamburger-menu.svg';

function Header() {
    
    // TEMP STATE - to be deleted
    const [ user, setUser ] = useState(false);
    // 

    const [ showMenu, setShowMenu ] = useState(true);

    const handleLoginMob = () => console.log("Logged In");

    const handleLogin = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log({ username, password });

        // Temp
        setUser(true);
        // 
    };

    const handleShowModel = () => setShowMenu(!showMenu);

    return (
        <div>
            <div className="header__spacer"></div>
            <header className="header">
                <div className="header__column">
                    <img className="header__logo" src={AegisLogo} alt="logo" />
                    <HeaderNav />
                </div>
                <div className="header__column">
                    {!user && 
                        <form className="header__login-form" onSubmit={handleLogin}>
                            <label htmlFor="username">
                                <input className="header__input" type="text" name="username" placeholder="username..." />
                            </label>
                            <label htmlFor="password">
                                <input className="header__input" type="text" name="password" placeholder="password..." />
                            </label>
                            <button className="button-primary header__button" type="submit" >Login</button>
                        </form>
                    }
                    <button className="button-primary header__button header__button--mob" type="button" onClick={handleLoginMob}>Login</button>
                    <div className="header__hamburger-container" onClick={handleShowModel}>
                        {!user &&
                            <img src={HamburgerIcon} alt="hamburger menu" />
                        }
                    </div>
                </div>            
            </header>
        </div>
        
    );
}

export default Header;