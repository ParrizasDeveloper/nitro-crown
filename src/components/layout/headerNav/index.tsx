import NavLinks from "@/components/ui/NavLinks";
import { User as UserIcon } from "lucide-react";
import Image from "next/image";

export default function HeaderNav() {
    return (
        <header className="fixed top-0 w-full h-28 p-4 z-20">
            <nav className={
                `relative text-contrast flex h-full justify-between items-center
                m-auto`
            }>
                <div className={` relative h-full w-[150px] min-w-[150px] 
                    cursor-pointer rounded-3xl py-3 px-7
                    bg-radial-[at_50%_50%] from-black from-80% 
                    to-neutral-500/0 hover:to-neutral-500 hover:duration-0 
                    transition duration-500`
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
                <NavLinks />
                <div 
                    className={`group h-full w-[150px] rounded-3xl text-center 
                    flex justify-center items-center cursor-pointer 
                    bg-radial-[at_50%_50%] from-black from-80% 
                    to-neutral-500/0 hover:to-neutral-500 hover:duration-0  
                    transition duration-500`}
                >
                    <UserIcon 
                        color="#B0B0B0" 
                        size={50} 
                        className="stroke-1 group-hover:stroke-[1.5] transition-all"
                    />
                </div>
            </nav>
            
            
        </header>
    );
}