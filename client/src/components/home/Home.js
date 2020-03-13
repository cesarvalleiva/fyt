import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Chat } from 'react-bootstrap-icons';
import './Home.scss';
import axios from 'axios';
import Buscador from '../buscador/Buscador';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trainers: []
		};
	}

	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_URL}/trainers`).then((trainers) => {
			this.setState({
				...this.state,
				trainers: trainers.data
			});
		});
		// console.log(this.state.trainers.length);
	}
	render() {
		return (
			<div className="all">
				<div className="image-full">
					<Buscador />
				</div>
				<div className="container width">
					{this.state.trainers &&
						this.state.trainers.map((trainer) => (
							<React.Fragment key={trainer._id}>
								<Card className="card">
									<Link
										to={this.props.loggedInUser ? `/online/trainer/${trainer._id}` : `/login`}
										className="link"
									>
										<Card.Img variant="top" src={trainer.imgPath} alt={trainer.name} />
										{/* SACAR */}
										{/* <Card.Img variant="top" src='../images/user.png' alt={trainer.name} /> */}
									</Link>
									<Card.Body>
										<Card.Title>
											<Link
												to={this.props.loggedInUser ? `/online/trainer/${trainer._id}` : `/login`}
												className="link"
											>
												{trainer.name}
											</Link>
										</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
										</Card.Text>
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
									</Card.Body>
								</Card>
							</React.Fragment>
						))}
				</div>
			</div>
		);
	}
}

export default Home;
