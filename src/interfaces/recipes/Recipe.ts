import {Equipment} from "./Equipment";
import {Ingredient} from "./Ingredient";
import {Instruction} from "./Instruction";
import {Quantity} from "./Quantity";

export interface Recipe {
  id : number | undefined;
  name : string;
  time : string;
  difficulty : number; // ?/5
  cuisine : string;
  ingredients : Map<Ingredient, Quantity>
  equipment : Equipment[];
  images : string[];
  instructions : Instruction[];
}