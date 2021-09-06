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
    <aside className="side-menu">
      <nav className="side-menu__navigation">
        <ul>
          <li>
            <NavLink to={reportsURL}>
              <SVGLogoInverse/>
            </NavLink>
          </li>
          <li>
            <NavLink to={foundItemURL}>
              <SVGAddItem/>
            </NavLink>
          </li>
          <li>
            <NavLink to={searchItemsURL}>
              <SVGSearchLost/>
            </ NavLink>
          </li>
          <li>
            <NavLink to={profileURL}>
              <SVGSearchFound/>
            </NavLink>
          </li>
          <li>
            <NavLink to={editProfileURL}>
              <SVGCompare/>
            </NavLink>
          </li>
          <li>
            <NavLink to={customerFaqURL}>
              <SVGItemMatches/>
            </NavLink>
          </li>
          <li>
            <NavLink to={customerFaqURL}>
              <SVGReports/>
            </NavLink>
          </li>
          <li>
            <NavLink to={customerFaqURL}>
              <SVGHelp/>
            </NavLink>
          </li>
          <li>
            <NavLink to={customerFaqURL}>
              <SVGSettings/>
            </NavLink>
          </li>
          <li>
            <NavLink to={customerFaqURL}>
              <SVGMessages/>
            </NavLink>
          </li>
          <li>
            <NavLink to={customerFaqURL}>
              <SVGProfile/>
            </NavLink>
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