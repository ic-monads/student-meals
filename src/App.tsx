import React from 'react';
import RecipeTile from "./components/recipes/RecipeTile";
import mashedPotatoes from "./interfaces/examples/Recipe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import RecipePage from './pages/recipes/RecipePage';
import RecipesPage from './pages/recipes/RecipesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipesPage />
  },
  {
    path: "recipe/:recipeId",
    element: <RecipePage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
