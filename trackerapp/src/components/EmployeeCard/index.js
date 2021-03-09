import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="column">
      <div className="img-container">
        <img alt={props.name} src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Picture:</strong> {props.picture}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default EmployeeCard;
