import { useState } from 'react';
import { ROUTE } from '../../../types/routes';
import NavLink from '../../motifFramework/navigation/NavLink/NavLink';
import styles from './HeaderNav.module.scss';

function HeaderNav() {
    const [activeMenuWidth, setActiveMenuWidth] = useState(0);
    const [activeMenuPosition, setActiveMenuPosition] = useState(0);

    const handleMouseEnter = (event: { currentTarget: any; }) => {
        const { offsetWidth, offsetLeft } = event.currentTarget;
        setActiveMenuWidth(offsetWidth);
        setActiveMenuPosition(offsetLeft-88);
    }

    const handleMouseLeave = () => {
        setActiveMenuWidth(0);
        setActiveMenuPosition(0);
    }

    return (
        <nav className={styles["header-nav"]} onMouseLeave={handleMouseLeave}>
            <ul className={styles["header-nav__items"]}>
                <li onMouseEnter={handleMouseEnter}>
                    <NavLink href={ROUTE.ABOUT}>
                        About
                    </NavLink>
                </li>
                <li onMouseEnter={handleMouseEnter}>
                    <NavLink href={ROUTE.FAQS}>
                        FAQ's
                    </NavLink>
                </li>
                <li onMouseEnter={handleMouseEnter}>
                    <NavLink href={ROUTE.LOGINREGISTER}>
                        Register
                    </NavLink>
                </li>
            </ul>
            <div 
                className={styles["active-menu"]} 
                style={{width:`${activeMenuWidth}px`, left: `${activeMenuPosition}px`}}>
            </div>
        </nav>
    );
}

export default HeaderNav;