'use client'

import { anton } from "@/styles/fonts";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useMainCars from "@/hooks/useMainCars";
import { useSliderHomeCars } from "@/hooks/gsap/useSliderHomeCars";
import { ArrowLeft, ArrowRight } from "@/assets/arrows";

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
        felx content-center pt-32 z-10 h-dvh w-full overflow-hidden 2xl:min-h-[1000px]
      `}>
        <div className={`
          relative flex flex-col justify-center items-center 2xl:h-[888px] xl:h-[700px]
          lg:h-[600px]
        `}>
          <h1
            ref={titleElement}
            className={`${anton.className}
            relative lg:absolute 2xl:text-[18rem] 2xl:top-0 tracking-widest leading-none text-transparent 
            bg-clip-text bg-radial-[at_50%_75%] from-gold/50 via-70% via-neutral-800/50 
            to-black xl:text-[15rem] xl:top-[100px] lg:text-[12rem] lg:top-[100px] md:text-[10rem]
            sm:text-[8rem] text-[5rem]
          `}
          >
            {lastTitle.current?.toUpperCase()}
          </h1>
          <div
            ref={containerMainCars}
            className={`
            relative lg:absolute w-full flex lg:top-[80px] z-20
          `}
          >
            {mainCars?.map(car => (
              <div key={car.model} className="mainCar w-full shrink-0">
                <div
                  className={`
                  relative mx-10 lg:mx-auto 2xl:w-[1400px] 2xl:top-[10px] xl:w-[900px] 
                  xl:top-[110px] lg:w-[600px] lg:top-[100px]
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
            hidden lg:block absolute 2xl:w-[2000px] aspect-square z-10  rounded-full 2xl:top-[-340px]
            bg-radial from-neutral-700 to-black from-[-25%] to-80% left-1/2 translate-x-[-50%]
            -rotate-x-80 border-neutral-500/5 border-8 xl:w-[1400px] xl:top-[-140px]
            lg:w-[1100px] lg:top-[-130px]
          `}></div>


          <div className={`
            relative lg:absolute z-30 flex justify-center gap-15 lg:gap-0 lg:justify-between w-full lg:px-10
          `}>
              <ArrowLeft
                onClick={slideLeft}
                onMouseEnter={}
                className="h-20 cursor-pointer"
              />
              <ArrowRight
                onClick={slideRight}
                className="h-20 cursor-pointer"
              />
          </div>
        </div>
      </section>
      <section className="h-dvh">
        Hola
      </section>
    </>
  )
}
