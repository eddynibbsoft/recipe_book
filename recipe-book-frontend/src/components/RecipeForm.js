// src/components/RecipeForm.js
import React, { useState } from 'react';
import './RecipeForm.css'; // Import the CSS file for styling

function RecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!title || !ingredients || !instructions) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setSuccess('');

    const recipe = { title, ingredients, instructions };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit the recipe. Status: ${response.status}`);
      }

      await response.json();
      setTitle('');
      setIngredients('');
      setInstructions('');
      setSuccess('Recipe added successfully!');
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div className="recipe-form">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List of ingredients"
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Cooking instructions"
          />
        </div>
        <button type="submit" className="submit-button">Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;
