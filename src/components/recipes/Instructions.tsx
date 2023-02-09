import { Instruction } from "../../interfaces/recipes/Instruction";

export default function Instructions({ instructions } : { instructions : Instruction[] }) {
  return (
    <div>
      <h2>Instructions</h2>
      <ol>
      {
        instructions && instructions.map(i => {
          return <li>{i.text}</li>
        })
      }
      </ol>
    </div>
  )
}