import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
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
                            />

                            <TextField
                                floatingLabelText="Contraseña"
                                type="password"
                                className="textfield"
                            />
                            <div className="Login-actions">
                                <Link to="/login" style={{ marginRight: "1em" }}>Ya tengo cuenta</Link>
                                <RaisedButton label="Crear Cuenta" secondary={true} />
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <div className="Login-Background" style={{
                        'backgroundImage':
                            "url(" + process.env.PUBLIC_URL + '/images/fondosignup.jpg' + ")"
                    }}></div>
                </div>
            </div>
        )
    }
}