import React from 'react';
import { NavLink } from 'react-router-dom';
import { customerFaqURL, editProfileURL, foundItemURL, profileURL, reportsURL, searchItemsURL } from '../../utilities/routerConfig';

function DashboardNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={reportsURL}>Reports</NavLink>
                </li>
                <li>
                    <NavLink to={foundItemURL}>Found Item</NavLink>
                </li>
                <li>
                    <NavLink to={searchItemsURL}>Search Items</NavLink>
                </li>
                <li>
                    <NavLink to={profileURL}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={editProfileURL}>Edit Profile</NavLink>
                </li>
                <li>
                    <NavLink to={customerFaqURL}>FAQs</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default DashboardNav;