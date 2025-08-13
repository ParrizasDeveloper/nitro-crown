import { MainCar } from "@/lib/definitions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

gsap.registerPlugin(useGSAP)

type Params = {
    mainCars: MainCar[] | null,
    direction: RefObject<"next" | "prev" | null>,
    isAnimating: RefObject<boolean>,
    lastTitle: RefObject<string | null>
    containerMainCars: RefObject<HTMLDivElement | null>,
    titleElement: RefObject<HTMLHeadingElement | null>
}

export function useSliderHomeCars({
    mainCars,
    direction,
    isAnimating,
    lastTitle,
    containerMainCars,
    titleElement
}: Params) {
    useGSAP(() => {
        if (!mainCars || direction.current === null || isAnimating.current) { return }
        isAnimating.current = true

        const cars: HTMLDivElement[] = gsap.utils.toArray('.mainCar')
        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false
            }
        })

        if (direction.current === "prev") {
            tl.from(cars, { x: "-100%", ease: "power3.inOut", duration: 0.9 })
            tl.from(cars[0], { scale: "0", opacity: 0, ease: "power3.inOut", duration: 0.9 }, "<=")
            tl.to(cars[1], { scale: 0, opacity: 0, ease: "power3.inOut", duration: 0.9 }, "<=")
            tl.set(cars[1], { scale: 1, opacity: 1 })
        }
        if (direction.current === "next") {
            tl.from(cars.slice(0, cars.length - 1), {
                x: "100%",
                scale: 0,
                opacity: 0,
                ease: "power3.inOut",
                duration: 0.9
            })
            tl.fromTo(cars[cars.length - 1], {
                position: "absolute",
                left: 0,
            }, {
                x: "-100%",
                scale: 0,
                opacity: 0,
                ease: "power3.inOut",
                duration: 0.9
            }, "<=")
            tl.set(cars[cars.length - 1], {
                position: "relative",
                x: 0,
                scale: 1,
                opacity: 1,
                duration: 0.9
            })
        }

        tl.to(titleElement.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                lastTitle.current = mainCars[0].model
                if (titleElement.current) {
                    titleElement.current.textContent = lastTitle.current.toUpperCase()
                }
            }
        }, 0)
        tl.set(titleElement.current, {
            y: 50,
            opacity: 0,
        }, ">")
        tl.to(titleElement.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.out"
        }, ">+0.5")

    }, { scope: containerMainCars, dependencies: [mainCars] })
} 