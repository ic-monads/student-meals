import React from "react";
import RecipeList from "../../components/recipes/RecipeList";
import ExampleRecipeList from "../../interfaces/examples/ExampleRecipeList";

function RecipesPage() {
    return (
        <>
          <div className="bg-amber-50">
            <h1 className="font-sans text-8xl text-lg font-semibold text-center pb-10">
              Recipes
            </h1>
            <RecipeList recipes={ExampleRecipeList}/>
          </div>
        </>
    )
}

export default RecipesPage;