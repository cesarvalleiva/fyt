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
						{/* SACAR */}
						{/* <img src='../../images/user.png' /> */}
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
							<Check /> uno
						</div>
						<div className="caracteristica">
							<Check /> dos
						</div>
						<div className="caracteristica">
							<Check /> tres
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
							<Check /> uno
						</div>
						<div className="caracteristica">
							<Check /> dos
						</div>
						<div className="caracteristica">
							<Check /> tres
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
							<Check /> uno
						</div>
						<div className="caracteristica">
							<Check /> dos
						</div>
						<div className="caracteristica">
							<Check /> tres
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
						<Carousel.Item>Comment 1</Carousel.Item>
						<Carousel.Item>Comment 2</Carousel.Item>
						<Carousel.Item>Comment 3</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
	}
}