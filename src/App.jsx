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
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About.jsx';
import ContactPage from './pages/Contact/Contact.jsx';
import DashboardPage from './pages/Dashboard/Dashboard.jsx';
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