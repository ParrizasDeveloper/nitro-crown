import { useScrollBar } from "@/providers/ScrollbarProvider"
import { anton, chillax, pangchang, roboto, teko } from "@/styles/fonts"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CardsVehicles from "./cardsVehicles"
import { useGSAP } from "@gsap/react"
import BrandsSlider from "./brandsSlider"

gsap.registerPlugin(ScrollTrigger)

export default function MainCars() {
    const {scrollbarSize} = useScrollBar()

    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger: {
            trigger: "#header-title-main-slider",
            start: "top 75%",
        }})

        tl.from("#header-title-main-slider>p", {
            y: "100%",
            opacity: 0,
            ease: "power2.out",
            duration: 1
        })

        tl.from("#main-slider-left-line, #main-slider-right-line", {
            opacity: 0,
            ease: "power2.out"
        }, ">-0.3")

        gsap.from("#brands-slider", {
            scrollTrigger: {
                trigger: "#brands-slider",
                start: "top 75%",
            },
            opacity: 0,
            ease: "power2.out",
            duration: 1,
            y: 150
        })

        gsap.from("#main-cars-slider", {
            scrollTrigger: {
                trigger: "#main-cars-slider",
                start: "top 75%",
            },
            opacity: 0,
            ease: "power2.out",
            duration: 1,
            y: 150
        })
    })
    
    return (
        <section 
            className={`
                relative z-50 text-text overflow-hidden py-20
                bg-gradient-to-b from-base to-secondary-dark -mb-[1px]
            `}
            style={{ marginRight: `${scrollbarSize}px` }}
        >
            <header
                className={`
                    ${teko.className} text-xl
                    flex gap-5 justify-center items-center px-5 sm:px-16 mb-14 sm:mb-header
                `}
            >
                <div id="main-slider-left-line" className="h-[1px] bg-gradient-to-l from-text/50 max-w-[300px] grow"></div>
                <div id="header-title-main-slider" className="">
                    <p className="text-[clamp(2rem,10vw,5rem)] pt-[0.1em] text-text font-bold">
                        OUR SELECTION
                    </p>
                </div>
                <div id="main-slider-right-line" className="h-[1px] bg-gradient-to-r max-w-[300px] from-text/50 grow"></div>
            </header>
            <div>
                <BrandsSlider />
                <CardsVehicles />
            </div>
        </section>
    )
}