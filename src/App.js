import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  
  const deleteRecipe = (indexToDelete) => setRecipes((currentRecipes) => currentRecipes.filter((recipeId, index) => index !== indexToDelete));

  const editRecipe = (indexToEdit, updatedRecipe) => setRecipes((currentRecipes) => currentRecipes.map((recipe, index) => {
    if(index === indexToEdit) return updatedRecipe;
    else return recipe; 
  }));

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes} 
        deleteRecipe={deleteRecipe}
        editRecipe={editRecipe}
      />
      <RecipeCreate saveRecipe={createRecipe} />
    </div>
  );
}

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

export default App;
