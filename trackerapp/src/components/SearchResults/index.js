import React from "react";
import "./style.css";

function SearchResults(props) {
  const { results } = props;
  return (
  
  <table class="table table-striped table-bordered" id="sortTable">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Cell</th>
      </tr>
    </thead>
  
    <tbody>
      {results.map(result => (
        <tr key={result}>
          <td>{result.picture.medium}</td>
          <td>{result.name.first} {result.name.last}</td>
          <td>{result.email}</td>
          <td>{result.cell}</td>
        </tr>
    ))}
    </tbody>
  </table>
  );
}



export default SearchResults;


