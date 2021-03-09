/* eslint-disable no-undef */
import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Container";


// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Search from "./pages/search";

// import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  
  state = {
    employees: employees.results
  };

  render() {
    return (
      <Wrapper>
        {this.state.employees.map(employee => (
          <EmployeeCard
            name={`${employee.name.first} ${employee.name.last}`}
            phone={employee.phone}
            email={employee.email}
            picture={employee.picture.thumbnail}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/discover" component={Discover} />
//           <Route exact path="/search" component={Search} />
//         </Wrapper>
        
//       </div>
//     </Router>
//   );
// }

// export default App;
