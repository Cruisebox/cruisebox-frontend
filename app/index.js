import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import NotFound from './components/NotFoundPage/NotFoundPage';
import './index.css';
import 'dotenv/config';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const routing = (
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('app'));

module.hot.accept();