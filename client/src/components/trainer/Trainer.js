import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { Check } from 'react-bootstrap-icons';
import EuroIcon from '@material-ui/icons/Euro';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Button from 'react-bootstrap/Button';
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
		axios.get(`http://localhost:4000/api/trainer/${this.props.trainerId}`).then((trainer) => {
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
								<Star /> - 19 comentarios
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
                            <Button variant="success" className="boton-comprar">
                                <EuroIcon fontSize="small" /> 19
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
                            <Button variant="success" className="boton-comprar">
                                <EuroIcon fontSize="small" /> 10
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
                            <Button variant="success" className="boton-comprar">
                                <EuroIcon fontSize="small" /> 15
                            </Button>
                        </div>
					</div>
				</div>
			</div>
		);
	}
}
