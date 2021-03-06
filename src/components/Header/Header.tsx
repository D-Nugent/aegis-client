import './Header.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AegisLogo from '../../assets/logo/aegis-logo.svg';
import HeaderNav from '../HeaderNav/HeaderNav';
import HamburgerIcon from '../../assets/icons/hamburger-menu.svg';
import { routes } from '../../utilities/routerConfig';
const {landingURLs} = routes;

function Header() {
    
    // TEMP STATE - to be deleted
    const [ user, setUser ] = useState(false);
    // 

    const [ showMenu, setShowMenu ] = useState(true);
    const [ loginData, setLoginData ] = useState({ username : "", password : ""});

    const handleLoginMob = (): void => {
        // TEMP
        setUser(true);
        // 
    };

    const handleLogin = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        const { username, password } = loginData;
        if (!loginData.username || !loginData.password) return console.log("insufficient login data supplied");

        console.log(username, password);

        // Temp
        setUser(true);
        // 
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        });
    };

    const handleShowModal = (): void => setShowMenu(!showMenu);

    return (
        <div>
            <div className="header__spacer"></div>
            <header className="header">
                <div className="header__column">
                    <Link to={landingURLs.main}>
                        <img className="header__logo" src={AegisLogo} alt="logo" />
                    </Link>
                    <HeaderNav />
                </div>
                <div className="header__column">
                    {!user && 
                        <form className="header__login-form" onSubmit={e => handleLogin(e)}>
                            <label htmlFor="username">
                                <input className="header__input" type="text" name="username" value={loginData.username} placeholder="Username" onChange={handleChange} />
                            </label>
                            <label htmlFor="password">
                                <input className="header__input" type="text" name="password" value={loginData.password} placeholder="Password" onChange={handleChange} />
                            </label>
                            <button className="button--primary header__button" type="submit" >Login</button>
                        </form>
                    }
                    {!user &&
                        <button className="button--primary header__button header__button--mob" type="button" onClick={handleLoginMob}>Login</button>
                    }
                    <div className="header__hamburger-container" onClick={handleShowModal}>
                        <img src={HamburgerIcon} alt="hamburger menu" />
                    </div>
                </div>            
            </header>
        </div>
        
    );
}

export default Header;