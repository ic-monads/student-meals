import {Recipe} from "../recipes/Recipe";
import equipment from "./Equipment";
import ingredientQuantities from "./IngredientQuantities";
import instructions from "./Instruction";

let mashedPotatoes : Recipe = {
  id : "1",
  name : "Mashed Potatoes",
  time : "1 hour",
  difficulty : 1,
  cuisine : "English",
  ingredients : ingredientQuantities,
  equipment : equipment,
  images : ["examples/recipes/sausagemash.jpeg"],
  instructions : instructions
}

export default mashedPotatoes;

export const recipes = [mashedPotatoes]