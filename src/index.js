import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducerMainGame from './store/reducers/reducerMainGame';
import reducerPlayers from './store/reducers/reducerPlayers';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const allReducers = combineReducers({
    reducerMainGame,
    reducerPlayers
});

const store = createStore(allReducers, composeEnhances);

const app = (
    <Provider store={ store }>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();