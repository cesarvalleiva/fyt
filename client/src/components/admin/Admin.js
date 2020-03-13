import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import './Admin.scss';

export default class Admin extends Component {
	render() {
		return (
			<div className="container-fluid total">
				<div className="container-admin">
					<div className="navigation">
						<span>Menú principal</span>
						<ul>
							<li><Link to="/admin" className="link-navigation">Alumnos</Link></li>
							<li>Ejercicios</li>
							<li>Clases</li>
						</ul>
					</div>
				</div>
				<div className="container-info-admin">
                <h2>Alumnos</h2>
					<Table striped hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Nombre</th>
								<th>Telefono</th>
								<th>Email</th>
                                <th>Objetivo</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td><Link to="/alumni" className="link">Cesar Val Leiva</Link></td>
								<td>641303528</td>
								<td>cesarvalleiva@gmail.com</td>
                                <td>Ganar masa muscular</td>
							</tr>
                            <tr>
								<td>2</td>
								<td>Pedro Castañeda</td>
								<td>622300943</td>
								<td>pcramos@gmail.com</td>
                                <td>Maratón</td>
							</tr>
                            <tr>
								<td>3</td>
								<td>Pablo Carceller</td>
								<td>674839203</td>
								<td>pau.carceller@gmail.com</td>
                                <td>Ganar masa muscular</td>
							</tr>
                            <tr>
								<td>4</td>
								<td>Cristina Suarez</td>
								<td>643829437</td>
								<td>crissugar@gmail.com</td>
                                <td>Maratón</td>
							</tr>
                            <tr>
								<td>5</td>
								<td>Pedro Sanchez</td>
								<td>641303528</td>
								<td>presidente@gmail.com</td>
                                <td>Perder peso</td>
							</tr>
                            <tr>
								<td>6</td>
								<td>Fernando Comet</td>
								<td>621309324</td>
								<td>fernandcomet@gmail.com</td>
                                <td>Ganar masa muscular</td>
							</tr>
                            <tr>
								<td>7</td>
								<td>Jota</td>
								<td>641303521</td>
								<td>Jota@gmail.com</td>
                                <td>Maratón</td>
							</tr>
                            <tr>
								<td>8</td>
								<td>Luciano Sanchez</td>
								<td>621332352</td>
								<td>lucho@gmail.com</td>
                                <td>Ganar masa muscular</td>
							</tr>
							<tr>
								<td>9</td>
								<td>Alejandro Sanchez</td>
								<td>642348956</td>
								<td>ale@gmail.com</td>
                                <td>Perder peso</td>
							</tr>
							<tr>
								<td>10</td>
                                <td>Laura Tobajas</td>
                                <td>675489340</td>
                                <td>lauratobajas@gmail.com</td>
								<td>Maratón</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
