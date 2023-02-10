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

function RecipeTile( { recipe } : {recipe : Recipe}) {
  return (
    <div className="md:container md:mx-auto rounded border-amber-200 border-2 bg-amber-100">
      <img className="w-full" src={recipe.images[0]} alt={recipe.name}/>
      <div>
        <Link to={`/recipe/${recipe.id}`}>
          <h2 className="text-3xl font-bold underline text-teal-400 hover:text-teal-300 text-center">
            {recipe.name}
          </h2>
        </Link>
        <p className="font-sans text-lg font-semibold text-center">Time: {recipe.time}</p>
        <p className="font-sans text-lg font-semibold text-center"><DifficultyRatingComponent difficulty={recipe.difficulty} /></p>
        <p className="font-sans text-lg font-semibold text-center">Cuisine : {recipe.cuisine}</p>
      </div>
    </div>
  );
}

export default RecipeTile;