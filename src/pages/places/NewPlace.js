import React from 'react';
import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card'
import { push } from 'connected-react-router'

import Container from '../../components/Container';
import Title from '../../components/Title';
import * as requests from '../../requests/places';

import Uploader from '../../components/uploader/Uploader';
const textStyles = {
	'width': '100%'
}
class NewPlace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {uploading:false};

		this.createPlace = this.createPlace.bind(this);
		this.getFile = this.getFile.bind(this);

	}
	createPlace() {
		const data = {
			title: this.refs.titleField.getValue(),
			address: this.refs.addressField.getValue(),
			description: this.refs.descriptionField.getValue(),
		}
		if (data['title'] == "" || data['address'] == "" || data['description'] == "") {
			alert('Toda la información debe estar llenada');
			return '';
		}
		if (this.state.avatar) data.avatar = this.state.avatar;
		if (this.state.cover) data.cover = this.state.cover;
		//alert('pruebas');
		this.setState({ uploading: true });

		console.log(data);
		requests.createPlace(data, this.props.user.jwt).then(data => {
			console.log(data);
			console.log(data.slug);
			this.setState({ uploading: false });
			this.props.dispatch(push("/lugares/" + data.slug));
		}).catch(console.log);
	}
	getFile(type, file) {
		let state = {};
		state[type] = file;

		this.setState(state);
		//setTimeout(() => { console.log(this.state) }, 2000);
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<Container>
					<Card style={{ 'textAlign': 'left', 'padding': '20px' }}>
						<header style={{ 'borderBottom': 'solid 2px #eee' }}>
							<Title />
						</header>
						<div>
							<TextField
								floatingLabelText="Nombre del negocio"
								ref="titleField"
								style={textStyles}
							/>
							<TextField
								floatingLabelText="Dirección"
								ref="addressField"
								style={textStyles}
							/>
							<div style={{ 'marginTop': '1em' }}>
								<Uploader label="Subir avatar" type="avatar" getFile={this.getFile} />
							</div>
							<div style={{ 'marginTop': '1em' }}>
								<Uploader label="Subir cover" type="cover" getFile={this.getFile} />
							</div>
							<TextField
								floatingLabelText="Describe el negocio"
								ref="descriptionField"
								multiLine={true}
								style={textStyles}
							/>
							<div style={{ 'textAlign': 'right', 'marginTop': '1em' }}>
								<RaisedButton
									label='Guardar'
									onClick={this.createPlace}
									secondary={true}
									disabled={this.state.uploading}
								/>
							</div>
						</div>
					</Card>
				</Container>
			</div>
		);
	}
}
export default connect(function (state, ownProps) {
	return {
		user: state.user
	}
})(NewPlace);