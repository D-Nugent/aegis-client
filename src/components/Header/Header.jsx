import { NavLink } from 'react-router-dom';
import { aboutURL, contactUsURL, dashboardURL, homeURL, loginRegisterURL, patronPortalURL } from '../../utilities/routerConfig';

function Header() {
    return (
        <header>
            <nav>
                <ul style={{display: 'flex', listStyle: "none"}}>
                    <li style={{padding: "1rem"}}>
                        <NavLink to={homeURL}>Home</NavLink>
                    </li>
                    <li style={{padding: "1rem"}}>
                        <NavLink to={aboutURL}>About</NavLink>
                    </li>
                    <li style={{padding: "1rem"}}>
                        <NavLink to={contactUsURL}>Contact Us</NavLink>
                    </li>
                    <li style={{padding: "1rem"}}>
                        <NavLink to={dashboardURL}>Dashboard</NavLink>
                    </li>
                    <li style={{padding: "1rem"}}>
                        <NavLink to={loginRegisterURL}>Log in or Register</NavLink>
                    </li>
                    <li style={{padding: "1rem"}}>
                        <NavLink to={patronPortalURL}>Patron Portal</NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;