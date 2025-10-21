'use client'

import { links } from "@/data/sections";
import { chillax } from "@/styles/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6"

export default function Footer() {
    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 1280px)", () => {
            gsap.from("#footer-page>div", {
                scrollTrigger: {
                    trigger: "#footer-page",
                    start: "center bottom",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power1.out"
            })

            return () => {
                gsap.killTweensOf("#footer-page>div")
            }
        })

        
    })

    return (
        <footer
            id="footer-page"
            className={`
                ${chillax.className}
                relative text-sm sm:text-[1rem]
                xl:text-[clamp(0.8rem,1vw,1.125rem)] z-20
                w-full xl:h-[505px] px-5 xl:px-20 pt-14 pb-7 bg-secondary-dark text-text
                flex flex-col justify-between
            `}
        >
            <div className="flex flex-col xl:flex-row">
                <section className={`
                    basis-1/3 flex flex-col gap-10 xl:gap-20 px-10 py-10 xl:py-5
                `}>
                    <div>
                        <h2 className="font-semibold">Nitro Crwon</h2>
                        <p className="text-text/50">Driven by passion, powered by excellence.</p>
                    </div>
                    <ul>
                        {links.map(link => (
                            <li key={link.name}>
                                {link.name} 
                            </li>
                        ))}
                    </ul>
                </section>
                <section className={`
                    flex xl:flex-col gap-10 xl:gap-20 flex-wrap
                    basis-1/3 border-t border-secondary/50 mx-10 py-10
                    xl:border-t-0 xl:mx-0 xl:px-10 xl:border-l xl:py-5
                `}>
                    <div className="">
                        <h2>Address</h2>
                        <p className="text-text/50">
                            Calle de la Velocidad, 27 <br />
                            18015 Granada, Spain
                        </p>
                    </div>
                    <div>
                        <h2>By appointment only</h2>
                        <p className="text-text/50">
                            Monday to Friday: 10:00 AM - 7:00 PM <br />
                            Saturday: 10:00 AM - 6:00 PM
                        </p>
                    </div>
                </section>
                <section className={`
                    flex xl:flex-col gap-10 xl:gap-20 flex-wrap
                    basis-1/3 border-t border-secondary/50 mx-10 py-10
                    xl:border-t-0 xl:mx-0 xl:px-10 xl:border-l items-center xl:py-5
                    xl:items-start
                `}>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h2>Phone</h2>
                            <p className="text-text/50">
                                +34 123 456 789
                            </p>
                        </div>
                        <div>
                            <h2>Mail</h2>
                            <p className="text-text/50">
                                contact@nitrocrown.es
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2.5">
                        <div className={`
                            border rounded-xl p-[1.2em] cursor-pointer hover:bg-[#1877F2]
                            border-text/30 hover:border-text/0 transition-all duration-300
                        `}>
                            <FaFacebookF className="size-[1.3em]" />
                        </div>
                        <div className={`
                            border rounded-xl p-[1.2em] cursor-pointer hover:bg-[#E1306C]
                            border-text/30 hover:border-text/0 
                            transition-all duration-300
                        `}>
                            <FaInstagram className="size-[1.3em]" />
                        </div>
                        <div className={`
                            border rounded-xl p-[1.2em] cursor-pointer hover:bg-[#FF0000]
                            border-text/30 hover:border-text/0 transition-all duration-300
                        `}>
                            <FaYoutube className="size-[1.3em]" />
                        </div>
                        <div className={`
                            border rounded-xl p-[1.2em] cursor-pointer hover:bg-[#25D366]
                            border-text/30 hover:border-text/0 transition-all duration-300
                        `}>
                            <FaWhatsapp className="size-[1.3em]" />
                        </div>
                    </div>
                </section>
            </div>
            <footer className={`
                    flex flex-col sm:flex-row text-[0.9em] text-text/50
                `}>
                <div className="basis-1/3 flex justify-center sm:justify-start">© 2025 Nitro Crown. All rights reserved.</div>
                <div className="basis-1/3 flex justify-center sm:justify-center">Legal Notice · Privacy Policy · Cookie Policy</div>
                <div className="basis-1/3 flex justify-center sm:justify-end">Developed by @Miguel Angel Párrizas</div>
            </footer>
        </footer>
    )
}