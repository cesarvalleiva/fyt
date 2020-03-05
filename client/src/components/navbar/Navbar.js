import React from "react";
import { Link } from "react-router-dom";
// import AuthService from "../auth/AuthService";
import "./Navbar.scss";

function Navbar(props) {
  const handleLogout = e => {
    props.logout();
  };

  const { userInSession } = props;
  if (userInSession) {
    return (
        <nav className="nav-style">
          <ul>
            <div className="menu">
              <li>
                <Link to="/trainers">Trainers</Link>
              </li>
            </div>
            <div className="options">
              <li>
                {userInSession.name ? userInSession.name : userInSession.username}
              </li>
              <li>
                <Link to="" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
              <li>
                <img src={userInSession.imgPath} alt={userInSession.username} />
              </li>
            </div>
          </ul>

          <div className="header">
            <h2>Welcome {userInSession.username} - Ironhacker</h2>
          </div>
        </nav>
    );
  } else {
    return (
      <div>
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
