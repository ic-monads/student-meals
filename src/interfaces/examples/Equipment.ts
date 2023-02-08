import {Equipment} from "../recipes/Equipment";

let saucePan : Equipment = {
  id : 1,
  name : "Sauce pan",
  image : "examples/equipment/saucepan.jpeg",
}

let fryingPan : Equipment = {
  id  : 2,
  name : "Frying pan",
    image : "examples/equipment/fryingpan.jpeg",
}

let knife : Equipment = {
  id : 3,
  name : "Knife",
  image : "examples/equipment/knife.jpeg",
}

let equipment : Equipment[] = [
  saucePan, fryingPan, knife];
export default equipment