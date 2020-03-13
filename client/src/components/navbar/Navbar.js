import React from 'react';
import { Link } from 'react-router-dom';
// import AuthService from "../auth/AuthService";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bell } from 'react-bootstrap-icons';
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
						<li>
							<Dropdown>
								<Dropdown.Toggle variant="none">
									<Bell className="bell" />
								</Dropdown.Toggle>

								<Dropdown.Menu className="bell-down">
									<Dropdown.Item href="#/action-1">Mensajes</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li>
							{userInSession.role === 'user' ? (
								<Dropdown>
									<Dropdown.Toggle variant="none">
										{userInSession.name ? userInSession.name : userInSession.username}
										<img src={userInSession.imgPath} alt={userInSession.username} className="img-user" />
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="/profile">Mi perfil</Dropdown.Item>
										<Dropdown.Item href="/user">Mis planes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item href="#/action-3">
											<Link to="" onClick={handleLogout}>
												Cerrar sesión
											</Link>
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							) : (
								<Dropdown>
									<Dropdown.Toggle variant="none">
										{userInSession.name ? userInSession.name : userInSession.username}
										<img src={userInSession.imgPath} alt={userInSession.username} className="img-user" />
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="/user">Mi perfil</Dropdown.Item>
										<Dropdown.Item href="/admin">Mis alumnos</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item href="#/action-3">
											<Link to="" onClick={handleLogout}>
												Cerrar sesión
											</Link>
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							)}
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
								<Link to="/login" className="login-link">Login</Link>
							</li>
						</div>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
