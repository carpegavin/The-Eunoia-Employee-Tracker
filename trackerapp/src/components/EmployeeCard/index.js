import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
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
            <strong>Role:</strong> {props.role}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default EmployeeCard;