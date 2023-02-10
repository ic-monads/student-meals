import React from "react";
import RecipeList from "../../components/recipes/RecipeList";
import ExampleRecipeList from "../../interfaces/examples/ExampleRecipeList";
import { useAuth } from "../../contexts/AuthContext";
import { useDatabase } from "../../contexts/DatabaseContext";

function RecipesPage() {
    const { logout } = useAuth();
    const { testData } = useDatabase();

    return (
        <>
            <h1>Recipes</h1>
            <button onClick={() => logout()}>Sign Out</button>

            { testData && testData.map(t => {
                return <p>{t.text}</p>
            })}
            
            <RecipeList recipes={ExampleRecipeList}/>
        </>
    )
}

export default RecipesPage;