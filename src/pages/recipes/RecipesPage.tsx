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
            <div className="bg-amber-50">
                <h1 className="font-sans text-7xl text-lg font-semibold text-center pb-10">
                    Recipes
                </h1>
            </div>
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