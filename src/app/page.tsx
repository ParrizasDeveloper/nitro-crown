'use client'

import { anton } from "@/styles/fonts";
import { homeCars } from "@/data/homeCars";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MainCar = {
  brand: string,
  title: string,
  element: React.ReactElement
}

export default function Home() {
  const [mainCars, setMainCars] = useState<MainCar[] | null>(null);

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

  function slideLeft() {
    if(!mainCars) { return }

    const newArray = [...mainCars]
    const last = newArray.pop()
    if(last) {
      newArray.unshift(last)
    }
    setMainCars(newArray)
  }

  function slideRight() {
    if(!mainCars) { return }

    const newArray = [...mainCars]
    const first = newArray.shift()
    if (first) {
      newArray.push(first)
    }

    setMainCars(newArray)
  }

  return (
    <>
      <section className={`
        relative flex flex-row justify-center items-start pt-32 z-10 
        h-dvh overflow-hidden
      `}>
        <h1 className={`${anton.className}
          text-[20rem] tracking-widest leading-none
          relative text-transparent
          bg-clip-text bg-radial-[at_50%_75%] from-gold/50 via-70% via-neutral-800/50 to-black
        `}>
          {mainCars && mainCars[1].title}
        </h1>
        <div className={`
          absolute w-[calc(100%*3)] flex justify-around top-[220px] z-20
        `}>
          {
            mainCars?.map(car => (
              <div key={car.title} className={`w-[1400px]`}>
                {car.element}
              </div>
            ))
          }
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
