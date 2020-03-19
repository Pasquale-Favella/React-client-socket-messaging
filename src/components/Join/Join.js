import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import logo from "../../icons/logo.svg";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center loginCustom">
        <div className="jumbotron">
          <h5 className="text-center">
            <img className="loginLogo" alt="logo Icon" src={logo} />
          </h5>
          <div>
            <input
              placeholder="Nome"
              className="form-control"
              type="text"
              onChange={event => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="Nome Chat"
              className="form-control mt-20"
              type="text"
              onChange={event => {
                setRoom(event.target.value);
              }}
            />
          </div>
          <Link
            onClick={event => (!name || !room ? event.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="btn btn-primary btn-block" type="submit">
              Accedi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
