
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Crispr from '../components/Crispr'
import introduction_to_crispr from '../components/introduction_to_crispr'

ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={Crispr} />
        <Route path="/introduction_to_crispr" component={introduction_to_crispr} />
     {/*}   <Route path="users" component={Users} /> */}
      </div>
   </HashRouter >
), document.getElementById( 'app' ) )