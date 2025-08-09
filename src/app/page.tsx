'use client'

import { anton } from "@/styles/fonts";
import { homeCars } from "@/data/homeCars";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


type MainCar = {
  brand: string,
  title: string,
  element: React.ReactElement
}

export default function Home() {
  const [mainCars, setMainCars] = useState<MainCar[] | null>(null);
  const title = useRef(null)
  const containerMainCars = useRef(null)
  const direction = useRef<"next" | "prev" | null>(null)
  const isAnimating = useRef<boolean>(false)

  useEffect(() => {
    const cars = homeCars.map(car => ({
      brand: car.brand,
      title: car.model.toUpperCase(),
      element: <Image
        src={car.imageBaseURL}
        width={1776}
        height={1008}
        alt={car.name}
        quality={100}
      />
    }))

    setMainCars(cars)
  }, [])

  useGSAP(() => {
    if(!mainCars || direction.current === null) { return }
    isAnimating.current = true
    //isAnimating.current = false
    const cars: HTMLDivElement[] = gsap.utils.toArray('.mainCar')
    const tl = gsap.timeline({
      onComplete: () => {isAnimating.current = false}
    })

    if(direction.current === "prev") {
      tl.from(cars, { x: "-100%", ease: "power4.inOut" })
      tl.from(cars[0], { scale: "0", opacity: 0, ease: "power4.inOut" }, "<=")
      tl.to(cars[1], { scale: 0, opacity: 0, ease: "power4.inOut" }, "<=")
      tl.set(cars[1], { scale: 1, opacity: 1 })
    }
    if(direction.current === "next") {
      tl.from(cars.slice(0, cars.length - 1), {
        x: "100%",
        scale: 0,
        opacity: 0,
        ease: "power4.inOut" 
      })
      tl.fromTo(cars[cars.length - 1], {
        position: "absolute",
        left: 0,
      }, {
        x: "-100%",
        scale: 0,
        opacity: 0,
        ease: "power4.inOut" 
      }, "<=")
      tl.set(cars[cars.length - 1], {
        position: "relative",
        x: 0,
        scale: 1,
        opacity: 1,
      })
    }

    tl.from(title.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "sine.out"
    }, 0)

  }, {scope: containerMainCars, dependencies: [mainCars]})

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
    isAnimating.current = true

    const newArray = [...mainCars]
    const first = newArray.shift()
    if (first) {
      newArray.push(first)
    }

    setMainCars(newArray)
    direction.current = "next"
  }


  return (
    <>
      <section className={`
        relative flex flex-row justify-center items-start pt-32 z-10 
        h-dvh w-full overflow-hidden
      `}>
        <h1
          ref={title}
          className={`${anton.className}
            text-[20rem] tracking-widest leading-none
            relative text-transparent
            bg-clip-text bg-radial-[at_50%_75%] from-gold/50 via-70% via-neutral-800/50 to-black
          `}
        >
          {mainCars && mainCars[0].title}
        </h1>
        <div
          ref={containerMainCars}
          className={`
            absolute left-0 w-full flex top-[220px] z-20
          `}
        >
          {mainCars?.map(car => (
            <div key={car.title} className="mainCar w-full shrink-0">
              <div
                className={`w-[1400px] mx-auto`}
              >
                {car.element}
              </div>
            </div>
          ))}
        </div>
        <div className={`
          absolute w-[2000px] aspect-square z-10  rounded-full top-[-200px]
          bg-radial from-neutral-700 to-black from-[-25%] to-80% left-1/2 translate-x-[-50%]
          -rotate-x-80 border-gold/25 border-8
        `}></div>
        <div 
          className={`absolute left-0 top-1/2 -translate-y-1/2 text-gold/25 z-40 h-1/2 w-[300px] 
            flex justify-center items-center cursor-pointer
          `}
          onClick={slideLeft}
        >
          <ChevronLeft
            size={100}
            className="stroke-1"
          />
        </div>
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 text-gold/25 z-40 h-1/2 w-[300px] 
            flex justify-center items-center cursor-pointer
          `}
          onClick={slideRight}
        >
          <ChevronRight
            size={100}
            className="stroke-1"
          />
        </div>
      </section>
      <section className="h-dvh">
        Hola
      </section>
    </>
  )
}
