import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Alumni.scss';

export default class Alumni extends Component {
	render() {
		return (
			<div className="container-fluid total">
				<div className="container-admin">
					<div className="navigation">
						<span>Menú principal</span>
						<ul>
							<li>
								<Link to="/admin" className="link-navigation">
									Alumnos
								</Link>
							</li>
							<li>Ejercicios</li>
							<li>Clases</li>
						</ul>
					</div>
				</div>
				<div className="container-info-admin">
					<h2>César Val Leiva</h2>
					<span>Plan - Ganar masa muscular</span>
					<span>Comienzo: 16/03/2020</span>
					<span>Final: 16/04/2020</span>
					<div className="agregar">
						<div className="plan-container">
							<h3>Día 1</h3>
							<span>Entrada en calor</span>
							<ul>
								<li>- Bicicleta - 10 min</li>
								<li>- Abdominales: 4 series de 50</li>
								<li>- Flexiones de brazos: 4 series de 20</li>
							</ul>
							<span>Ejercicio del día</span>
							<ul>
								<li>- Sentadillas: 12/10/10/8</li>
								<li>- Press de banca: 12/12/10/10</li>
								<li>- Remo con mancuernas: 12/12/10/8</li>
								<li>- Press militar: 12/12/10/8</li>
							</ul>
							<Form>
								<Form.Group controlId="exampleForm.SelectCustom">
									<Form.Label>Ejercicio</Form.Label>
									<Form.Control as="select" custom size="sm">
										<option>Seleccionar</option>
										<option>Bicicleta</option>
										<option>Abdiminales</option>
										<option>Flexiones de brazos</option>
										<option>Sentadillas</option>
										<option>Press de banca</option>
										<option>Remo con mancuernas</option>
										<option>Press militar</option>
									</Form.Control>
								</Form.Group>
								<Form.Row>
									<Col>
										<Form.Label>Series</Form.Label>
										<Form.Control type="number" size="sm" />
									</Col>
									<Col>
										<Form.Label>Repeticiones</Form.Label>
										<Form.Control type="number" size="sm" />
									</Col>
									<Col>
										<Form.Label>Descanso</Form.Label>
										<Form.Control size="sm" />
									</Col>
								</Form.Row>
							</Form>
							<Button variant="outline-success" className="guardar-btn">
								Guardar
							</Button>
						</div>
						<div className="plan-container">
							<h3>Día 2</h3>
							<span>Entrada en calor</span>
							<ul>
								<li>- Bicicleta - 10 min</li>
								<li>- Abdominales: 4 series de 50</li>
								<li>- Flexiones de brazos: 4 series de 20</li>
							</ul>
							<span>Ejercicio del día</span>
							<ul>
								<li>- Peso muerto: 12/10/10/8</li>
								<li>- Apertura sobre banco: 12/10/8</li>
								<li>- Remo a una mano: 12/10/8/6</li>
								<li>- Elevaciones frontales: 10/10/8/8</li>
							</ul>
							<Form>
								<Form.Group controlId="exampleForm.SelectCustom">
									<Form.Label>Ejercicio</Form.Label>
									<Form.Control as="select" custom size="sm">
										<option>Seleccionar</option>
										<option>Bicicleta</option>
										<option>Abdiminales</option>
										<option>Flexiones de brazos</option>
										<option>Sentadillas</option>
										<option>Press de banca</option>
										<option>Remo con mancuernas</option>
										<option>Press militar</option>
									</Form.Control>
								</Form.Group>
								<Form.Row>
									<Col>
										<Form.Label>Series</Form.Label>
										<Form.Control type="number" size="sm" />
									</Col>
									<Col>
										<Form.Label>Repeticiones</Form.Label>
										<Form.Control type="number" size="sm" />
									</Col>
									<Col>
										<Form.Label>Descanso</Form.Label>
										<Form.Control size="sm" />
									</Col>
								</Form.Row>
							</Form>
							<Button variant="outline-success" className="guardar-btn">
								Guardar
							</Button>
						</div>
						<div className="plan-container">
							<h3>Día 3</h3>
							<span>Entrada en calor</span>
							<ul>
								<li>- Bicicleta - 10 min</li>
								<li>- Abdominales: 4 series de 50</li>
								<li>- Flexiones de brazos: 4 series de 20</li>
							</ul>
							<span>Ejercicio del día</span>
							<ul>
								<li>- Sentadillas búlgaras: 12/10/10/8</li>
								<li>- Flexiones en suelo: 12/10/8</li>
								<li>- Peso muerto: 12/10/8/6</li>
								<li>- Zancada lateral: 10/10/8/8</li>
							</ul>
							<Form>
								<Form.Group controlId="exampleForm.SelectCustom">
									<Form.Label>Ejercicio</Form.Label>
									<Form.Control as="select" custom size="sm">
										<option>Seleccionar</option>
										<option>Bicicleta</option>
										<option>Abdiminales</option>
										<option>Flexiones de brazos</option>
										<option>Sentadillas</option>
										<option>Press de banca</option>
										<option>Remo con mancuernas</option>
										<option>Press militar</option>
									</Form.Control>
								</Form.Group>
								<Form.Row>
									<Col>
										<Form.Label>Series</Form.Label>
										<Form.Control type="number" size="sm" />
									</Col>
									<Col>
										<Form.Label>Repeticiones</Form.Label>
										<Form.Control type="number" size="sm" />
									</Col>
									<Col>
										<Form.Label>Descanso</Form.Label>
										<Form.Control size="sm" />
									</Col>
								</Form.Row>
							</Form>
							<Button variant="outline-success" className="guardar-btn">
								Guardar
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
