import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { 
  homeURL,
  aboutURL,
  contactUsURL,
  dashboardURL,
  loginRegisterURL,
  patronPortalURL   
} from './utilities/routerConfig';
import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import ContactPage from './pages/contact/Contact';
import DashboardPage from './pages/dashboard/Dashboard';
import LoginRegisterPage from './pages/login-register/LoginRegister';
import PatronPortalPage from './pages/patron-portal/PatronPortal';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>AEGIS</h1>

        <Switch>
          <Route exact path={homeURL} component={HomePage} />
          <Route exact path={aboutURL} component={AboutPage} />
          <Route exact path={contactUsURL} component={ContactPage} />
          <Route exact path={dashboardURL} component={DashboardPage} />
          <Route exact path={loginRegisterURL} component={LoginRegisterPage}/>          
          <Route exact path={patronPortalURL} component={PatronPortalPage} />
        </Switch>

      </BrowserRouter>
    </div>
  );

}

export default App;