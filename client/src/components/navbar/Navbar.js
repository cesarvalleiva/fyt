import React from 'react';
import { Link } from 'react-router-dom';
// import AuthService from "../auth/AuthService";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.scss';

function Navbar(props) {
	const handleLogout = (e) => {
		props.logout();
	};

	const { userInSession } = props;
	if (userInSession) {
		return (
			<nav className="nav-style">
				<ul>
					<div className="menu">
						<Link to="/">
							<img src="./images/logo.png" alt="FYT" className="logo" />
						</Link>
						<li>
							<Link to="/trainers" />
						</li>
					</div>
					<div className="options">
						<li>{userInSession.name ? userInSession.name : userInSession.username}</li>
						<li>
							<Dropdown>
								<Dropdown.Toggle variant="none">
									<img src={userInSession.imgPath} alt={userInSession.username} />
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Mi perfil</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Favoritos</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item href="#/action-3">
										<Link to="" onClick={handleLogout}>
											Cerrar sesión
										</Link>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</div>
				</ul>
			</nav>
		);
	} else {
		return (
			<div>
				<nav className="nav-style">
					<ul>
						<div className="menu">
							<Link to="/">
								<img src="./images/logo.png" alt="FYT" className="logo" />
							</Link>
						</div>
						<div className="login">
							<li>
								<Link to="/signup">Signup</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
						</div>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
