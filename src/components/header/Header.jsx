import './Header.scss';
import React, { useState } from 'react';
import Logo from '../HeaderLogo/HeaderLogo';
import HeaderLoginMobile from '../HeaderLoginMobile/HeaderLoginMobile';

function Header() {

    // temp
    const [ user, setUser ] = useState(false);
    // 

    return (
        <>
            <div className="header__spacer"></div>
            <header className="header">
                <Logo />
                {/* Nav Bar */}
                { user ? 
                    <p>Logged In</p> : 
                    <HeaderLoginMobile setUser={setUser} />
                }
                {/* Hamburger Menu */}
            </header>
        </>
    );
}

// function Header() {
//     return (
//         <header>
//             <nav>
//                 <ul style={{display: 'flex', listStyle: "none"}}>
//                     <li style={{padding: "1rem"}}>
//                         <NavLink to={homeURL}>Home</NavLink>
//                     </li>
//                     <li style={{padding: "1rem"}}>
//                         <NavLink to={aboutURL}>About</NavLink>
//                     </li>
//                     <li style={{padding: "1rem"}}>
//                         <NavLink to={contactUsURL}>Contact Us</NavLink>
//                     </li>
//                     <li style={{padding: "1rem"}}>
//                         <NavLink to={dashboardURL}>Dashboard</NavLink>
//                     </li>
//                     <li style={{padding: "1rem"}}>
//                         <NavLink to={loginRegisterURL}>Log in or Register</NavLink>
//                     </li>
//                     <li style={{padding: "1rem"}}>
//                         <NavLink to={patronPortalURL}>Patron Portal</NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

export default Header;