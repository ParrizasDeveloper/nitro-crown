import { chillax, pangchang, teko } from "@/styles/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Specialties() {
    useGSAP(() => {
        gsap.to("#header-specialties", {
            scrollTrigger: {
                trigger: "#header-specialties",
                scrub: 0,
                start: "top bottom",
                end: "top top",
            },
            ease: "none",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
        })
    })

    return (
        <section className="relative">
            <div id="header-specialties" className={`
                absolute -top-[2px] w-full h-[calc(100%+1px)] bg-secondary-dark z-10 
                [clip-path:polygon(0%_0%,100%_0%,100%_10%,0%_30%)]
            `}></div>
            <div className="absolute inset-0 opacity-10" data-speed="0.5">
                <video
                    src="/videos/vehicles_from_drone.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative pt-40 z-2 h-screen w-screen px-20">
                <div className="grid grid-cols-7 gap-5 h-3 mb-20">
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                </div>
                <div className={`
                    ${pangchang.className}
                    leading-[1em] font-semibold
                    text-text text-[clamp(1rem,8dvw,20rem)]
                `}>
                    <div className="flex justify-end"><p>SPECIALIZED</p></div>
                    <div className="flex justify-end"><p>IN VEHICLE</p></div>
                    <div className="flex justify-end"><p>IMPORTS</p></div>
                </div>
            </div>
        </section>
    );
}
