import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Home from './components/home/Home';
import Online from './components/online/Online';
import Trainer from './components/trainer/Trainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loggedInUser: null };
		this.service = new AuthService();
	}

	getUser = (userObj) => {
		this.setState({
			loggedInUser: userObj
		});
		// this.props.history.push('/');
	};

	logout = () => {
		this.service.logout().then(() => {
			this.setState({ loggedInUser: null });
		});
	};

	fetchUser() {
		return this.service
			.loggedin()
			.then((response) => {
				this.setState({
					loggedInUser: response
				});
			})
			.catch((err) => {
				this.setState({
					loggedInUser: false
				});
			});
	}

	componentDidMount() {
		this.fetchUser();
	}

	render() {
		const { loggedInUser } = this.state;
		return (
			<div className="App">
				{loggedInUser ? (
					<div>
						{/* <Redirect to="/" /> */}
						<Navbar userInSession={loggedInUser} logout={this.logout} />
						<Switch>
							<Route exact path="/" render={() => <Home {...this.state} />} />
							<Route exact path="/online" render={() => <Online {...this.state} />} />
							<Route exact path="/online/trainer/:id" render={props => { return <Trainer trainerId={props.match.params.id}></Trainer>; }}/>
						</Switch>
					</div>
				) : (
					<div>
						<Navbar />
						<Switch>
							<Route exact path="/" render={() => <Home {...this.state} />} />
							<Route exact path="/login" render={() => <Login getUser={(user) => this.getUser(user)} />} />
							<Route exact path="/signup" render={() => <Signup getUser={(user) => this.getUser(user)} />} />
						</Switch>
					</div>
				)}
			</div>
		);
	}
}

export default App;
