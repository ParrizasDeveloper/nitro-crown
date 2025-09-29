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
                relative  z-50 text-text overflow-hidden bg-primary-dark
                pt-header
            `}
            style={{ marginRight: `${scrollbarSize}px` }}
        >
            <header
                className={`
                    ${teko.className} text-6xl font-bold
                    flex gap-5 justify-center items-center px-16 mb-header
                `}
                
            >
                <div className="h-[1px] bg-gradient-to-l from-primary grow"></div>
                <p>OUR SELECTION</p>
                <div className="h-[1px] bg-gradient-to-r from-primary grow"></div>
            </header>
            <div 
                className={`
                
                `}
            >
                <CardsVehicles />
            </div>
        </section>
    )
}