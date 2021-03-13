import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <p>Click Name or Email to sort table alphabetically</p>
        
        <label htmlFor="employee">Search below by First Name or lower-case letter contained in name</label>

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
