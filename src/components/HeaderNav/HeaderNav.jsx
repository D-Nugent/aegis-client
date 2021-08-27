import './HeaderNav.scss';
import { NavLink } from 'react-router-dom';
import { aboutURL, loginRegisterURL, faqURL } from '../../utilities/routerConfig';

function HeaderNav() {
    return (
        <nav className="header-nav">
            <ul className="header-nav__items">
                <li className="header-nav__item">
                    <NavLink className="header-nav__link" activeClassName={null} to={aboutURL}>About
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink className="header-nav__link" activeClassName={null} to={faqURL}>FAQ's
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink className="header-nav__link" activeClassName={null} to={loginRegisterURL}>Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;