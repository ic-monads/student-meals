import React from "react";
import RecipeList from "../../components/recipes/RecipeList";
import ExampleRecipeList from "../../interfaces/examples/ExampleRecipeList";

function RecipesPage() {
    return (
        <>
          <div className="bg-amber-50">
            <h1 className="font-sans text-7xl font-semibold text-center mt-0 mb-2">
              Recipes
            </h1>
            <RecipeList recipes={ExampleRecipeList}/>
          </div>
        </>
    )
}

export default RecipesPage;