import { Switch, Route, NavLink } from 'react-router-dom';
import { customerFaqURL, editProfileURL, foundItemURL, profileURL, reportsURL, searchItemsURL } from '../../utilities/routerConfig';
import './DashboardNav.scss';

function DashboardNav() {
  return (
    <aside className="side-menu">
      <nav className="side-menu__navigation">
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
        </Switch>
      </nav>
      <div className="side-menu__page-options">
        
      </div>
    </aside>
  );
}

export default DashboardNav;