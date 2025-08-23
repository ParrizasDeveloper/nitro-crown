import { links } from "@/data/sections"
import Link from "next/link"
import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


export default function SideNav({open}: {open: boolean}) {
    const tl = useRef<gsap.core.Timeline | null>(null)
    const container = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        tl.current = gsap.timeline({paused: true})
        tl.current
            .to("#responsiveNav", {
                x: "-100%",
            })
    }, [])

    useGSAP(() => {
        if(open) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
    }, [open])

    return (
        <nav 
            id="responsiveNav"
            ref={container}
            className={`
                ${anton.className}
                flex
                flex-col lg:hidden fixed w-dvw h-full z-100 bg-neutral-950/99 backdrop-blur-sm
                justify-center items-center leading-20 sm:leading-24 text-neutral-200
            `}
        >
            <Link 
                href={""} 
                className={`text-[clamp(2rem,6vw,3rem)]`}
            >PROFILE</Link>
            {
               links.map(link => (
                    <Link 
                        className={`text-[clamp(2rem,6vw,3rem)]`} 
                        href={link.link} 
                        key={link.name}
                    >
                        {link.name.toUpperCase()}
                    </Link>
               )) 
            }
        </nav>
    )
}