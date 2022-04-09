import React from "react";
import "./App.css";
import RecipeView from "./Helper";

function RecipeList({ recipes, editRecipe, deleteRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => {
              return <RecipeView key={index} recipe={recipe} index={index} editRecipe={editRecipe} deleteRecipe={() => deleteRecipe(index)}/>
          })}
        </tbody>
      </table>
    </div>
  );
}
export default RecipeList;