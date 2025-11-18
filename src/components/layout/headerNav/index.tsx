'use client'
import { SideNavButton } from "@/components/layout/headerNav/sideNavButton";
import Image from "next/image";
import SideNav from "../navigation";
import { useEffect, useState } from "react";
import { useScrollBar } from "@/context/ScrollbarProvider";

export default function HeaderNav() {
    const [sideNavOpen, setSideNavOpen] = useState<boolean>(false)
    const {changeScrollbarSize} = useScrollBar()

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
            <header className="fixed top-0 w-dvw h-28 p-4 z-200">
                <nav className={
                    `relative text-contrast flex h-full justify-between items-center
                m-auto`
                }>
                    <div className={`relative h-full w-[150px] min-w-[150px] 
                    cursor-pointer rounded-3xl py-3 px-7`
                    }>
                        <Image
                            src='/images/NCLogo.png'
                            width={1000}
                            height={1000}
                            alt='Nitro Crown Logo from header'
                            className="h-full w-auto m-auto"
                            priority
                        />
                    </div>
                    
                    <div
                        className={`
                        h-full w-[100px] lg:w-[150px] rounded-3xl text-center 
                        flex justify-center items-center
                    `}
                    >
                        <div 
                            className={`
                                flex relative group transition-all cursor-pointer rounded-2xl p-2
                                border-2 border-neutral-700/0 hover:bg-text/15 duration-200
                                h-16 w-16
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