import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/app/AppContainer';
import MainContainer from './components/main/MainContainer';
import { Provider } from 'react-redux';
import { configure } from './config/config-store';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

const store = configure({});
ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <div>
                <Route path="/" exact={true} component={AppContainer} />
                <Route path="/home" exact={true} component={MainContainer} />
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
