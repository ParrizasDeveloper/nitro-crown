import { MainCar } from "@/lib/definitions";
import { Calendar, Fuel, Gauge, SquareArrowUp } from "lucide-react";
import { CldImage } from "next-cloudinary";

export default function VehicleCard({props}: {props: MainCar}) {
    return (
        <div className={`
            rounded-2xl p-2 group 
            hover:scale-105 hover:bg-text hover:text-black
            transition-all duration-300
            max-w-[700px] bg-secondary-dark
        `}>
            <div>
                <CldImage
                    src={props.images[0]} 
                    alt={`${props.brand} ${props.model}`} 
                    width={400} 
                    height={300} 
                    className="w-full object-cover rounded-xl mb-4"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-bold">{props.brand}</h2>
                <h3 className="text-xl font-light leading-4">{props.model}</h3>
                <div className="relative w-[150px] text-center border border-transparent text-xl my-5">
                    <div className={`
                    absolute h-full w-2.5 bg-primary -skew-x-18 z-0
                    group-hover:w-full transition-all duration-300
                `}></div>
                    <div className="relative z-10 my-1">
                        {props.price.toLocaleString("es-ES").replace(".", " ")} €
                    </div>
                </div>
                <ul className={`
                    flex flex-wrap gap-x-5
                `}>
                    <li className="flex items-center gap-1.5">
                        <Calendar className="h-[1em] " />
                        <span className="">{props.year}</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                        <SquareArrowUp className="h-[1em]" />
                        <span className="">{props.kms.toLocaleString("es-ES")} KMS</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                        <Gauge className="h-[1em]" />
                        <span className="">{props.transmission}</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                        <Fuel className="h-[1em]" />
                        <span className="">{props.fuelType}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}