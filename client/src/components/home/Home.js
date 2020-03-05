import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.scss';
import axios from 'axios';

class Home extends Component {
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
	}
	render() {
		return (
			<div className="all">
				<div className="container width">
					{this.state.trainers &&
						this.state.trainers.map((trainer) => (
							<React.Fragment key={trainer._id}>
								<Card style={{ width: '18rem' }}>
									<Link
										to={this.props.loggedInUser ? `/trainer/${trainer._id}` : `/login`}
										className="link"
									>
										{/* <Link to={`/trainer/${trainer._id}`} className="link"> */}
										<Card.Img variant="top" src={trainer.imgPath} alt={trainer.name} />
									</Link>
									<Card.Body>
										<Card.Title>
											<Link to={`/trainer/${trainer._id}`} className="link">
												{trainer.name}
											</Link>
										</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
										</Card.Text>
										<Button variant="success">Go somewhere</Button>
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
