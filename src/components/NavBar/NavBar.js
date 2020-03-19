import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import logo from "../../icons/logo.svg";
import "./NavBar.css";

const NavBar = ({ room, users }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">
        <img className="logo" alt="logo Icon" src={logo} />
        Real-Time <span className="text-primary">Chat</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          {users ? (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Utenti Online
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {users.map(({ name }) => (
                  <a className="d-flex justify-content-around c" key={name}>
                    {name}
                    <img className="img" alt="Online Icon" src={onlineIcon} />
                  </a>
                ))}
              </div>
            </li>
          ) : null}
          {room ? (
            <li className="nav-item">
              <a className="nav-link">
                Chat : {room} <img alt="Online Icon" src={onlineIcon} />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
