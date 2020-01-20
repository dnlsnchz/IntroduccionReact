import React from 'react';

import {
    BrowserRouter as ReactRouter,
    Route,
    Switch
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import App from './App';
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';

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
                    <Switch>
                        <Route exact path="/" component={this.home()}></Route>
                        <Route path="/lugares/:slug" component={Place}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={Login}></Route>
                        {this.signedinRoutes()}
                    </Switch>
                </App>
            </ReactRouter>
        )
    }
}