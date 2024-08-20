// src/components/RecipeDetail.js
import './RecipeDetail.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/${id}/`);

        if (!response.ok) {
          throw new Error(`Failed to fetch recipe. Status: ${response.status}`);
        }

        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!recipe) return <div className="no-recipe">No recipe found</div>;

  return (
    <div className="recipe-detail">
      <h2 className="recipe-title">{recipe.title}</h2>
      <div className="recipe-content">
        <div className="recipe-section">
          <h4>Ingredients</h4>
          <p>{recipe.ingredients}</p>
        </div>
        <div className="recipe-section">
          <h4>Instructions</h4>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
