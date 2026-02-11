import { MainCar } from "@/lib/definitions";
import { usePageTransition } from "@/providers/PageTransitionProvider";
import { Calendar, Fuel, Gauge, SquareArrowUp } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function VehicleCard({props}: {props: MainCar}) {
    const { startTransitionTo } = usePageTransition()

    function handleClickLink(event: React.MouseEvent<HTMLAnchorElement>, link: string) {
        event.preventDefault()
        startTransitionTo(link)
    }

    return (
        <Link 
            href={`/vehicles/${props.id}`} 
            onClick={(e) => handleClickLink(e, `/vehicles/${props.id}`)}
            className={`
                rounded-2xl p-2 group
                hover:scale-[1.01] md:hover:scale-105 hover:bg-text hover:text-black
                transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                max-w-[700px] bg-secondary-dark
            `}
        >
            <div className="overflow-hidden rounded-xl">
                <CldImage
                    src={props.images[0]} 
                    alt={`${props.brand} ${props.model}`} 
                    width={400} 
                    height={300} 
                    className="w-full object-cover  mb-4 group-hover:scale-110 transition-transform duration-300"
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
        </Link>
    )
}