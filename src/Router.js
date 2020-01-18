import React from 'react';

import {
    BrowserRouter as ReactRouter,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import App from './App';
import Dashboard from './pages/Dashboard';

const userSignedIn = true;
export default class Router extends React.Component {
    signedinRoutes() {
        if (userSignedIn) {
            return (
                <Route path="/new" render={() => <h1>Bienvenidos</h1>} />
            );
        }
    }

    home() {
        if (userSignedIn) {
            return Dashboard;
        }
        return Home;
    }

    render() {
        return (
            <ReactRouter>
                <App>
                    <Route exact path="/" component={this.home()}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Login}></Route>
                    {this.signedinRoutes()}
                </App>
            </ReactRouter>
        )
    }
}