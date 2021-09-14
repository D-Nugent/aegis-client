import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {routes} from './utilities/routerConfig';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import DashboardPage from './pages/Dashboard/Dashboard';
import LoginRegisterPage from './pages/LoginRegister/LoginRegister';
// import ContactPage from './pages/Contact/Contact';
// import PatronPortalPage from './pages/PatronPortal/PatronPortal';
const {landingURLs,dashboardURLs} = routes;

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={landingURLs.main} component={HomePage} />
          <Route path={landingURLs.about} component={AboutPage} />
          <Route path={dashboardURLs.main} component={DashboardPage} />
          <Route path={landingURLs.loginRegister} component={LoginRegisterPage}/>          
          {/* <Route path={contactUsURL} component={ContactPage} /> */}
          {/* <Route path={patronPortalURL} component={PatronPortalPage} /> */}
        </Switch>

      </BrowserRouter>
    </div>
  );

}

export default App;