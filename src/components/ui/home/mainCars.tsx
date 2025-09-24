import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function MainCars() {

    
    return (
        <section className="relative h-dvh z-50 text-text overflow-hidden opacity-0">
            <div className={`
                relative h-full bg-primary-dark
            `}>
                
            </div>
        </section>
    )
}