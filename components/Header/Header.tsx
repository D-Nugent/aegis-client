import React, { useState } from 'react';
import AegisLogo from '/public/assets/logo/aegis-logo.svg';
import HeaderNav from './HeaderNav/HeaderNav';
import HamburgerIcon from '/public/assets/icons/hamburger-menu.svg';
import Link from 'next/link';
import { ROUTE } from '../../types/routes';
import styles from './Header.module.scss';
import Image from 'next/image';

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
            <div className={styles["header__spacer"]}></div>
            <header className={styles["header"]}>
                <div className={styles["header__column"]}>
                    <Link href={ROUTE.HOME}>
                        <a>
                            <Image className={styles["header__logo"]} src={AegisLogo} alt="logo" />
                        </a>
                    </Link>
                    <HeaderNav />
                </div>
                <div className={styles["header__column"]}>
                    {!user && 
                        <form className={styles["header__login-form"]} onSubmit={e => handleLogin(e)}>
                            <label htmlFor="username">
                                <input className={styles["header__input"]} type="text" name="username" value={loginData.username} placeholder="Username" onChange={handleChange} />
                            </label>
                            <label htmlFor="password">
                                <input className={styles["header__input"]} type="text" name="password" value={loginData.password} placeholder="Password" onChange={handleChange} />
                            </label>
                            <button className={`button--primary ${styles['header__button']}`} type="submit" >Login</button>
                        </form>
                    }
                    {!user &&
                        <button className={`button--primary ${styles["header__button"]} ${styles["header__button--mob"]}`} type="button" onClick={handleLoginMob}>Login</button>
                    }
                    <div className={styles["header__hamburger-container"]} onClick={handleShowModal}>
                        <img src={HamburgerIcon} alt="hamburger menu" />
                    </div>
                </div>            
            </header>
        </div>
        
    );
}

export default Header;