import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Employee Search:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employee"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Search here"
            id="employee"
          />
          <datalist id="employees">
            
            
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
//   {props.employees.map(employee => (
//     <option value={employee} key={employee} />
// ))}
  export default SearchForm;