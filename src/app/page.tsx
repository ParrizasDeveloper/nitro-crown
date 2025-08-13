'use client'

import { anton } from "@/styles/fonts";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useMainCars from "@/hooks/useMainCars";
import { useSliderHomeCars } from "@/hooks/gsap/useSliderHomeCars";

export default function Home() {
  const { mainCars, direction, isAnimating, lastTitle, slideLeft, slideRight } = useMainCars()
  const titleElement = useRef<HTMLHeadingElement>(null)
  const containerMainCars = useRef<HTMLDivElement>(null)

  useSliderHomeCars({
    mainCars, direction, isAnimating, lastTitle, containerMainCars, titleElement
  })

  return (
    <>
      <section className={`
        relative flex flex-row justify-center items-start pt-32 z-10 
        h-dvh w-full overflow-hidden
      `}>
        <h1
          ref={titleElement}
          className={`${anton.className}
            2xl:text-[18rem] 2xl:top-0 tracking-widest leading-none relative text-transparent bg-clip-text 
            bg-radial-[at_50%_75%] from-gold/50 via-70% via-neutral-800/50 to-black
            xl:text-[15rem] xl:top-[100px] lg:text-[12rem] lg:top-[210px]
          `}
        >
          {lastTitle.current?.toUpperCase()}
        </h1>
        <div
          ref={containerMainCars}
          className={`
            absolute left-0 w-full flex top-[220px] z-20
          `}
        >
          {mainCars?.map(car => (
            <div key={car.model} className="mainCar w-full shrink-0">
              <div
                className={`
                  relative mx-auto 2xl:w-[1400px] 2xl:top-[10px] xl:w-[900px] 
                  xl:top-[110px] lg:w-[600px] lg:top-[215px]
                  `}
              >
                <Image
                  src={car.imageBaseURL}
                  width={1776}
                  height={1008}
                  alt={car.name}
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={`
          absolute 2xl:w-[2000px] aspect-square z-10  rounded-full 2xl:top-[-200px]
          bg-radial from-neutral-700 to-black from-[-25%] to-80% left-1/2 translate-x-[-50%]
          -rotate-x-80 border-neutral-500/10 border-8 xl:w-[1400px] xl:top-[0]
          lg:w-[1100px]
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
