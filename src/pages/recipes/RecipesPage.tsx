import React, { useEffect, useState } from "react";
import RecipeList from "../../components/recipes/RecipeList";
import ExampleRecipeList from "../../interfaces/examples/ExampleRecipeList";
import { Recipe } from "../../interfaces/recipes/Recipe";

function RecipesPage() {
    const defaultNumRecipes = 10;
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [numRecipes, setNumRecipes] = useState(defaultNumRecipes);
    const [loading, setLoading] = useState(false);

    const handleMoreClick = () => {
        setNumRecipes((numRecipes) => numRecipes + 10);
    }

    useEffect(() => {
        async function loadRecipes() {
            setLoading(true);
            try {
                const data = ExampleRecipeList.slice(0, numRecipes);
                if(numRecipes === defaultNumRecipes) {
                    setRecipes(data);
                } else {
                    setRecipes((recipes) => [...recipes, ...data]);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        loadRecipes();
    }, [numRecipes]);

    return (
        <>
            <h1>Recipes</h1>
            {loading && (
                <div className="center-page">
                <span className="spinner primary"></span>
                <p>
                    Loading...
                </p>
                </div>
            )}
            <RecipeList recipes={recipes}/>
            <div className="row">
                <div className="col-sm-12">
                    <div className="button-group fluid">
                        <button className="button default" onClick={handleMoreClick}>
                            More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipesPage;