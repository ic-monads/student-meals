import { Ingredient } from "../../interfaces/recipes/Ingredient";
import { Quantity } from "../../interfaces/recipes/Quantity";

export default function Ingredients({ ingredients } : { ingredients : Map<Ingredient, Quantity> }) {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
      { ingredients && Array.from(ingredients).map(([i, q]) => {
        return <li>{i.name} - {q.amount} {q.unit}</li>
      }) }
      </ul>
    </div>
  );
}