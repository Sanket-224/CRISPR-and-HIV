// var React = require('react');
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var hashHistory = ReactRouter.hashHistory;
// var IndexRoute = ReactRouter.IndexRoute;
// var Crispr = require('../components/Crispr')

// var routes = (
//   <>
//       <Route path='/' component={Crispr}/>
//   </Router>
// );

// module.exports = routes;

import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Crispr from '../components/Crispr'
import introduction_to_crispr from '../components/introduction_to_crispr'


// var routes = (
//   <HashRouter>
//       <div>
//         <Route exact path="/" component={Crispr} />
//      {/*}   <Route path="dashboard" component={Dashboard} />
//         <Route path="users" component={Users} /> */}
//       </div>
//    </HashRouter >
// );
ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={Crispr} />
        <Route path="/introduction_to_crispr" component={introduction_to_crispr} />
     {/*}   <Route path="users" component={Users} /> */}
      </div>
   </HashRouter >
), document.getElementById( 'app' ) )