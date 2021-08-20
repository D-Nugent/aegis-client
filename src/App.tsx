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
import Header from './components/Header/Header';
import HomePage from './pages/homeu/Home';
import AboutPage from './pages/aboutu/About.js';
import ContactPage from './pages/contactu/Contact.js';
import DashboardPage from './pages/dashboardu/Dashboard.js';
import LoginRegisterPage from './pages/LoginRegister/LoginRegister.jsx';
import PatronPortalPage from './pages/PatronPortal/PatronPortal.jsx';

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