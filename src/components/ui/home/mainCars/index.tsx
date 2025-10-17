import { useScrollBar } from "@/context/ScrollbarProvider"
import { teko } from "@/styles/fonts"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CardsVehicles from "./cardsVehicles"
import { useGSAP } from "@gsap/react"

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

        gsap.from(".carousel-card-vehicle", {
            opacity: 0,
            y: 50,
            stagger: {
                from: "center",
                grid: "auto",
                each: 0.1
            },
            scrollTrigger: {
                trigger: "#container-main-slider",
                start: "30% bottom"
            }
        })
    })
    
    return (
        <section 
            className={`
                relative z-50 text-text overflow-hidden pt-20
                bg-primary-dark
            `}
            style={{ marginRight: `${scrollbarSize}px` }}
        >
            <header
                className={`
                    ${teko.className} text-6xl text-base
                    flex gap-5 justify-center items-center px-5 sm:px-16 mb-14 sm:mb-header
                `}
                
            >
                <div id="main-slider-left-line" className="h-[1px] bg-gradient-to-l from-base/60 grow"></div>
                <div id="header-title-main-slider" className="">
                    <p className="text-[clamp(2rem,10vw,5rem)] text-shadow-[0_0_10px_#0079f9] pt-[0.1em]">
                        OUR SELECTION
                    </p>
                </div>
                <div id="main-slider-right-line" className="h-[1px] bg-gradient-to-r from-base/60 grow"></div>
            </header>
            <div 
                className={`
                    bg-gradient-to-b from-primary-dark to-base translate-y-0.5
                    [transform:translateZ(0)]
                    will-change-transform
                `}
            >
                <CardsVehicles />
            </div>
        </section>
    )
}