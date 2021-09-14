import './HeaderNav.scss';
import { NavLink } from 'react-router-dom';
import {routes} from '../../utilities/routerConfig';
const {landingURLs} = routes;

function HeaderNav() {
    return (
        <nav className="header-nav">
            <ul className="header-nav__items">
                <li className="header-nav__item">
                    <NavLink className="header-nav__link" activeClassName={undefined} to={landingURLs.about}>About
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink className="header-nav__link" activeClassName={undefined} to={landingURLs.faqs.client}>FAQ's
                    </NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink className="header-nav__link" activeClassName={undefined} to={landingURLs.loginRegister}>Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;