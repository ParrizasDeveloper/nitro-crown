'use client'

import SliderCars from "@/components/ui/home/sliderCarsSection"

export default function Home() {
  

  return (
    <>
      <section className="relative z-10 h-dvh w-full overflow-hidden 2xl:min-h-[1000px]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute w-full h-dvh object-cover"
          >
            <source src="/videos/interior.webm" type="video/webm" />
          </video>
          <div className={`
            absolute w-full h-full bottom-0 bg-gradient-to-t from-black via-black/20 
            to-black
          `}></div>
      </section>
      
      <section className="h-dvh">
        Hola
      </section>
    </>
  )
}
