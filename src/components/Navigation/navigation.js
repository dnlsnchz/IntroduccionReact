import React from 'react';
import { connect } from 'react-redux';
import MyAppBar from './MyAppBar';
import { logout } from '../../actions/userActions'
import { push } from 'connected-react-router'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.user)
        this.goHome = this.goHome.bind(this);
        this.logout = this.logout.bind(this);
    }

    goHome() {
        console.log('goHome');
        this.props.dispatch(push('/'));
    }
    logout() {
        console.log('logout');
        this.props.dispatch(logout());
        this.props.dispatch(push('/'));
    }
    render() {
        return <MyAppBar goHome={this.goHome} user={this.props.user} logout={this.logout} />
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}



export default connect(mapStateToProps)(Navigation);