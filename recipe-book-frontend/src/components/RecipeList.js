// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css'; // Import the CSS file for styling

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        console.log('Fetching recipes from API...');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch recipes. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched recipes data:', data);
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      {loading && <p className="loading">Loading...</p>}
      {error && <div className="error">{error}</div>}
      <ul className="recipe-items">
        {recipes.map(recipe => (
          <li key={recipe.id} className="recipe-item">
            <Link to={`/recipes/${recipe.id}`} className="recipe-link">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
