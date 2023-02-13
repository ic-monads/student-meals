import { Instruction } from "../../interfaces/recipes/Instruction";

export default function Instructions({ instructions } : { instructions : Instruction[] }) {
  return (
    <div className="rounded border-gray-300 border-2">
      <h2 className="text-3xl font-bold text-teal-400 text-center p-2">
        Instructions
      </h2>
      <hr className="bg-gray-300"></hr>
      <ol className="grid max-w-sm grid-cols-1 mx-auto text-left divide-y divide-dashed">
      {
        instructions && instructions.map(i => {
          return <li>{i.text}</li>
        })
      }
      </ol>
    </div>
  )
}