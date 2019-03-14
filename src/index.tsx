import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import state from './state';

import './components/index.css';
import App from './components/app/App';
import Home from './components/home/Home';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers'
const midlewares = [applyMiddleware(thunk)];
if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  midlewares.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  state as any,
  compose(...midlewares)
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* eslint-enable */
render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/books/:id" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
