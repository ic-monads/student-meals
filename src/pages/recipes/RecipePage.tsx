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
    <div className="bg-amber-50 h-screen">
      <h1 className="font-sans text-5xl text-lg font-semibold text-center pb-10">
        {recipe?.name}
      </h1>
      <img src={recipe?.images[0]} alt={recipe?.name}/>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Ingredients ingredients={recipe?.ingredients!} />
          <Equipment equipment={recipe?.equipment!} />
        </div>
        <Instructions instructions={recipe?.instructions!} />
      </div>
    </div>
  );
}