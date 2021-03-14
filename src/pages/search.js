import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Header from "../components/Header";

<Header />;
function Search() {
  const [searchState,] = useState({
    search: "",
    employees: [],
    results: [],
    error: "",
  });
  const [employee, setEmployee] = useState([]);
  const [results, setResults] = useState([]);
  //hook above!______________________________
  useEffect(() => {
    API.getRandomEmployee()
      .then((res) => setEmployee(res.data.results))
      .then((res) => setResults(employee))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    let searchTerm = event.target.value;

    let filtered = employee.filter((query) =>
      query.name.first.includes(searchTerm)
    );

    setResults(filtered);
    console.log(employee);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getEmployees(searchState.employees)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          // employees={searchState.employees}
        />
        <SearchResults results={results} />
      </Container>
    </div>
  );
}

export default Search;
