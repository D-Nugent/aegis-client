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
import Header from './components/header/Header';
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
        <Header />
        <h1>AEGIS</h1>

        <Switch>
          <Route exact path={homeURL} component={HomePage} />
          <Route path={aboutURL} component={AboutPage} />
          <Route path={contactUsURL} component={ContactPage} />
          <Route path={dashboardURL} component={DashboardPage} />
          <Route path={loginRegisterURL} component={LoginRegisterPage}/>          
          <Route path={patronPortalURL} component={PatronPortalPage} />
        </Switch>

      </BrowserRouter>
    </div>
  );

}

export default App;