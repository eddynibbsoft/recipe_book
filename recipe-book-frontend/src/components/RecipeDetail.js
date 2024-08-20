// src/components/RecipeDetail.js
import React, { useState, useEffect } from 'react';

function RecipeDetail({ match }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/api/recipes/${match.params.id}/`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [match.params.id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h4>Ingredients</h4>
      <p>{recipe.ingredients}</p>
      <h4>Instructions</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
