import { homeCars } from "@/data/homeCars";
import { MainCar } from "@/lib/definitions";
import { useEffect, useRef, useState } from "react";



export default function useMainCars() {
    const [mainCars, setMainCars] = useState<MainCar[] | null>(null);
    const lastTitle = useRef<string | null>(null)
    const isAnimating = useRef<boolean>(false)
    const direction = useRef<"next" | "prev" | null>(null)

    useEffect(() => {
        const cars = homeCars
        setMainCars(cars)
        lastTitle.current = cars[0].model
    }, [])

    function slideLeft() {
        if(!mainCars || isAnimating.current) { return }
    
        const newArray = [...mainCars]
        const last = newArray.pop()
        if(last) {
          newArray.unshift(last)
        }
    
        setMainCars(newArray)
        direction.current = "prev"
    }
    
    function slideRight() {
        if(!mainCars || isAnimating.current) { return }

        const newArray = [...mainCars]
        const first = newArray.shift()
        if (first) {
            newArray.push(first)
        }

        setMainCars(newArray)
        direction.current = "next"
    }

    return { mainCars, lastTitle, isAnimating, direction, slideLeft, slideRight }
}
