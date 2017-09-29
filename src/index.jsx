import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import Dashboard from './containers/Dashboard';
import LoginContainer from './containers/LoginContainer';
import appReducer from './reducers';


const initialState = {
  teams: {
    byId: {
      1: { id: 1, name: 'Darkside' },
      2: { id: 2, name: 'Raleigh Flyers' },
    },
  },
};

const store = createStore(
  appReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(logger)));


const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LoginContainer} />
      </div>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(<Root />, document.getElementById('app'));
