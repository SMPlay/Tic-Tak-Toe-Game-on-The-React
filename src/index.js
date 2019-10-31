import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './store/reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, composeEnhances);

const app = (
    <Provider store={ store }>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();