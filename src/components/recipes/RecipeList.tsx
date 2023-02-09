import React from "react";
import { Recipe } from "../../interfaces/recipes/Recipe";
import RecipeTile from "./RecipeTile";

interface RecipeProps {
    recipes: Recipe[]
}

function RecipeList(props: RecipeProps) {
    const { recipes } = props;
    const items = recipes.map(recipe => (
        <div key={recipe.id} className="cols-sm">
            <RecipeTile recipe={recipe}/>
        </div>
    ));
    return (
        <div className="row">
            {items}
        </div>
    )
}

export default RecipeList;