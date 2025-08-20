import { SideNavButton } from "@/components/layout/headerNav/sideNavButton";
import NavLinks from "@/components/ui/NavLinks";
import { User as UserIcon } from "lucide-react";
import Image from "next/image";

export default function HeaderNav() {
    return (
        <header className="fixed top-0 w-full h-28 p-4 z-100">
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
                    <div
                        className={`hidden lg:block relative group transition-all cursor-pointer rounded-2xl p-2
                            border-2 border-neutral-700/0 hover:border-neutral-700/50
                            hover:duration-0 h-16 w-16
                        `}
                    >
                        <UserIcon
                            color="#B0B0B0"
                            className={`stroke-1 group-hover:stroke-[1.5] hover:duration-0
                                transition-all size-full   
                            `}
                        />
                    </div>
                    <div className={`
                        flex lg:hidden relative group transition-all cursor-pointer rounded-2xl p-2
                        border-2 border-neutral-700/0 hover:border-neutral-700/50
                        hover:duration-0 h-16 w-16
                    `}>
                        <SideNavButton />
                    </div>
                </div>
            </nav>
        </header>
    );
}