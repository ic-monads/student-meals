import React, { useEffect, useState } from "react";
import RecipeList from "../../components/recipes/RecipeList";
import ExampleRecipeList from "../../interfaces/examples/ExampleRecipeList";
import { useAuth } from "../../contexts/AuthContext";
import { useDatabase } from "../../contexts/DatabaseContext";
import { Recipe } from "../../interfaces/recipes/Recipe";

function RecipesPage() {
    const defaultNumRecipes = 9;
    const recipeIncrementation = 9;
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [numRecipes, setNumRecipes] = useState(defaultNumRecipes);
    const [loading, setLoading] = useState(false);
    const { logout } = useAuth();
    const { testData } = useDatabase();

    const handleMoreClick = () => {
        setNumRecipes((numRecipes) => numRecipes + recipeIncrementation);
    }

    useEffect(() => {
        async function loadRecipes() {
            setLoading(true);
            try {
                const data = ExampleRecipeList.slice(0, numRecipes);
                console.log(numRecipes);
                setRecipes(data);
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
          <div className = "bg-amber-50">
              <div className="flex justify-end px-5 py-5">
                  <button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full"
                          onClick={() => logout()}>
                    Sign Out
                  </button>
              </div>
              <div className="flex justify-center">
                  <h1 className="font-sans text-5xl text-lg font-semibold text-center pb-10 justify-center">
                    Recipes
                  </h1>
              </div>
          </div>
          
          { testData && testData.map(t => {
                        return <p>{t.text}</p>
                    })}

          {loading && (
            <div className="center-page">
                <span className="spinner primary"></span>
                <p>
                    Loading...
                </p>
            </div>
          )}

          <RecipeList recipes={recipes}/>
          <div className = "py-5 grid place-items-center">
              <button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-4 px-4 rounded-full"
                      onClick={handleMoreClick}>
                  More Recipes
              </button>
          </div>
          

      </>
    )
}

export default RecipesPage;