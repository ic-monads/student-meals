import React from 'react';
import logo from './logo.svg';
import RecipeTile from "./components/recipes/RecipeTile";
import mashedPotatoes from "./interfaces/examples/Recipe";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Student Meals</h1>
          <RecipeTile recipe={mashedPotatoes}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
