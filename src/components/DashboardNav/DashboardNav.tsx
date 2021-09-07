import { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import SVGAddItem from '../../assets/icons/SVGAddItem';
import SVGAddTemplate from '../../assets/icons/SVGAddTemplate';
import SVGBatch from '../../assets/icons/SVGBatch';
import SVGCompare from '../../assets/icons/SVGCompare';
import SVGExpand from '../../assets/icons/SVGExpand';
import SVGHelp from '../../assets/icons/SVGHelp';
import SVGItemMatches from '../../assets/icons/SVGItemMatches';
import SVGLogoInverse from '../../assets/icons/SVGLogoInverse';
import SVGMessages from '../../assets/icons/SVGMessages';
import SVGProfile from '../../assets/icons/SVGProfile';
import SVGQuickAdd from '../../assets/icons/SVGQuickAdd';
import SVGRecent from '../../assets/icons/SVGRecent';
import SVGReports from '../../assets/icons/SVGReports';
import SVGSearchFound from '../../assets/icons/SVGSearchFound';
import SVGSearchLost from '../../assets/icons/SVGSearchLost';
import SVGSettings from '../../assets/icons/SVGSettings';
import { customerFaqURL, editProfileURL, foundItemURL, profileURL, reportsURL, searchItemsURL } from '../../utilities/routerConfig';
import './DashboardNav.scss';

function DashboardNav() {
  const [pageOptionsVisible, setPageOptionsVisible] = useState(false)


  function togglePageOptionsVisibility(){
    setPageOptionsVisible(!pageOptionsVisible);
  }
  
  return (
    <aside className="side-nav">
      <nav className="dashboard-nav">
        <ul>
          <li>
            <NavLink to={reportsURL}>
              <SVGLogoInverse/>
            </NavLink>
          </li>
          <li className="dashboard-nav__list --add-item">
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
        </ul>
        <ul>
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
      <div className={`${pageOptionsVisible?'page-options --active':'page-options'}`}>
        <section className={`${pageOptionsVisible?'page-options__wrapper --active':'page-options__wrapper'}`}>
          <div className="page-options__header">
            <h2 className="page-options__header-title">
              Add Item
            </h2>
            <div className="page-options__header-logo">
              <SVGAddItem/>
            </div>
          </div>
          <ul className="page-options__links">
            <li>
              <NavLink to='/dashboard' className="page-options__link" activeClassName="page-options__link --active">
                Add Lost Item Query
              </NavLink>
            </li>
            <li>
              <NavLink to='placeholder' className="page-options__link" activeClassName="page-options__link --active">
                Add Found Item Query
              </NavLink>
            </li>
          </ul>
          <div className="page-options__section">
            <h3 className="page-options__section-title">
              <SVGQuickAdd/>
              Quick Add Templates
              <SVGAddTemplate/>
            </h3>
          </div>
          <div className="page-options__section">
            <h3 className="page-options__section-title">
              <SVGBatch/>
              Batch Actions
            </h3>
          </div>
          <div className="page-options__section">
            <h3 className="page-options__section-title">
              <SVGRecent/>
              Recently Added
            </h3>
          </div>
        </section>
        <div className={`${pageOptionsVisible?'page-options__expand':'page-options__expand --active'}`} onClick={togglePageOptionsVisibility}>
          <SVGExpand/>
        </div>
      </div>
    </aside>
  );
}

export default DashboardNav;