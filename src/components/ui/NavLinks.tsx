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
        <section className="relative flex text-lg" 
            onMouseLeave={animationOut}
            onMouseEnter={animationIn}
        >
            <div ref={hoverDiv} className="absolute bg-neutral-800/75 w-full h-full top-0 rounded-md z-10 opacity-0"></div>
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
                    <p className="px-6 py-2 z-20 relative">{link.name.toUpperCase()}</p>
                </Link>
            ))}
        </section>
    )
}