import { Ingredient } from "../../interfaces/recipes/Ingredient";
import { Quantity } from "../../interfaces/recipes/Quantity";

export default function Ingredients({ ingredients } : { ingredients : Map<Ingredient, Quantity> }) {
  return (
    <div className="rounded border-gray-300 border-2">
      <h2 className="text-3xl font-bold text-teal-400 text-center p-2">
        Ingredients
      </h2>
      <hr className="bg-gray-300"></hr>
      <ul className="grid max-w-sm grid-cols-1 mx-auto text-left divide-y divide-dashed">
        { ingredients && Array.from(ingredients).map(([i, q]) => {
          return (
            <li>
              {i.name} - {q.amount} {q.unit}
            </li>
          )
        })}
      </ul>
    </div>
  );
}