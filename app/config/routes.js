
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Crispr from '../components/Crispr'
import introduction_to_crispr from '../components/introduction_to_crispr'
import introduction_to_hiv from '../components/introduction_to_hiv'
import solution1 from '../components/solution1'
import solution2 from '../components/solution2'

ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={Crispr} />
        <Route path="/introduction_to_crispr" component={introduction_to_crispr} />
        <Route path="/introduction_to_hiv" component={introduction_to_hiv} />
        <Route path="/solution1" component={solution1} />
        <Route path="/solution2" component={solution2} />
     {/*}   <Route path="users" component={Users} /> */}
      </div>
   </HashRouter >
), document.getElementById( 'app' ) )