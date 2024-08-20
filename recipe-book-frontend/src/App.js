// import logo from './logo.svg';
// import './App.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Book</h1>
        <Routes>
          <Route path="/" exact element={<RecipeList />} />
          <Route path="/recipes/:id" element={< RecipeDetail />} />
          <Route path="/add-recipe" element={< RecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
