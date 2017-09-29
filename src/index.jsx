import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import LoginContainer from './containers/LoginContainer';


const Root = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={LoginContainer} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(<Root />, document.getElementById('app'));
