import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div classname="column">
    <ul className="list-group search-results">
      {props.results ? props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result.picture.medium} className="img-fluid" />
          <p>{result.name.first} {result.name.last}</p>
          <p>{result.email}</p>
          <p>{result.cell}</p>
          <button className="btn btn-info">Ayy</button>
        </li>
      )): null}
    </ul>
    </div>
  );
}

export default SearchResults;
