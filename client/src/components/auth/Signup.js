import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import './Login.scss';

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: null };
		this.service = new AuthService();
	}

	handleGoogleSubmit = (data) => {
		console.log("entra en el handle de google")
		console.log(data)
		this.setState({
			username: data.profileObj.givenName
		},()=>{
			this.handleFormSubmit()
		})	
	}

	handleFormSubmit = (event) => {
		event && event.preventDefault();
		
		const username = this.state.username;
		const password = this.state.password ? this.state.password : "1234";
	
		
		//aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
		this.service
			.signup(username, password)
			.then((response) => {
				this.setState({
					username: username,
					password: password
				});
				//aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
				//por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
				//y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
				this.props.getUser(response.user);
			})
			.catch((error) => {
				this.setState({
					username: '',
					password: '',
					error: true
				});
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
					{/* <ul className="list-links">
						<Link to="/login" className="link">
							<li>Login</li>
						</Link>
						<Link to="/signup" className="link active">
							<li>Sign up</li>
						</Link>
					</ul> */}
					<form onSubmit={this.handleFormSubmit}>
						<fieldset>
							<label>Nombre completo:</label>
							<input
								className="input-login"
								type="text"
								name="username"
								value={this.state.username}
								onChange={(e) => this.handleChange(e)}
							/>
						</fieldset>
						<fieldset>
							<label>Usuario:</label>
							<input
								className="input-login"
								type="text"
								name="username"
								value={this.state.username}
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
								onChange={(e) => this.handleChange(e)}
							/>
						</fieldset>
						<input type="submit" value="Crear usuario" className="button-login signup" />
						<Link to="/login" className="volver">
							<p>Volver al login</p>
						</Link>
					</form>

					<h1>{this.state.error ? 'Error' : ''}</h1>
				</div>
			</div>
		);
	}
}

export default Signup;
