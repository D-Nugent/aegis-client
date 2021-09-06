import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { routes } from '../../utilities/routerConfig';
const { dashboardURLs } = routes;

function DashboardNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={dashboardURLs.addItem.main}>Add Item</NavLink>
                </li>
                <li>
                    <NavLink to={dashboardURLs.searchItems.main}>Search Items</NavLink>
                </li>
                <li>
                    <NavLink to={dashboardURLs.compare}>Compare</NavLink>
                </li>
                <li>
                    <NavLink to={dashboardURLs.itemMatches}>Item Matches</NavLink>
                </li>
                <li>
                    <NavLink to={dashboardURLs.reports}>Reports</NavLink>
                </li>
                <li>
                    <NavLink to={dashboardURLs.settings}>Settings</NavLink>
                </li>
                <li>
                    <NavLink to={dashboardURLs.messages}>Messsages</NavLink>
                </li>
                <li>
                    <NavLink to={dashboardURLs.profile.main}>Profile</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path={dashboardURLs.addItem.main} component={undefined} />
            </Switch>

        </nav>
    );
}

export default DashboardNav;