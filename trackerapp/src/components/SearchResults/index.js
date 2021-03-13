import React from "react";
import "./style.css";

function SearchResults(props) {
  const { results } = props;
  return (
    <table class="table table-striped table-bordered" id="empTable">
      <thead>
        <tr>
          <th>Yearbook Photo</th>
          <th onclick="sortTable(0)">Name</th>
          <th onclick="sortTable(1)">Email</th>
          <th>Cell</th>
        </tr>
      </thead>

      <tbody>
        {results.map((result) => (
          <tr key={result}>
            <td>
              <img src={result.picture.medium} alt={result.name.first}></img>
            </td>
            <td>
              {result.name.first} {result.name.last}
            </td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
          </tr>
        ))}
      </tbody>
    </table>

    // function sortTable(n) {
    //     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    //     table = document.getElementById("empTable");
    //     switching = true;
    //     dir = "asc";
    //     while (switching) {
    //       switching = false;
    //       rows = table.rows;
    //       for (i = 1; i < (rows.length - 1); i++) {
    //         shouldSwitch = false;
    //         x = rows[i].getElementsByTagName("TD")[n];
    //         y = rows[i + 1].getElementsByTagName("TD")[n];
    //           if (dir == "asc") {
    //           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //             shouldSwitch = true;
    //             break;
    //           }
    //         } else if (dir == "desc") {
    //           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
    //             shouldSwitch = true;
    //             break;
    //           }
    //         }
    //       }
    //       if (shouldSwitch) {
    //         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //         switching = true;
    //         switchcount++;
    //       } else {
    //         if (switchcount == 0 && dir == "asc") {
    //           dir = "desc";
    //           switching = true;
    //         }
    //       }
    //     }
    //   }
  );
}

export default SearchResults;
