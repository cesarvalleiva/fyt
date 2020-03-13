import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Profile.scss';

function Profile(props) {
	const handleLogout = (e) => {
		props.logout();
	};

	const { userInSession } = props;
	if (userInSession) {
		return (
			<div className="container">
				<div className="container-profile">
					<div className="profile">
						<img src={userInSession.imgPath} alt={userInSession.username} className="img-user" />
						<label htmlFor="" className="titulo">
							Nombre:{' '}
						</label>
						<Form.Control type="text" className="input" placeholder={userInSession.name} />
						<label htmlFor="" className="titulo">
							Telefono:{' '}
						</label>
						<Form.Control type="text" className="input" placeholder={userInSession.mobile} />
						<label htmlFor="" className="titulo">
							Email:{' '}
						</label>
						<Form.Control type="text" className="input" placeholder={userInSession.email} />
                        <label htmlFor="" className="titulo">
							Obejtivo:{' '}
						</label>
						<Form.Control type="text" className="input email" placeholder="Ganar masa muscular" />
						<Button variant="outline-success" className="btn-guardar">
							Guardar
						</Button>
					</div>
					<div className="avance">
						<img src="../images/progreso.png" alt="progreso" className="progreso" />
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
