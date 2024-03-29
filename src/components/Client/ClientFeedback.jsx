import React from "react";
import "./ClientFeedback.css";

const ClientFeedback = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </li>
  );
};

export default ClientFeedback;
