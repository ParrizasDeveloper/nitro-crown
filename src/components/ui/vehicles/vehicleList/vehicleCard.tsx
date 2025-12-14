import { MainCar } from "@/lib/definitions";

export default function VehicleCard({props}: {props: MainCar}) {
    return (
        <div className="border border-border rounded-lg p-4">
            <h2 className="text-2xl font-bold ">{props.brand}</h2>
            <h3 className="text-xl font-light">{props.model}</h3>
            <div className="text-xl">
                <div></div>
                <div>{props.price.toLocaleString("es-ES").replace(".", " ")}</div>
            </div>
        </div>
    )
}