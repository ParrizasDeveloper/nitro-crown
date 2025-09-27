import { useScrollBar } from "@/context/ScrollbarProvider"
import { anton, roboto } from "@/styles/fonts"
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
                    ${roboto.className} text-3xl font-bold
                    flex gap-5 justify-center items-center px-16
                `}
                style={{marginRight: `${scrollbarSize}px`}}
            >
                <div className="border-t  grow"></div>
                <p>OUR SELECTION</p>
                <div className="border-t  grow"></div>
            </header>
        </section>
    )
}