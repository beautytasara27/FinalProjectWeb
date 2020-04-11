import Contact from './views/Dashboard/Contact.js';
import Forum from './views/Dashboard/Forum.js';
import About from './views/Dashboard/About.js';
import Full from './containers/DefaultLayout/DefaultLayout.js';
import { Breadcrumb } from 'reactstrap';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

//think this is gonna fix the routing error? yess
const routes = [
  { path: '/', exact: true, name: 'Home', component: Full },
  { path: '/home', name: 'Blog', component: Breadcrumb },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/forum', name: 'Forum', component: Forum },
  { path: '/about', name: 'About', component: About },

];

export default routes;
