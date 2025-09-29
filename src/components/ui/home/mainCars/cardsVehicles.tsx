import { mainCars } from "@/data/mainCars"
import { MainCar } from "@/lib/definitions"
import Image from "next/image"

export function CardVehicle({car}: {car: MainCar}) {
    return (
        <div className="relative aspect-[2/3] border m-auto">
            <div className="relative w-full h-2/3 border">
                <Image 
                    src={car.imageBaseURL} 
                    alt={`preview of ${car.name}`}
                    fill
                    className="object-cover w-full h-full"
                />
            </div>
            <header>

            </header>
            <section>

            </section>
            <section>

            </section>
        </div>
    )
}

export default function CardsVehicles() {
    return (
        <ul 
            className={`
                flex justify-center gap-10 px-10 mb-header
            `}
        >
            {mainCars.map((car, index) => (
                <li key={index} className="border overflow-auto max-w-[500px]">
                    <CardVehicle car={car} />
                </li>
            ))}
        </ul>
    )
}