import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import MenuService from './services/menu-service.js';
import {MenuServiceProvider} from './components/menu-service-context';
import store from './store';

const menuService = new MenuService();

ReactDOM.render(
    <Provider store = {store}>
		<ErrorBoundry>
			<MenuServiceProvider value = {menuService}>
				<Router>
					<App/>
				</Router>
			</MenuServiceProvider>
		</ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

