import { mainCars } from "@/data/mainCars"
import { MainCarWithoutId } from "@/lib/definitions"
import { chillax } from "@/styles/fonts"
import { Calendar, Fuel, Gauge, SquareArrowUp } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import styles from "./InfiniteSlider.module.css"
import { useEffect, useRef } from "react"

export function CardVehicle({car}: {car: MainCarWithoutId}) {
    const bgPrice = useRef<HTMLDivElement | null>(null)

    return (
        <div className={`
            ${chillax.className}
            relative
        `}>
            <div className={`
                relative w-full aspect-video
            `}>
                <Image 
                    src={car.images[0]}
                    alt={`preview of ${car.brand} ${car.model}`}
                    fill
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-5 bg-gradient-to-tr from-secondary to-base">
                <header className="mb-5">
                    <h3 className="text-2xl font-medium leading-[1em]">{car.brand}</h3>
                    <h4 className="leading-[1em] font-light">{car.model}</h4>
                </header>
                <section className="relative mb-5 font-medium inline-block text-[1.2rem]">
                    <div
                        ref={bgPrice}
                        className={`
                            absolute left-0 h-full w-full bg-primary
                            [clip-path:polygon(5%_0,10%_0,5%_100%,0_100%)]
                        `}
                    ></div>
                    <div className="relative z-10 my-1 mx-5">
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
                            <span className="">{car.transmission}</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <Fuel className="h-[1em]" />
                            <span className="">{car.fuelType}</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default function CardsVehicles() {
    return (
        <div id="container-main-slider" className="pb-header mx-auto">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={24}
                loop={true}
                speed={6000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false
                }}
                allowTouchMove={false}
                modules={[Autoplay]}
                className={`select-none max-w-[2000px] ${styles.infiniteSlider}`}
                style={{padding: "10px 0 50px 0"}}
            >
                {mainCars.map((car, index) => (
                    <SwiperSlide 
                        key={index} 
                        className={`
                            carousel-card-vehicle
                            rounded-2xl overflow-hidden border-secondary
                            shadow-xl/50 !w-[300px] sm:!w-[500px] 
                        `}
                    >
                        <CardVehicle car={car} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

