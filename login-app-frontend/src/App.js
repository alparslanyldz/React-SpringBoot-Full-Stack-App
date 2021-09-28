import logo from './logo.svg';
import './App.css';
import ListTicketComponent from './components/ListTicketComponent';
import CreateTicketComponent from './components/CreateTicketComponent';

import ViewTicketComponent from './components/ViewTicketComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';
import UpdateTicketComponent from './components/UpdateTicketComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Switch>
          <Route path="/" exact component={LoginComponent}></Route>
          <Route path="/tickets" component={ListTicketComponent}></Route>
          <Route path="/add-ticket/:id" component={CreateTicketComponent}></Route>
          <Route path="/view-ticket/:id" component={ViewTicketComponent}></Route>
          {/*<Route path="/update-ticket/:id" component={UpdateTicketComponent}></Route>*/}
        </Switch>
      </div>
      <br />
      <FooterComponent />
    </Router>
  );
}

export default App;
