import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Chat } from 'react-bootstrap-icons';
import { Heart } from 'react-bootstrap-icons';
import ShareIcon from '@material-ui/icons/Share';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';
import './Online.scss';

export default class Online extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trainers: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:4000/api/trainers').then((trainers) => {
			this.setState({
				...this.state,
				trainers: trainers.data
			});
		});
		// console.log(this.state.trainers.length);
	}

	render() {
		return (
			<div className="container">
				<div className="online">
					<div className="navigation">
						<h2>Profesores online</h2>
						<Form.Control type="text" className="buscar border-0" placeholder="Buscar" />
						<p className="title-filter">Objetivos</p>
						<ul>
							<li>
								Perder peso <span className="cantidad">(4)</span>
							</li>
							<li>
								Ganar masa muscular <span className="cantidad">(12)</span>
							</li>
							<li>
								Maratón <span className="cantidad">(7)</span>
							</li>
						</ul>
						<p className="title-filter">Tipo</p>
						<ul>
							<li>
								Gimnasio <span className="cantidad">(10)</span>
							</li>
							<li>
								En tu casa <span className="cantidad">(8)</span>
							</li>
						</ul>
					</div>
					<div className="container-trainers">
						<ul>
							{this.state.trainers &&
								this.state.trainers.map((trainer) => (
									<React.Fragment key={trainer._id}>
										<li className="list-trainers">
											<div className="img-profe">
												<Link
													to={
														this.props.loggedInUser ? (
															`/online/trainer/${trainer._id}`
														) : (
															`/login`
														)
													}
													className="link"
												>
													<img src={trainer.imgPath} alt={trainer.name} />
												</Link>
											</div>
											<div className="descripcion-profe">
												<Link
													to={
														this.props.loggedInUser ? (
															`/online/trainer/${trainer._id}`
														) : (
															`/login`
														)
													}
													className="link"
												>
													{trainer.name}
												</Link>
												<div className="planes">
													Perder peso, Ganar masa muscular, Perder peso, Ganar masa muscular,
													Perder peso, Ganar masa muscular, Perder peso, Ganar masa muscular
												</div>
												<div className="footer-card">
													<div className="stars">
														<StarFill />
														<StarFill />
														<StarFill />
														<StarHalf />
														<Star />
													</div>
													<div className="comments">
														19
														<div className="chat-icon">
															<Chat />
														</div>
													</div>
												</div>
											</div>
											<div className="precio-profe">
												<div className="social">
													<ShareIcon fontSize="small" /> <Heart />
												</div>
												<span>Desde: </span>
												<Link
													to={
														this.props.loggedInUser ? (
															`/online/trainer/${trainer._id}`
														) : (
															`/login`
														)
													}
													className="link"
												>
													<Button variant="none" className="button">
														€ 10
													</Button>
												</Link>
											</div>
										</li>
									</React.Fragment>
								))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
