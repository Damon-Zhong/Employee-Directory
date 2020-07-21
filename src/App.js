import React from 'react';
import './App.css';
import Filter from "./components/Filter"
import Search from "./components/Search"
import Employeedata from "./components/Employeedata"

function App() {
  return (
    <div className="container">
      <h1>Employee List</h1>
      <h3><b>Search</b></h3>
      <form>
        < Search />
        < Filter />
      </form>
        < Employeedata />
      {/* < Header />
      < Navbar />
      < Employeedata /> */}
    </div>
  );
}

export default App;
