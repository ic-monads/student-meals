import React from 'react';
import RecipeTile from "./components/recipes/RecipeTile";
import mashedPotatoes from "./interfaces/examples/Recipe";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Student Meals</h1>
        <RecipeTile recipe={mashedPotatoes}/>
      </div>
    </Router>
  );
}

export default App;
