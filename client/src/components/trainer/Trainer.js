import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { Check } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './Trainer.scss';

export default class Trainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trainer: ''
		};
	}

	_findTrainer() {
		axios.get(`${process.env.REACT_APP_API_URL}/trainer/${this.props.trainerId}`).then((trainer) => {
			this.setState({
				trainer: trainer.data
			});
		});
	}

	componentDidMount() {
		this._findTrainer();
	}

	render() {
		const { trainer } = this.state;

		return (
			<div className="container-trainer">
				<div className="trainer">
					<div className="nombre">
						<img src={trainer.imgPath} alt={trainer.name} />
						<span className="name">
							{trainer.name}
							<div className="stars">
								<StarFill />
								<StarFill />
								<StarFill />
								<StarHalf />
								<Star /> <span className="comentarios"> - 19 comentarios</span>
							</div>
							<span className="sobreMi">Sobre mi: </span>
							<span className="sobremi-texto">Profesor de educación física. Más de 10 años de experiencia en el sector. </span>
						</span>
					</div>
					<div className="contacto">
						<Button variant="none" className="mensaje">
							<Envelope /> Mensaje
						</Button>
					</div>
				</div>
				<div className="detalle">
					<div className="especialidad">
						<span>Perder peso</span>
						<div className="caracteristica">
							<Check /> Planes personalizados
						</div>
						<div className="caracteristica">
							<Check /> Enfoque en la pérdida de grasa corporal
						</div>
						<div className="caracteristica">
							<Check /> Aeróbicos y musculación
						</div>
						<div className="comprar-plan">
							<Button variant="none" className="boton-comprar">
								Comprar €19
							</Button>
						</div>
					</div>
					<div className="especialidad">
						<span>Ganar masa muscular</span>
						<div className="caracteristica">
							<Check /> Consolidación muscular
						</div>
						<div className="caracteristica">
							<Check /> Definición
						</div>
						<div className="caracteristica">
							<Check /> Competencias
						</div>
						<div className="comprar-plan">
							<Button variant="none" className="boton-comprar">
								Comprar €10
							</Button>
						</div>
					</div>
					<div className="especialidad">
						<span>Maratón</span>
						<div className="caracteristica">
							<Check /> 10 km
						</div>
						<div className="caracteristica">
							<Check /> 21 km
						</div>
						<div className="caracteristica">
							<Check /> 42 km
						</div>
						<div className="comprar-plan">
							<Button variant="none" className="boton-comprar">
								Comprar €15
							</Button>
						</div>
					</div>
				</div>
				<div className="carousel">
					<Carousel>
						<Carousel.Item>Excelente profesor. Te acompaña en todo momento</Carousel.Item>
						<Carousel.Item>Sus rutinas son increíbles.</Carousel.Item>
						<Carousel.Item>Marqué mi mejor tiempo en la maratón que preparé con él!</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
	}
}
