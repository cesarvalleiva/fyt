// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService';
import './Login.scss';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
		this.service = new AuthService();
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		const username = this.state.username;
		const password = this.state.password;

		this.service
			.login(username, password)
			.then((response) => {
				this.setState({
					username: username,
					password: password,
					error: false
				});
				this.props.getUser(response);
			})
			.catch((error) => {
				console.log('entra en error');
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="container-login">
				<form onSubmit={this.handleFormSubmit}>
					<fieldset>
						<label>Username:</label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={(e) => this.handleChange(e)}
						/>
					</fieldset>

					<fieldset>
						<label>Password:</label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={(e) => this.handleChange(e)}
						/>
					</fieldset>

					<input type="submit" value="Login" />
				</form>

				<h1>{this.state.error ? 'Error' : ''}</h1>
			</div>
		);
	}
}

export default Login;
