import { Switch, Route, NavLink } from 'react-router-dom';
import SVGAddItem from '../../assets/icons/SVGAddItem';
import SVGCompare from '../../assets/icons/SVGCompare';
import SVGHelp from '../../assets/icons/SVGHelp';
import SVGItemMatches from '../../assets/icons/SVGItemMatches';
import SVGLogoInverse from '../../assets/icons/SVGLogoInverse';
import SVGMessages from '../../assets/icons/SVGMessages';
import SVGProfile from '../../assets/icons/SVGProfile';
import SVGReports from '../../assets/icons/SVGReports';
import SVGSearchFound from '../../assets/icons/SVGSearchFound';
import SVGSearchLost from '../../assets/icons/SVGSearchLost';
import SVGSettings from '../../assets/icons/SVGSettings';
import { customerFaqURL, editProfileURL, foundItemURL, profileURL, reportsURL, searchItemsURL } from '../../utilities/routerConfig';
import './DashboardNav.scss';

function DashboardNav() {
  return (
    <aside className="dashboard-nav">
      <nav className="dashboard-nav__navigation">
        <ul>
          <li>
            <NavLink to={reportsURL}>
              <SVGLogoInverse/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={foundItemURL}>
              <SVGAddItem/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={searchItemsURL}>
              <SVGSearchLost/>
            </ NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={profileURL}>
              <SVGSearchFound/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={editProfileURL}>
              <SVGCompare/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={customerFaqURL}>
              <SVGItemMatches/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={customerFaqURL}>
              <SVGReports/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={customerFaqURL}>
              <SVGHelp/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={customerFaqURL}>
              <SVGSettings/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={customerFaqURL}>
              <SVGMessages/>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard-nav__link" activeClassName="dashboard-nav__link --active" to={customerFaqURL}>
              <SVGProfile/>
            </NavLink>
          </li>
        </ul>
        <Switch>
            <Route path={reportsURL} component={undefined} />
        </Switch>
      </nav>
      <div className="dashboard-nav__page-options">
        
      </div>
    </aside>
  );
}

export default DashboardNav;