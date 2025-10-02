import { mainCars } from "@/data/mainCars"
import { MainCar } from "@/lib/definitions"
import { chillax } from "@/styles/fonts"
import { Calendar, Fuel, Gauge, SquareArrowUp } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export function CardVehicle({car}: {car: MainCar}) {
    return (
        <div className={`
            ${chillax.className}
            relative
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
            <div className="p-5 bg-gradient-to-tr from-secondary to-base">
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
                        flex flex-wrap gap-x-5
                    `}>
                        <li className="flex items-center gap-1.5">
                            <Calendar className="h-[1em] " />
                            <span className="">{car.year}</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <SquareArrowUp className="h-[1em]" />
                            <span className="">{car.kms.toLocaleString("es-ES")} KMS</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <Gauge className="h-[1em]" />
                            <span className="">{car.transmision}</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <Fuel className="h-[1em]" />
                            <span className="">{car.fuel}</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default function CardsVehicles() {
    return (
        <div className="pb-header  mx-auto">
            <Swiper
                modules={[Pagination, EffectCoverflow]}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    scale: .9,
                }}
                breakpoints={{
                    320: {
                        coverflowEffect: {},
                        
                    }
                }}
                effect="coverflow"
                pagination
                initialSlide={2}
                grabCursor
                spaceBetween={0}
                slidesPerView={"auto"}
                centeredSlides
                className="select-none"
                style={{padding: "10px 0 50px 0"}}
            >
                {mainCars.map((car, index) => (
                    <SwiperSlide 
                        key={index} 
                        className={`
                            border-2 rounded-2xl overflow-hidden border-secondary
                            shadow-xl/50  !w-[300px] sm:!w-[400px] 
                        `}
                    >
                        <CardVehicle car={car} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}