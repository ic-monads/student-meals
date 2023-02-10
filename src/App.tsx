import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { DatabaseProvider } from "./contexts/DatabaseContext";
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
    <AuthProvider>
      <DatabaseProvider>
        <RouterProvider router={router} />
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
