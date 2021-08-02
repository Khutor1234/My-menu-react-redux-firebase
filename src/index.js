import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';


import './index.css';
import App from './components/app';

ReactDOM.render(
    <ErrorBoundry>
        <Router>
          <App />
        </Router>
    </ErrorBoundry>,
  document.getElementById('root')
);

