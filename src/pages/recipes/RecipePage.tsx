import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../../interfaces/examples/Recipe";
import { Recipe } from "../../interfaces/recipes/Recipe";
import Ingredients from "../../components/recipes/Ingredients";
import Equipment from "../../components/recipes/Equipment";
import Instructions from "../../components/recipes/Instructions";

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    setRecipe(recipes.find(r => r.id == recipeId));
  }, [])

  return(
    <div>
      <h1>{recipe?.name}</h1>
      <p>Difficulty: {recipe?.difficulty}</p>
      <p>Cuisine: {recipe?.cuisine}</p>
      <p></p>
      <Ingredients ingredients={recipe?.ingredients!} />
      <Equipment equipment={recipe?.equipment!} />
      <Instructions instructions={recipe?.instructions!} />
    </div>
  );
}