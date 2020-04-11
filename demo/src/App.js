import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
// import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
// import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
// import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'
// import '../node_modules/@coreui/styles/scss/_dropdown-menu-right.scss';

// Containers
import Full from './containers/DefaultLayout/DefaultLayout.js';
import Contact from './views/Dashboard/Contact.js';
import Forum from './views/Dashboard/Forum.js';
import About from './views/Dashboard/About.js';
import Dashboard from './views/Dashboard/Dashboard';

// import { renderRoutes } from 'react-router-config';

//think this is gonna fix routing error? yess😁
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={Full} />
          <Route path="/contact" name="Contact" component={Contact} />
          <Route path="/forum" name="Forum" component={Forum} />
          <Route path="/about" name="About" component={About} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
