import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';

import TeamDetail from './components/TeamDetail';
import Dashboard from './containers/Dashboard';
import LoginContainer from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import appReducer from './reducers';
import globalStyles from './styles/global';
import theme from './styles/theme';


const initialState = {
  teams: {
    byId: {
      1: { id: 1, name: 'Darkside' },
      2: { id: 2, name: 'Raleigh Flyers' },
    },
  },
};

// Note that the logging middleware must come last as described here:
// https://github.com/evgenyrodionov/redux-logger#usage
const store = createStore(
  appReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk, logger)));


const Root = () => {
  globalStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegistrationContainer} />
            <Route path="/teams/:id" component={TeamDetail} />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};


ReactDOM.render(<Root />, document.getElementById('app'));
