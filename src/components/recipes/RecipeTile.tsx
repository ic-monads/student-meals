import {Recipe} from "../../interfaces/recipes/Recipe";
import React from "react";
import { Link } from "react-router-dom";

// const DifficultyRatingComponent = (difficulty : number) => {
//   return (
//     <div className="difficultyRating">
//       {[...Array(5)].map((star) => {
//         return (
//           <span className={"star"} id={star}>&#9733</span>
//         );
//       })
//       }
//     </div>
//   )
// }

interface RecipeTileProps {
  recipe : Recipe;
}

function RecipeTile(props : RecipeTileProps) {
  const { recipe } = props;
  return (
    <div className="recipe-tile">
      <img src={recipe.images[0]} alt={recipe.name}/>
      <section className="recipe-info">
        <Link to={`/recipes/${recipe.id}`}>
          <h2 className="recipe-name">{recipe.name}</h2>
        </Link>
        <p>Time: {recipe.time}</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Cuisine : {recipe.cuisine}</p>
      </section>
    </div>
  );
}

export default RecipeTile;