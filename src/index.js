import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import {newPost} from './actions/index';
// require('babel-polyfill');
require('bootstrap/dist/css/bootstrap.min.css');
// import $ from 'jquery';
require('jquery');
require('popper.js');
require('bootstrap');
require('./css/style.scss');

const store = createStore(allReducers);

// console.log('dispatching', 'NEW_POST');
// store.dispatch(newPost('Okay'));
// console.log('next state', store.getState());


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/pricing" component={Pricing}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById("app")
);
