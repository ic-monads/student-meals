import React from "react";
import RecipeList from "../../components/recipes/RecipeList";
import ExampleRecipeList from "../../interfaces/examples/ExampleRecipeList";

function RecipesPage() {
    return (
        <>
            <h1>Recipes</h1>
            <RecipeList recipes={ExampleRecipeList}/>
        </>
    )
}

export default RecipesPage;