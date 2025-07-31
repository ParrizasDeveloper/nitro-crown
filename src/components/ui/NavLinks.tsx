'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx'
import useNavLinksHover from "@/hooks/gsap/useNavLinksHover";

export default function NavLinks() {
    const pathName = usePathname();
    const {
        actualHover,
        hoverDiv,
        animationHover,
        animationIn,
        animationOut
    } = useNavLinksHover()
    
    const links = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Vehicles',
            link: '/vehicles'
        },
        {
            name: 'About Us',
            link: '/about'
        }
    ]

    return (
        <section className="bg-black/35 relative rounded-3xl h-full p-2"
            
        >
            <div 
                ref={hoverDiv} 
                className={`absolute bg-radial-[at_50%_50%] from-black from-80% 
                    to-neutral-500 w-full h-full top-0 rounded-2xl z-10 
                    opacity-0`}
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