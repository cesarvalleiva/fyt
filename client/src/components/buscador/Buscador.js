import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Search } from 'react-bootstrap-icons';
import './Buscador.scss';

export default class Buscador extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="container-search">
				<div className="container-form">
					<div className="form">
						<Form.Control as="select" className="w-25 border-0">
							<option>Online</option>
							<option>Presencial</option>
						</Form.Control>
						<Form.Control
							type="text"
							className="search border-0"
							placeholder="Encontrá tu profesor"
						/>
						<Button variant="primary" className="button-search" type="submit">
							<Search /> Buscar
						</Button>
					</div>
				</div>
				{/* <div className="container-form2">
                    <h1>Elegí tu modalidad</h1>
					<div className="form2">
						<Button variant="primary">Presencial</Button>
						<Button variant="primary">Online</Button>
					</div>
				</div> */}
			</div>
		);
	}
}
