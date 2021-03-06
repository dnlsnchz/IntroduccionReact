import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';
import { Provider } from 'react-redux';
//import createHistory from 'history/createBrowserHistory';
//import { createBrowserHistory } from 'history';

//import { routerMiddleware } from 'react-router-redux';
import { routerMiddleware } from 'connected-react-router';

//const history = createHistory();
//const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const store = configureStore(middleware);

ReactDOM.render(
    <Provider store={store} >
        <Router history={history} />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
