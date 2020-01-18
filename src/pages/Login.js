import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
    BrowserRouter as ReactRouter,
    Link,
    Route
} from 'react-router-dom';

export default class Login extends React.Component{
    render(){
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{ "textAlign":"left"}}>
                            <Title />
                            <TextField 
                                floatingLabelText="Correo Electronico"
                                type="email"
                                className="textfield"
                            />
                    
                            <TextField 
                                floatingLabelText="Contraseña"
                                type="password"
                                className="textfield"
                            />
                                <div className="Login-actions">
                                    <Route path="/login" exact render={() => {
                                        return (
                                            <div>
                                                <Link to="/signup" style={{ marginRight: "1em" }}>Crear nueva cuenta</Link>
                                                <RaisedButton label="Ingresar" secondary={true} />
                                            </div>
                                        );
                                    }}></Route>
                                    <Route path="/signup" exact render={() => {
                                        return (
                                            <div>
                                                <Link to="/login" style={{ marginRight: "1em" }}>Ya tengo cuenta</Link>
                                                <RaisedButton label="Crear Cuenta" secondary={true} />
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