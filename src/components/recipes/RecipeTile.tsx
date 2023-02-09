import {Recipe} from "../../interfaces/recipes/Recipe";
import React from "react";
import { Link } from "react-router-dom";

const DifficultyRatingComponent = ({difficulty} : { difficulty : number }) => {
  return (
    <div className="difficultyRating">
      {Array.from(Array(5).keys()).map((star) => {
        return <span className={"star"}>{(star <= difficulty - 1) ? '\u2605' : '\u2606'}</span>
      })
      }
    </div>
  )
}

function RecipeTile( {recipe } : {recipe : Recipe}) {
  return (
    <div className="recipe-tile">
      <img src={recipe.images[0]} alt={recipe.name}/>
      <section className="recipe-info">
        <Link to={`/recipes/${recipe.id}`}>
          <h2 className="recipe-name">{recipe.name}</h2>
        </Link>
        <p>Time: {recipe.time}</p>
        <p>Difficulty: <DifficultyRatingComponent difficulty={recipe.difficulty} /></p>
        <p>Cuisine : {recipe.cuisine}</p>
      </section>
    </div>
  );
}

export default RecipeTile;