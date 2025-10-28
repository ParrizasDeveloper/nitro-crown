import { chillax, pangchang, teko } from "@/styles/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CarFront, KeySquare, PaintBucket, Search } from "lucide-react";
import { RoundedPrimaryButton } from "../../material/buttons";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText)

export default function Specialties() {
    useGSAP(() => {
        const mm = gsap.matchMedia()

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

        mm.add("(min-width: 1024px)", () => {
            gsap.from("#header-lines-specialties>div", {
                scrollTrigger: {
                    trigger: "#header-lines-specialties",
                    start: "top 60%",
                },
                stagger: {
                    from: "end",
                    each: 0.1,
                },
                opacity: 0,
                x: -100
            })
        })

        let split = SplitText.create(".title-specialties", {
            type: "lines"
        })

        gsap.from(split.lines, {
            x: 100,
            opacity: 0,
            autoAlpha: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".title-specialties",
                start: "top 60%"
            }
        })
        
    })

    return (
        <section className="relative text-text pb-40">
            <div id="header-specialties" className={`
                absolute -top-[2px] w-full h-[calc(100%+1px)] bg-secondary-dark z-10 
                [clip-path:polygon(0%_0%,100%_0%,100%_10%,0%_30%)]
            `}></div>
            <div className="absolute min-h-screen inset-0 opacity-10" data-speed="0.5">
                <video
                    src="/videos/vehicles_from_drone.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative pt-40 z-2 w-screen px-10 lg:px-20">
                <div id="header-lines-specialties" className="grid grid-cols-5 lg:grid-cols-7 gap-5 h-3 mb-20">
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg]"></div>
                    <div className="bg-text -skew-x-[45deg] hidden lg:block"></div>
                    <div className="bg-text -skew-x-[45deg] hidden lg:block"></div>
                </div>
                <div className={`
                    ${pangchang.className} title-specialties
                    leading-[1em] font-semibold
                    text-[clamp(1rem,8dvw,20rem)] mb-20
                `}>
                    <div className="flex justify-end">
                        <p>SPECIALIZED</p>
                    </div>
                    <div className="flex justify-end">
                        <p>IN VEHICLE</p>
                    </div>
                    <div className="flex justify-end">
                        <p>IMPORTS</p>
                    </div>
                </div>
                <div className={`
                    ${chillax.className} text-2xl
                    flex flex-col lg:flex-row justify-end gap-20 lg:gap-0
                `}>
                    <div className={`
                        flex basis-1/3 lg:basis-1/2 justify-center lg:justify-start order-1 lg:order-0
                    `}>
                        <div className="lg:ml-[20%] h-full min-h-[200px] aspect-square">
                            <RoundedPrimaryButton title="About Us" />
                        </div>
                    </div>
                    <ul className="flex flex-col basis-2/3 lg:basis-1/2 gap-2.5">
                        <li className="flex items-center border-b pb-2.5 gap-10">
                            <CarFront className="size-[1.1em]" />
                            <span>STOCK AVAILABLE FOR SALE</span>
                        </li>
                        <li className="flex items-center border-b pb-2.5 gap-10">
                            <Search className="size-[1.1em]" />
                            <span>PERSONALIZED SEARCH</span>
                        </li>
                        <li className="flex items-center border-b pb-2.5 gap-10">
                            <PaintBucket className="size-[1.1em]" />
                            <span>AESTHETIC PREPARATION</span>
                        </li>
                        <li className="flex items-center border-b pb-2.5 gap-10">
                            <KeySquare className="size-[1.1em]" />
                            <span>TURNKEY DELIVERY</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
