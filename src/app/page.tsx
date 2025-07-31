import { anton } from "@/styles/fonts";

export default function Home() {

  return (
    <>
      <section className={`
        relative flex flex-row justify-center items-start pt-32 z-10 
        h-dvh overflow-hiddenp
      `}>
        <h1 className={`${anton.className}
          text-[20rem] tracking-widest leading-none
          relative text-transparent
          bg-clip-text bg-radial-[at_50%_75%] from-neutral-400 to-black border
        `}>
          MUSTANG
        </h1>
        <div className={`
          w-[1400px] absolute z-20 left-1/2 translate-x-[-50%] top-[200px]
          bg-[url(/images/home/mustang3.png)] bg-cover bg-no-repeat aspect-video
          mask-radial-at-bottom
        `}></div>
        <div className={`
          absolute w-[2000px] aspect-square z-10  rounded-full top-[-200px]
          bg-radial from-neutral-700 to-black from-[-25%] to-80% left-1/2 translate-x-[-50%]
          -rotate-x-80 border-neutral-500/5 border-8
        `}></div>
      </section>
      <section className="h-dvh">
        Hola
      </section>
    </>
  )
}
