import {Ingredient} from "../recipes/Ingredient";
import {Quantity} from "../recipes/Quantity";

let sausages : Ingredient = {
  id : "1",
  name : "sausages",
  price : 2.95,
  image : "examples/ingredient/sausages.jpeg",
}

let sausagesQuantity : Quantity = {
  id : "1",
  amount : 8,
  unit : "",
}

let potatoes : Ingredient = {
  id : "2",
  name : "potatoes",
  price : 2.05,
  image : "examples/ingredient/potatoes.jpeg",
}

let potatoesQuantity : Quantity = {
  id : "2",
  amount : 1,
  unit : "kg",
}

let ingredientQuantities = new Map<Ingredient, Quantity>([
  [sausages, sausagesQuantity],
  [potatoes, potatoesQuantity],
])


export default ingredientQuantities;
