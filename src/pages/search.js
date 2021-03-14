import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Header from "../components/Header";

<Header />;
function Search() {
  
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true); // true means "ascending", when false "it is descended"

  //hook above!______________________________
  useEffect(() => {
    API.getRandomEmployee()
      .then((res) => setResults(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    let searchTerm = event.target.value;
    setSearch(searchTerm); // Set search. This will save what user types in search field
  };

  // Search by first name.
  const handleFilter = (query) => {
      return query.name.first.toLowerCase().includes(search.toLowerCase())
  }

  // Custom sort example: https://stackoverflow.com/questions/5002848/how-to-define-custom-sort-function-in-javascript
  const handleSort = (employeeA, employeeB) => {
    if(sort) { // if sort is true the this means sort is currently ascending. Therefore sort in descending
      if(employeeA.name.first < employeeB.name.first) {
        return -1;
      } else if(employeeA.name.first > employeeB.name.first) {
        return 1;
      }
    } else {
      if(employeeA.name.first < employeeB.name.first) {
        return 1;
      } else if(employeeA.name.first > employeeB.name.first) {
        return -1;
      }
    }

    return 0;
  }

  const toggleSort = ()=> {
    setSort(!sort); // toggle sort. This will either swap ASC to DESC OR swap DESC to ASC
  }

  // const handleFormSubmit = (event) => {
    // event.preventDefault();
    // API.getEmployees(searchState.employees)
    //   .then((res) => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch((err) => this.setState({ error: err.message }));
  // };

  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
        <SearchForm
          handleInputChange={handleInputChange}
        />
        <SearchResults 
          results={results} 
          handleFilter={handleFilter} 
          handleSort={handleSort} 
          sort={sort} 
          toggleSort={toggleSort} 
        />
      </Container>
    </div>
  );
}

export default Search;
