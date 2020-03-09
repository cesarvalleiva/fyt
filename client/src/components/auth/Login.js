// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersonFill } from 'react-bootstrap-icons';
import { PeopleFill } from 'react-bootstrap-icons';
import './Login.scss';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
		this.service = new AuthService();
	}

	handleFormSubmit = (event) => {
		event && event.preventDefault();
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
				<div className="container-form">
					<form onSubmit={this.handleFormSubmit}>
						<fieldset>
							<label>Usuario:</label>
							<input
								className="input-login"
								type="text"
								name="username"
								value={this.state.username}
								placeholder="Ingrese su usuario"
								onChange={(e) => this.handleChange(e)}
							/>
						</fieldset>
						<fieldset>
							<label>Contraseña:</label>
							<input
								className="input-login"
								type="password"
								name="password"
								value={this.state.password}
								placeholder="Ingrese su contraseña"
								onChange={(e) => this.handleChange(e)}
							/>
						</fieldset>
						<input type="submit" value="Login" className="button-login" />
						<div className="login-social">
							<div className="buttons-login">
								<GoogleLogin
									clientId="387479561912-a1mrcl42f3p2acgjh6qjn4f7qe638mk4.apps.googleusercontent.com"
									buttonText="Login con Google"
									onSuccess={(data) => this.handleGoogleSubmit(data)}
									onFailure={(data) => this.handleGoogleSubmit(data)}
									cookiePolicy={'single_host_origin'}
									className="google-login"
								/>
							</div>
							<div className="buttons-login">
								<FacebookLogin
									appId="915713102217693"
									fields="name,email,picture"
									onClick={(data) => this.handleFacebookSubmit(data)}
									callback={() => this.handleFormSubmit()}
									icon="fa-facebook"
									cssClass="fb-login"
								/>
							</div>
						</div>
					</form>

					<h1>{this.state.error ? 'Error' : ''}</h1>
				</div>
				<div className="crear-cuenta">
					<Link to="/signup" className="link-crear-cuenta">
						<p>Crear nueva cuenta <PersonFill /></p>
					</Link>
					<Link to="/signup" className="link-crear-cuenta">
						<p>Eres profe? <PeopleFill /></p>
					</Link>
				</div>
			</div>
		);
	}
}

export default Login;
