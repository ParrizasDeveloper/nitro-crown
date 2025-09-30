import { mainCars } from "@/data/mainCars"
import { MainCar } from "@/lib/definitions"
import { anton, chillax, teko } from "@/styles/fonts"
import { Calendar, Fuel, Gauge, SquareArrowUp } from "lucide-react"
import Image from "next/image"

export function CardVehicle({car}: {car: MainCar}) {
    return (
        <div className={`
            ${chillax.className}
            relative m-auto rounded-2xl overflow-hidden
        `}>
            <div className={`
                relative w-full aspect-square 
            `}>
                <Image 
                    src={car.imageBaseURL} 
                    alt={`preview of ${car.name}`}
                    fill
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-5 bg-gradient-to-tr from-secondary">
                <header className="mb-5">
                    <h3 className="text-2xl font-medium leading-[1em]">{car.brand}</h3>
                    <h4 className="leading-[1em] font-light">{car.model}</h4>
                </header>
                <section className="relative mb-5 font-medium inline-block">
                    <div className={`
                        absolute left-0 h-full w-full bg-primary
                        [clip-path:polygon(5%_0,10%_0,5%_100%,0_100%)]
                    `}></div>
                    <div className="mx-5">
                        {car.price.toLocaleString("es-ES")} € 
                    </div>
                </section>
                <section>
                    <ul className={`
                        ${teko.className} text-xl   
                    `}>
                        <li className="flex items-center gap-1.5">
                            <Calendar className="h-[1em] " />
                            <span className="translate-y-[0.1em]">{car.year}</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <SquareArrowUp className="h-[1em]" />
                            <span className="translate-y-[0.1em]">{car.kms.toLocaleString("es-ES")} KMS</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <Gauge className="h-[1em]" />
                            <span className="translate-y-[0.1em]">{car.transmision}</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <Fuel className="h-[1em]" />
                            <span className="translate-y-[0.1em]">{car.fuel}</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default function CardsVehicles() {
    return (
        <ul 
            className={`
                grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2.5 px-10 pb-header
            `}
        >
            {mainCars.map((car, index) => (
                <li key={index}>
                    <CardVehicle car={car} />
                </li>
            ))}
        </ul>
    )
}