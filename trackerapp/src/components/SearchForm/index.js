import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <p>Click Name to sort alphabetically</p>
        <label htmlFor="employee">Employee Search:</label>

        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type away!"
          id="employee"
        />
      </div>
    </form>
  );
}
//   {props.employees.map(employee => (
//     <option value={employee} key={employee} />
// ))}
export default SearchForm;
