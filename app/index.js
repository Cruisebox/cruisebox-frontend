import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import 'dotenv/config';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();