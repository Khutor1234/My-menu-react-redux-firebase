import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app';
import { ErrorBoundry } from './components/organisms';
import { store, persistor } from './store/index';
import './style.sass';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
