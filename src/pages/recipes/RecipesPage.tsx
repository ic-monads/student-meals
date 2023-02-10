import React from "react";
import RecipeList from "../../components/recipes/RecipeList";
import ExampleRecipeList from "../../interfaces/examples/ExampleRecipeList";

function RecipesPage() {
    return (
        <>
          <div className="bg-amber-50 pb-10">
            <h1 className="font-sans text-7xl text-lg font-semibold text-center">
              Recipes
            </h1>
          </div>
            
            <RecipeList recipes={ExampleRecipeList}/>
        </>
    )
}

export default RecipesPage;