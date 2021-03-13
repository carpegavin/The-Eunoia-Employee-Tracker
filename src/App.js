/* eslint-disable no-undef */
// import employees from "./employees.json";
import React, { Component } from "react";
import Wrapper from "./components/Container";
import Search from "./pages/search";
import Header from "./components/Header";
// import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  // state = {
  //   employees: employees.results,
  // };

  render() {
    return (
      <Wrapper>
        <Header />
        <Search />
      </Wrapper>
    );
  }
}
export default App;



//-----------Saving code below as reference for future projects-------------------


//-------------Hardcoded from employee json-------------------------------

// {this.state.employees.map(employee => (

//   <EmployeeCard
//     name={`${employee.name.first} ${employee.name.last}`}
//     phone={employee.phone}
//     email={employee.email}
//     picture={employee.picture.medium}
//   />

// ))}


//--------------------------Multiple Pages---------------------------

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Wrapper>
//           <Route exact path="./pages/search" component={Search} />
//         </Wrapper>
//       </div>
//     </Router>
//   );
// }

// export default App;
