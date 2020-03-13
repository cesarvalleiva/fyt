import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './Footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<div className="container-footer">
				<div className="container">
					<div className="links">
						<ul>
							<li>Online</li>
							<li>Presencial</li>
							<li>Login</li>
							<li>Registro</li>
						</ul>
					</div>
					<div className="links-social">
						<ul>
							<li><InstagramIcon fontSize="small" /> Instagram</li>
							<li><FacebookIcon fontSize="small" /> Facebook</li>
							<li><LinkedInIcon fontSize="small" /> Linkedin</li>
							<li><WhatsAppIcon fontSize="small" /> Whatsapp</li>
						</ul>
					</div>
					<div className="links-rrhh">
						<ul>
							<li>Sobre FYT</li>
							<li>La empresa</li>
							<li>Trabajá con nosotros</li>
						</ul>
					</div>
					<div className="newsletter">
						<span>Suscribite para recibir las novedades:</span>
						<div className="form">
							<Form.Control type="text" className="buscar border-0" placeholder="Newsletter" />
							<button className="link-suscripcion">Suscribirme</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
