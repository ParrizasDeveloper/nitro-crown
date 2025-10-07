import { useScrollBar } from "@/context/ScrollbarProvider"
import { teko } from "@/styles/fonts"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CardsVehicles from "./cardsVehicles"

gsap.registerPlugin(ScrollTrigger)

export default function MainCars() {
    const {scrollbarSize} = useScrollBar()
    
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
                    ${teko.className} text-6xl font-bold
                    flex gap-5 justify-center items-center px-5 sm:px-16 mb-14 sm:mb-header
                `}
                
            >
                <div className="h-[1px] bg-gradient-to-l from-primary grow"></div>
                <p className="text-[clamp(2rem,10vw,5rem)]">OUR SELECTION</p>
                <div className="h-[1px] bg-gradient-to-r from-primary grow"></div>
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