import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="row">
      <div className="img-container">
        <img alt={props.name} src={props.picture} />
      </div>
      <table class="container">
        <tr>
          <th>
            <strong>Name:</strong> {props.name}
          </th>
          <th>
            <strong>Phone:</strong> {props.phone}
          </th>
          <th>
            <strong>Email:</strong> {props.email}
          </th>
        </tr>
      </table>
    </div>
  );
}

export default EmployeeCard;
