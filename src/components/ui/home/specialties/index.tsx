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
        <section className="relative overflow-hidden">
            <div id="header-specialties" className={`
                border
                absolute w-full h-screen bg-secondary-dark z-10 
                [clip-path:polygon(0%_0%,100%_0%,100%_10%,0%_30%)]
            `}></div>
            <div className="absolute inset-0 opacity-5" data-speed="0.5">
                <video
                    src="/videos/vehicles_from_drone.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative h-screen w-screen"></div>
        </section>
    );
}
