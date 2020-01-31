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

import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

const userSignedIn = false;

class Router extends React.Component {
    signedInRoutes() {
        if (this.props.user.jwt) {
            return (
                <Route path="/new" render={() => <h1>Bienvenidos</h1>} />
            );
        }
    }

    home() {
        if (this.props.user.jwt) {
            return Dashboard;
        }
        return Home;
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <App>
                    <Switch>
                        <Route exact path="/" component={this.home()}></Route>
                        <Route path="/lugares/:slug" component={Place}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={Login}></Route>
                        {this.signedInRoutes()}
                    </Switch>
                </App>
            </ConnectedRouter>
        )
    }
}



function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Router);