'use client'
import { SideNavButton } from "@/components/layout/headerNav/sideNavButton";
import Image from "next/image";
import SideNav from "../navigation";
import { useEffect, useState } from "react";
import { useScrollBar } from "@/providers/ScrollbarProvider";

export default function HeaderNav() {
    const [sideNavOpen, setSideNavOpen] = useState<boolean>(false)
    const {changeScrollbarSize} = useScrollBar()
    const {scrollbarSize} = useScrollBar()

    useEffect(() => {
        changeScrollbarSize(window.innerWidth - document.body.scrollWidth)
    }, [])

    function toggleSideNav() {
        setSideNavOpen(!sideNavOpen)
    }

    function closeSideNav() {
        setSideNavOpen(false)
    }

    return (
        <>
            <header
                className="fixed top-0 w-full h-14 sm:h-28 px-2 sm:px-0 sm:p-4 z-150 pointer-events-none"
                style={{paddingRight: `${scrollbarSize}px`}}
            >
                <nav className={`
                    relative text-contrast flex h-full justify-between items-center
                    m-auto pointer-events-none
                `}>
                    <div className={`
                        relative h-auto w-[90px] sm:w-[150px]
                        cursor-pointer rounded-3xl py-3 sm:px-7
                        pointer-events-auto
                    `}>
                        <Image
                            src='/logos/NCLogo.png'
                            width={1024}
                            height={512}
                            alt='Nitro Crown Logo from header'
                            className="max-h-8 sm:max-h-16 w-auto m-auto"
                            priority
                        />
                    </div>
                    
                    <div
                        className={`
                         sm:w-[150px] rounded-3xl text-center 
                        flex justify-center items-center
                    `}
                    >
                        <div 
                            className={`
                                flex relative group transition-all cursor-pointer rounded-2xl p-1 sm:p-2
                                border-2 border-neutral-700/0 hover:bg-text/15 duration-200
                                h-10 w-10 sm:h-16 sm:w-16 pointer-events-auto
                            `}
                            onClick={toggleSideNav}
                        >
                            <SideNavButton open={sideNavOpen} />
                        </div>
                    </div>
                </nav>
            </header>
            <SideNav open={sideNavOpen} closeNav={closeSideNav} />   
        </>
    );
}