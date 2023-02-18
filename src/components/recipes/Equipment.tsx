import { Equipment } from "../../interfaces/recipes/Equipment";

export default function EquipmentComponent({ equipment } : { equipment : Equipment[] }) {
    return (
        <div className="rounded border-gray-300 border-2">
          <h2 className="text-3xl font-bold text-teal-400 text-center p-2">
            Equipment
          </h2>
          <hr className="bg-gray-300 h-1/2"></hr>
          <ul className="grid max-w-sm grid-cols-1 mx-auto text-left divide-y divide-dashed">
            { equipment && equipment.map(e => {
                return (
                  <li>
                    {e.name}
                  </li>
                )
            })}
          </ul>
        </div>
    )
}