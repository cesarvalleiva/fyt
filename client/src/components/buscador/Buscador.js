import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
				<div className="container-header">
					<div>
						<Row>
							<Col>
								<h1 className="titulo">Encontrá tu mejor versión</h1>
							</Col>
						</Row>
						<Row>
							<Col>
								<Link to="/online">
									<Button variant="none" className="button-online">
										Online
									</Button>
								</Link>
							</Col>
							<Col>
								<Link to="/presencial">
									<Button variant="none" className="button-online">
										Presencial
									</Button>
								</Link>
							</Col>
						</Row>

						{/* <Form.Control as="select" className="w-25 border-0">
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
						</Button> */}
					</div>
				</div>
			</div>
		);
	}
}
