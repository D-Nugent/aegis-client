import Link from 'next/link';
import { ROUTE } from '../../../types/routes';
import styles from './HeaderNav.module.scss';

function HeaderNav() {
    return (
        <nav className={styles["header-nav"]}>
            <ul className={styles["header-nav__items"]}>
                <li className={styles["header-nav__item"]}>
                    <Link href={ROUTE.ABOUT}>
                        <a className={styles["header-nav__link"]}>About</a>
                    </Link>
                </li>
                <li className={styles["header-nav__item"]}>
                    <Link href={ROUTE.FAQS}>
                        <a className={styles["header-nav__link"]}>FAQ's</a>
                    </Link>
                </li>
                <li className={styles["header-nav__item"]}>
                    <Link href={ROUTE.LOGINREGISTER}>
                        <a className={styles["header-nav__link"]}>Register</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;