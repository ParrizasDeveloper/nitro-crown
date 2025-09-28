import { useScrollBar } from "@/context/ScrollbarProvider"
import { roboto, teko } from "@/styles/fonts"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function MainCars() {
    const {scrollbarSize} = useScrollBar()
    
    return (
        <section className={`
            relative h-dvh z-50 text-text overflow-hidden bg-primary-dark
            pt-header
        `}>
            <header
                className={`
                    ${teko.className} text-6xl font-bold
                    flex gap-5 justify-center items-center px-16
                `}
                style={{marginRight: `${scrollbarSize}px`}}
            >
                <div className="h-[1px] bg-gradient-to-l from-primary grow"></div>
                <p>OUR SELECTION</p>
                <div className="h-[1px] bg-gradient-to-r from-primary grow"></div>
            </header>
            <div></div>
        </section>
    )
}