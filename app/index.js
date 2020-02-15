import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import EventDetails from './components/eventDetails/EventDetails';
import NotFound from './components/notFoundPage/NotFoundPage';
import './index.css';
import 'dotenv/config';
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
            <Route path='/eventdetails' component={EventDetails} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('app'));

module.hot.accept();