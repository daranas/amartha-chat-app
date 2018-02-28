import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Chatroom from './chatroom';
import { firebaseAuth } from '../config/constants';
import logoCircle from '../assets/images/logo-circle.png';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import '../assets/css/app.css';

function PrivateRoute ({component: Component, authed, ...rest}) {
	return (
		<Route
		{...rest}
		render={(props) => authed === true
			? <Component {...props} />
			: <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
		/>
	)
}

function PublicRoute ({component: Component, authed, ...rest}) {
	return (
		<Route
		{...rest}
		render={(props) => authed === false
			? <Component {...props} />
			: <Redirect to='/' />}
		/>
	)
}

export default class App extends Component {
	state = {
		authed: false,
		loading: true,
	}

	componentDidMount () {
		this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					authed: true,
					loading: false,
				})
			} else {
				this.setState({
					authed: false,
					loading: false
				})
			}
		});
	}

	componentWillUnmount () {
		this.removeListener();
	}

	render() {
		return this.state.loading === true ? <div className="loader"><img src={logoCircle} alt="loader"/></div> : (
			<BrowserRouter>
				<Switch>
					<PrivateRoute authed={this.state.authed} path='/' exact component={Chatroom} />
					<PublicRoute authed={this.state.authed} path='/login' component={Login} />
					<PublicRoute authed={this.state.authed} path='/register' component={Register} />
					<Route render={() => <h3>No Match</h3>} />
				</Switch>
			</BrowserRouter>
		);
	}
}