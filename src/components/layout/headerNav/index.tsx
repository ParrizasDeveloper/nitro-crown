'use client'
import { SideNavButton } from "@/components/layout/headerNav/sideNavButton";
import NavLinks from "@/components/ui/NavLinks";
import Image from "next/image";
import SideNav from "./sideNav";
import { useEffect, useState } from "react";
import NavUserButton from "./userButton";

export default function HeaderNav() {
    const [sideNavOpen, setSideNavOpen] = useState(false)

    useEffect(() => {
        if(sideNavOpen) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    }, [sideNavOpen])

    function toggleSideNav() {
        setSideNavOpen(!sideNavOpen)
    }

    return (
        <>
            <header className="fixed top-0 w-full h-28 p-4 z-200">
                <nav className={
                    `relative text-contrast flex h-full justify-between items-center
                m-auto`
                }>
                    <div className={` relative h-full w-[150px] min-w-[150px] 
                    cursor-pointer rounded-3xl py-3 px-7`
                    }>
                        <Image
                            src='/images/NC.png'
                            width={1000}
                            height={1000}
                            alt='Nitro Crown Logo from header'
                            className="h-full w-auto m-auto"
                            priority
                        />
                    </div>
                    <NavLinks className="hidden lg:block" />
                    <div
                        className={`
                        h-full w-[150px] rounded-3xl text-center 
                        flex justify-center items-center
                    `}
                    >
                        <NavUserButton />
                        <div 
                            className={`
                                flex lg:hidden relative group transition-all cursor-pointer rounded-2xl p-2
                                border-2 border-neutral-700/0 hover:border-neutral-700/50
                                hover:duration-0 h-16 w-16
                            `}
                            onClick={toggleSideNav}
                        >
                            <SideNavButton />
                        </div>
                    </div>
                </nav>
            </header>
            <SideNav open />
        </>
    );
}