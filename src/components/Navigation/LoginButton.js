import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom';

export default class LoginButton extends React.Component {
	render() {
		return (
			<Link to='/login' >
				<FlatButton label="Iniciar Sesión" style={{'color':'white' ,'marginTop':'6px'}}/>
			</Link>
		)
	}
}