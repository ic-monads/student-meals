import { Equipment } from "../../interfaces/recipes/Equipment";

export default function EquipmentComponent({ equipment } : { equipment : Equipment[] }) {
    return (
        <div>
            <h2>Equipment</h2>
            { equipment && equipment.map(e => {
                return <li>{e.name}</li>
            }) }
        </div>
    )
}