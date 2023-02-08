import {Ingredient} from "../recipes/Ingredient";
import {Quantity} from "../recipes/Quantity";

let sausages : Ingredient = {
  name : "sausages",
  price : 2.95,
  image : "examples/ingredient/sausages.jpeg",
}

let sausagesQuantity : Quantity = {
  amount : 8,
  unit : "sausages",
}

let potatoes : Ingredient = {
  name : "potatoes",
  price : 2.05,
  image : "examples/ingredient/potatoes.jpeg",
}

let potatoesQuantity : Quantity = {
  amount : 1,
  unit : "kg",
}

let ingredientQuantities = new Map<Ingredient, Quantity>([
  [sausages, sausagesQuantity],
  [potatoes, potatoesQuantity],
])


export default ingredientQuantities;
