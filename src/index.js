import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/app/AppContainer';
import MainContainer from './components/main/MainContainer';
import { Provider } from 'react-redux';
import { configure } from './config/config-store';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';

const config = configure({});
ReactDOM.render(
    <Provider store={config.store}>
        <PersistGate loading={null} persistor={config.persistor}>
            <Router history={createBrowserHistory()}>
                <div>
                    <Route path="/" exact={true} component={AppContainer} />
                    <Route path="/home" exact={true} component={MainContainer} />
                </div>
            </Router>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);
