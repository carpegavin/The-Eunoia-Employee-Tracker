import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results ? props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result.picture.thumbnail} className="img-fluid" />
          <p>{result.name.first} {result.name.last}</p>
          <button className="btn btn-info">Ayy</button>
        </li>
      )): null}
    </ul>
  );
}

export default SearchResults;
