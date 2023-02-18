import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { DatabaseProvider } from "./contexts/DatabaseContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import RecipePage from './pages/recipes/RecipePage';
import RecipesPage from './pages/recipes/RecipesPage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PrivateRoute from './components/auth/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><RecipesPage /></PrivateRoute>
  },
  {
    path: "recipe/:recipeId",
    element: <PrivateRoute><RecipePage /></PrivateRoute>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
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
