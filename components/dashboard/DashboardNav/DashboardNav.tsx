import React from 'react';
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

            <Switch>
                <Route path={reportsURL} component={undefined} />
                <Route path={foundItemURL} component={undefined} />
                <Route path={searchItemsURL} component={undefined} />
                <Route path={profileURL} component={undefined} />
                <Route path={editProfileURL} component={undefined} />
                <Route path={customerFaqURL} component={undefined} />
            </Switch>

        </nav>
    );
}

export default DashboardNav;