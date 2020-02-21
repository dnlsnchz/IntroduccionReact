import React from 'react';
import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';

import VisitModal from './VisitModal';

import * as actions from '../../actions/visitsActions';

class VisitForm extends React.Component {
	constructor(props) {
		super(props);

		this.openVisitsModal = this.openVisitsModal.bind(this);
		this.add = this.add.bind(this);
	}

	add(observation, reaction = "love") {
		this.props.dispatch(actions.addVisit(this.props.place, observation, reaction))
	}

	openVisitsModal() {
		console.log(this.refs);
		this.refs.modalRef.openModal();
	}
	render() {
		return (

			<div>
				<VisitModal place={this.props.place} onSubmit={this.add} ref="modalRef" />
				<FlatButton
					onClick={this.openVisitsModal}
					label="Agregar un comentario"
					secondary={true} />
			</div>
			);
	}
}

function mapStateToProps(state, ownProps) {
	return {
	}
}
export default connect(mapStateToProps)(VisitForm);