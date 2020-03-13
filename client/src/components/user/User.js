import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import './User.scss';

export default class User extends Component {
	render() {
		return (
			<div className="container">
				<div className="container-info">
					<div className="planificacion">
						<Tab.Container id="left-tabs-example" defaultActiveKey="first">
							<Row>
								<Col sm={3}>
									<Nav variant="pills" className="flex-column">
										<Nav.Item>
											<Nav.Link eventKey="first">Día 1</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="second">Día 2</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="third">Día 3</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col sm={9}>
									<Tab.Content>
										<Tab.Pane eventKey="first">
											<Accordion defaultActiveKey="0">
												<Card>
													<Card.Header>
														<Accordion.Toggle as={Button} variant="link" eventKey="0">
															Entrada en calor
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="0">
														<Card.Body>
															<Table bordered hover>
																<thead>
																	<tr>
																		<th></th>
																		<th>Ejercicio</th>
																		<th>Series</th>
																		<th>Repeticiones</th>
                                                                        <th>Descanso</th>
																	</tr>
																</thead>
																<tbody>
                                                                <tr>
																		<td>1</td>
																		<td className="text-left">Bicicleta</td>
																		<td>-</td>
																		<td>10 min</td>
                                                                        <td>-</td>
																	</tr>
																	<tr>
																		<td>2</td>
																		<td className="text-left">Abdominales</td>
																		<td>4</td>
																		<td>50</td>
                                                                        <td>30''</td>
																	</tr>
																	<tr>
																		<td>3</td>
																		<td className="text-left">Flexiones de brazos</td>
																		<td>4</td>
																		<td>20</td>
                                                                        <td>30''</td>
																	</tr>
																</tbody>
															</Table>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle as={Button} variant="link" eventKey="1">
															Ejercicio del día
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="1">
														<Card.Body>
                                                            <Table bordered hover>
																<thead>
																	<tr>
																		<th></th>
																		<th>Ejercicio</th>
																		<th>Series</th>
																		<th>Repeticiones</th>
                                                                        <th>Descanso</th>
																	</tr>
																</thead>
																<tbody>
                                                                <tr>
																		<td>1</td>
																		<td className="text-left">Sentadillas</td>
																		<td>4</td>
																		<td>12-10-10-8</td>
                                                                        <td>60''</td>
																	</tr>
																	<tr>
																		<td>2</td>
																		<td className="text-left">Press de banca</td>
																		<td>4</td>
																		<td>12-12-10-10</td>
                                                                        <td>90''</td>
																	</tr>
																	<tr>
																		<td>3</td>
																		<td className="text-left">Remo con mancuernas</td>
																		<td>4</td>
																		<td>12-12-10-8</td>
                                                                        <td>30''</td>
																	</tr>
                                                                    <tr>
																		<td>4</td>
																		<td className="text-left">Press militar</td>
																		<td>4</td>
																		<td>12-12-10-8</td>
                                                                        <td>20''</td>
																	</tr>
																</tbody>
															</Table>
                                                        </Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
										</Tab.Pane>
                                        <Tab.Pane eventKey="second">
											<Accordion defaultActiveKey="0">
												<Card>
													<Card.Header>
														<Accordion.Toggle as={Button} variant="link" eventKey="0">
															Entrada en calor
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="0">
														<Card.Body>
															<Table bordered hover>
																<thead>
																	<tr>
																		<th></th>
																		<th>Ejercicio</th>
																		<th>Series</th>
																		<th>Repeticiones</th>
                                                                        <th>Descanso</th>
																	</tr>
																</thead>
																<tbody>
                                                                <tr>
																		<td>1</td>
																		<td className="text-left">Bicicleta</td>
																		<td>-</td>
																		<td>10 min</td>
                                                                        <td>-</td>
																	</tr>
																	<tr>
																		<td>2</td>
																		<td className="text-left">Abdominales</td>
																		<td>4</td>
																		<td>50</td>
                                                                        <td>30''</td>
																	</tr>
																	<tr>
																		<td>3</td>
																		<td className="text-left">Flexiones de brazos</td>
																		<td>4</td>
																		<td>20</td>
                                                                        <td>30''</td>
																	</tr>
																</tbody>
															</Table>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle as={Button} variant="link" eventKey="1">
															Ejercicio del día
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="1">
														<Card.Body>
                                                            <Table bordered hover>
																<thead>
																	<tr>
																		<th></th>
																		<th>Ejercicio</th>
																		<th>Series</th>
																		<th>Repeticiones</th>
                                                                        <th>Descanso</th>
																	</tr>
																</thead>
																<tbody>
                                                                <tr>
																		<td>1</td>
																		<td className="text-left">Peso muerto</td>
																		<td>4</td>
																		<td>12-10-10-8</td>
                                                                        <td>90''</td>
																	</tr>
																	<tr>
																		<td>2</td>
																		<td className="text-left">Aperturas sobre banco</td>
																		<td>3</td>
																		<td>12-10-8</td>
                                                                        <td>60''</td>
																	</tr>
																	<tr>
																		<td>3</td>
																		<td className="text-left">Remo a una mano</td>
																		<td>4</td>
																		<td>12-10-8-6</td>
                                                                        <td>60''</td>
																	</tr>
                                                                    <tr>
																		<td>4</td>
																		<td className="text-left">Elevaciones frontales</td>
																		<td>4</td>
																		<td>10-10-8-8</td>
                                                                        <td>60''</td>
																	</tr>
                                                                    <tr>
																		<td>5</td>
																		<td className="text-left">Fondos sobre banco</td>
																		<td>3</td>
																		<td>Fallo</td>
                                                                        <td>60''</td>
																	</tr>
																</tbody>
															</Table>
                                                        </Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
										</Tab.Pane>
										<Tab.Pane eventKey="third">
											<Accordion defaultActiveKey="0">
												<Card>
													<Card.Header>
														<Accordion.Toggle as={Button} variant="link" eventKey="0">
															Entrada en calor
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="0">
														<Card.Body>
															<Table bordered hover>
																<thead>
																	<tr>
																		<th></th>
																		<th>Ejercicio</th>
																		<th>Series</th>
																		<th>Repeticiones</th>
                                                                        <th>Descanso</th>
																	</tr>
																</thead>
																<tbody>
                                                                <tr>
																		<td>1</td>
																		<td className="text-left">Bicicleta</td>
																		<td>-</td>
																		<td>10 min</td>
                                                                        <td>-</td>
																	</tr>
																	<tr>
																		<td>2</td>
																		<td className="text-left">Abdominales</td>
																		<td>4</td>
																		<td>50</td>
                                                                        <td>30''</td>
																	</tr>
																	<tr>
																		<td>3</td>
																		<td className="text-left">Flexiones de brazos</td>
																		<td>4</td>
																		<td>20</td>
                                                                        <td>30''</td>
																	</tr>
																</tbody>
															</Table>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle as={Button} variant="link" eventKey="1">
															Ejercicio del día
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="1">
														<Card.Body>
                                                            <Table bordered hover>
																<thead>
																	<tr>
																		<th></th>
																		<th>Ejercicio</th>
																		<th>Series</th>
																		<th>Repeticiones</th>
                                                                        <th>Descanso</th>
																	</tr>
																</thead>
																<tbody>
                                                                <tr>
																		<td>1</td>
																		<td className="text-left">Sentadillas búlgaras</td>
																		<td>4</td>
																		<td>12-10-10-8</td>
                                                                        <td>60''</td>
																	</tr>
																	<tr>
																		<td>2</td>
																		<td className="text-left">Flexiones en suelo</td>
																		<td>4</td>
																		<td>12-12-10-10</td>
                                                                        <td>90''</td>
																	</tr>
																	<tr>
																		<td>3</td>
																		<td className="text-left">Peso muerto</td>
																		<td>4</td>
																		<td>12-12-10-8</td>
                                                                        <td>30''</td>
																	</tr>
                                                                    <tr>
																		<td>4</td>
																		<td className="text-left">Zancada lateral</td>
																		<td>4</td>
																		<td>12-12-10-8</td>
                                                                        <td>20''</td>
																	</tr>
																</tbody>
															</Table>
                                                        </Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					</div>
				</div>
			</div>
		);
	}
}
