import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux'
import * as actions from '../actions/userActions';
    
import { login, signUp } from '../requests/auth';
import {
    BrowserRouter as ReactRouter,
    Link,
    Route
} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.user);

        this.requestAuth = this.requestAuth.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }
    requestAuth() {
        const credentials = {
            email: this.refs.emailField.getValue(),
            password: this.refs.passwordField.getValue()
        }
        login(credentials).then(data => {
            console.log(data);
            this.props.dispatch(actions.login(data.jwt));
        }).catch(console.log);

    }

    createAccount() {
        const credentials = {
            email: this.refs.emailField.getValue(),
            password: this.refs.passwordField.getValue()
        }
        signUp(credentials).then(console.log).catch(console.log);
    }

    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{ "textAlign": "left" }}>
                            <Title />
                            <TextField
                                floatingLabelText="Correo Electronico"
                                type="email"
                                className="textfield"
                                ref="emailField"
                            />

                            <TextField
                                floatingLabelText="Contraseña"
                                type="password"
                                className="textfield"
                                ref="passwordField"
                            />
                            <div className="Login-actions">
                                <Route path="/login" exact render={() => {
                                    return (
                                        <div>
                                            <Link to="/signup" style={{ marginRight: "1em" }}>Crear nueva cuenta</Link>
                                            <RaisedButton onClick={this.requestAuth} label="Ingresar" secondary={true} />
                                        </div>
                                    );
                                }}></Route>
                                <Route path="/signup" exact render={() => {
                                    return (
                                        <div>
                                            <Link to="/login" style={{ marginRight: "1em" }}>Ya tengo cuenta</Link>
                                            <RaisedButton onClick={this.createAccount} label="Crear Cuenta" secondary={true} />
                                        </div>
                                    );
                                }}></Route>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <Route path="/login" exact render={() =>
                        <div className="Login-Background" style={{
                            'backgroundImage':
                                "url(" + process.env.PUBLIC_URL + '/images/fondo.jpg' + ")"
                        }}></div>
                    }></Route>
                    <Route path="/signup" exact render={() =>
                        <div className="Login-Background" style={{
                            'backgroundImage':
                                "url(" + process.env.PUBLIC_URL + '/images/fondosignup.jpg' + ")"
                        }}></div>
                    }></Route>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login);