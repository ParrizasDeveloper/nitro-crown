import NavLinks from "@/components/ui/NavLinks";
import { User as UserIcon } from "lucide-react";
import Image from "next/image";

export default function HeaderNav() {
    

    return (
        <header className="relative h-24 border-b-[1px] bg-black/35
                border-utility/35">
            <nav className={
                `relative text-contrast flex h-full justify-between items-center
                max-w-[1400px] m-auto`
            }>
                <div className="relative h-full w-[100px]">
                    <Image
                        src='/images/NC.png'
                        width={1000}
                        height={1000}
                        alt='Nitro Crown Logo from header'
                        className="h-full w-auto m-auto"
                        priority
                    />
                </div>

                <div className="">
                    <NavLinks />
                </div>
                <div className="w-[100px] text-center flex justify-center">
                    <UserIcon color="#B0B0B0" size={42} strokeWidth={1}/>
                </div>
            </nav>
            
            
        </header>
    );
}