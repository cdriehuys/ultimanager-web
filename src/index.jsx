import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginContainer from './containers/LoginContainer';


const Root = () => (
  <BrowserRouter>
    <div>
      <Route path="/login" component={LoginContainer} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(<Root />, document.getElementById('app'));
