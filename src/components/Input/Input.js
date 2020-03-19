import React from "react";

import "./input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="form-control mb-2 mr-2"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <button className="btn btn-primary send" onClick={e => sendMessage(e)}>
      Invia
    </button>
  </form>
);

export default Input;
