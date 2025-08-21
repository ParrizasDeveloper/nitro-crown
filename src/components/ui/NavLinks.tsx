'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx'
import useNavLinksHover from "@/hooks/gsap/useNavLinksHover";
import { links } from "@/data/sections";

export default function NavLinks({className}: {className: string}) {
    const pathName = usePathname();
    const {
        actualHover,
        hoverDiv,
        animationHover,
        animationIn,
        animationOut
    } = useNavLinksHover()
    
    

    return (
        <section className={`
            ${className}
            bg-black/60 relative rounded-3xl h-full p-2 backdrop-blur-xl
        `}>
            <div 
                ref={hoverDiv} 
                className={`absolute border-2 border-neutral-500/50 w-full h-full top-0 
                    rounded-2xl z-10 opacity-0`}
            ></div>
            <div 
                className="flex text-lg h-full rounded-3xl" 
                onMouseLeave={animationOut}
                onMouseEnter={animationIn}
            >
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.link}
                        className={clsx(
                            ` relative hover:text-contrast transition-colors duration-150`,
                            {
                                'text-contrast': pathName === link.link,
                                'text-neutral-500': pathName !== link.link,
                            }
                        )}
                        ref={el => {
                            if (actualHover.current === el) return
                        }}
                        onMouseEnter={animationHover}
                    >
                        <p className="flex items-center px-10 h-full z-20 relative">{link.name.toUpperCase()}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}