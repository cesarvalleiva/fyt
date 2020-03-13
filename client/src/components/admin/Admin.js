import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.scss';

export default class Admin extends Component {
	render() {
		return (
			<div className="container-admin">
				<div className="navigation">
                <span>Menú principal</span>
                    <ul>
                        <li>Alumnos</li>
                        <li>Ejercicios</li>
                        <li>Clases</li>
                    </ul>
                </div>
			</div>
		);
	}
}
