'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { colorByAvailability, MainCar } from "@/lib/definitions"
import { usePageTransition } from "@/providers/PageTransitionProvider"
import { useScrollBar } from "@/providers/ScrollbarProvider"
import { chillax, pangchang, roboto } from "@/styles/fonts"
import { ArrowLeft, ArrowRight, CalendarDays, CarFront, Fuel, Gauge, Handshake, SquareArrowRight } from "lucide-react"
import { CldImage } from "next-cloudinary"
import Link from "next/link"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/thumbs"

gsap.registerPlugin(ScrollTrigger)

export default function VehicleClient({ car }: { car: MainCar }) {
    const { startTransitionTo } = usePageTransition()
    const {scrollbarSize} = useScrollBar()
    const contentRef = useRef<HTMLDivElement>(null)
    const panelRef = useRef<HTMLElement>(null)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

    useGSAP(() => {
        const content = contentRef.current
        const panel = panelRef.current

        if (!content || !panel || window.matchMedia("(max-width: 1024px)").matches) return

        const headerOffset = getComputedStyle(document.documentElement).getPropertyValue("--spacing-header").trim() || "0px"
        const trigger = ScrollTrigger.create({
            trigger: content,
            start: `top top+=40px`,
            end: `bottom bottom`,
            pin: panel,
            pinSpacing: false,
            invalidateOnRefresh: true,
        })

        return () => trigger.kill()
    }, { dependencies: [car.images.length] })

    function handleClickLink(event: React.MouseEvent<HTMLAnchorElement>, link: string) {
        event.preventDefault()
        startTransitionTo(link)
    }

    return (
        <div 
            className={`
                ${roboto.className}
                text-text min-h-dvh pt-header
            `}
            style={{paddingRight: scrollbarSize}}
        >
            <section className="px-5">
                <Link
                    className="inline-flex items-center justify-center gap-6 mt-5 mb-12 group h-11 w-62.5"
                    href="/vehicles"
                    onClick={(e) => handleClickLink(e, "/vehicles")}
                >
                    <div className={`
                    bg-primary p-2 group-hover:p-0 w-11 h-11 group-hover:w-0 group-hover:h-0 
                    rounded-lg transition-all duration-300
                `}>
                        <ArrowLeft className="w-full h-full stroke-1" />
                    </div>
                    <span>Return to vehicles list</span>
                    <div className={`
                    bg-primary p-0 group-hover:p-2 w-0 h-0 group-hover:w-11 group-hover:h-11
                    rounded-lg transition-all duration-300
                `}>
                        <ArrowLeft className="w-full h-full stroke-1" />
                    </div>
                </Link>
                <div ref={contentRef} className="relative grid grid-cols-2 items-start gap-5">
                    <section className="flex flex-col">
                        {car.images.map((image) => (
                            <CldImage 
                                key={image} 
                                src={image}
                                width={2240}
                                height={1256}
                                className="w-full h-full object-cover rounded-xl mb-2.5"
                                alt="Image of the vehicle"
                            />
                        ))}
                    </section>
                    <section ref={panelRef} className="px-28">
                        <h1 className={`${pangchang.className} text-4xl font-bold`}>
                            {car.brand}
                        </h1>
                        <h2 className={`${pangchang.className} text-4xl`}>{car.model}</h2>
                        <div className="relative inline-block my-10 px-8 py-1">
                            <div className="absolute bg-primary inset-0 z-0 -skew-x-18"></div>
                            <span className="relative text-2xl font-semibold">
                                {car.price.toLocaleString("es-ES").replace(".", " ")} €
                            </span>
                        </div>
                        <div className="mb-14">
                            {car.description}
                        </div>
                        <div className={`${chillax.className} text-md mb-10`}>
                            <div className="flex justify-between border-y border-text/50 py-5">
                                <div className="flex items-center gap-5">
                                    <CarFront /> MODEL
                                </div>
                                <div>
                                    {car.brand} {car.model}
                                </div>
                            </div>
                            <div className="flex justify-between border-b border-text/50 py-5">
                                <div className="flex items-center gap-5">
                                    <CalendarDays /> YEAR
                                </div>
                                <div>
                                    {car.year}
                                </div>
                            </div>
                            <div className="flex justify-between border-b border-text/50 py-5">
                                <div className="flex items-center gap-5">
                                    <SquareArrowRight /> MILEAGE
                                </div>
                                <div>
                                    {car.kms.toLocaleString("es-ES").replace(".", " ")} KMS
                                </div>
                            </div>
                            <div className="flex justify-between border-b border-text/50 py-5">
                                <div className="flex items-center gap-5">
                                    <Fuel /> FUEL
                                </div>
                                <div>
                                    {car.fuelType}
                                </div>
                            </div>
                            <div className="flex justify-between border-b border-text/50 py-5">
                                <div className="flex items-center gap-5">
                                    <Gauge /> TRANSMISSION
                                </div>
                                <div>
                                    {car.transmission}
                                </div>
                            </div>
                            <div className="flex justify-between border-b border-text/50 py-5">
                                <div className="flex items-center gap-5">
                                    <Handshake /> Availability
                                </div>
                                <div className={`${colorByAvailability[car.availability]} text-shadow-[0_0_5px_#000000] px-2 py-1 rounded-lg text-white`}>
                                    {car.availability}  
                                </div>
                            </div>
                        </div>
                        <div className={`${chillax.className} flex justify-end`}>
                            <Link 
                                href={`/about?car=${car.id}`} 
                                onClick={(e) => handleClickLink(e, `/about?car=${car.id}`)}
                                className={`
                                    flex rounded-lg px-6 py-4 bg-primary gap-5
                                    text-white font-medium
                                    hover:bg-text hover:text-primary transition-colors 
                                    duration-300 group
                                `}
                            >
                                <span>I'm interested</span>
                                <ArrowRight className="-rotate-45 stroke-1 group-hover:rotate-0 transition-transform duration-300" />
                            </Link>
                        </div>
                    </section>
                </div>

            </section>
            <section className="relative px-5 mb-5">
                <Swiper
                    slidesPerView={1}
                    modules={[Thumbs]}
                    thumbs={{swiper: thumbsSwiper}}
                    className="rounded-xl relative h-dvh"
                >
                    {car.images.map((image) => (
                        <SwiperSlide key={image}>
                            <CldImage
                                src={image}
                                width={2240}
                                height={1256}
                                className="w-full h-full object-cover"
                                alt="Image of the vehicle"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`
                    absolute bottom-2 w-150 left-1/2 -translate-x-1/2 p-2 rounded-xl
                    z-10 bg-base/60 backdrop-blur-sm
                    
                `}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        watchSlidesProgress
                        spaceBetween={10}
                        slidesPerView={car.images.length >= 5 ? 5 : car.images.length}
                        modules={[Thumbs]}
                    >
                        {thumbsSwiper && car.images.map((image) => (
                            <SwiperSlide key={image} onClick={() => thumbsSwiper.slideTo(car.images.indexOf(image))}>
                                <CldImage
                                    src={image}
                                    width={2240}
                                    height={1256}
                                    className="w-full h-full rounded-xl cursor-pointer"
                                    alt="Image of the vehicle"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    )
}
