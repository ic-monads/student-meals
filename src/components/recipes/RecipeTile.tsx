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
    <div className="rounded-2xl border-slate-200 border-2 bg-white overflow-hidden">
      <div className={`bg-cover bg-center h-[200px] lg:h-[300px] p-2`} style={{backgroundImage: `url(${recipe.images[0]})` }}>
        {/* <img className="w-full" src={recipe.images[0]} alt={recipe.name}/> */}
        <p className="text-center font-sans text-sm text-white px-2 font-medium bg-teal-500 bg-opacity-50 rounded-full w-16">{recipe.cuisine}</p>
      </div>
      
      <div className="px-2 py-3 text-left">
        <Link to={`/recipe/${recipe.id}`}>
          <h2 className="text-2xl font-bold">
            {recipe.name}
          </h2>
        </Link>
        <div className="flex flex-row justify-between py-1">
          <p className="font-sans text-lg text-slate-600">Time: {recipe.time}</p>
          <p className="font-sans text-lg font-medium text-slate-600"><DifficultyRatingComponent difficulty={recipe.difficulty} /></p>
        </div>
      </div>
    </div>
  );
}

export default RecipeTile;