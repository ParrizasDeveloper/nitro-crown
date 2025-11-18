'use client'

import { chillax, pangchang } from "@/styles/fonts";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import SoldCarsCheckbox from "./soldCarsCheckbox";

export default function VehiclesFilterHeader() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showSoldCars, setShowSoldCars] = useState(true);

    return (
        <header className={`
            ${chillax.className}
            flex flex-col items-center pt-header pb-10
        `}>
            <h1 className={`${pangchang.className} text-[5em] font-semibold mt-20 mb-10`}>
                OUR VEHICLES
            </h1>
            <div 
                className={`
                    relative flex items-center h-[4.5em] mb-20 bg-secondary-dark
                    border-2 border-primary rounded-[24px]
                `}
                
            >
                <div 
                    className="h-full flex items-center cursor-text px-5"
                    onClick={() => inputRef.current?.focus()}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search vehicle..."
                        className="outline-0 text-[1.5em]"
                    />
                </div>
                <div className="h-full aspect-square p-1">
                    <div
                        className={`
                        rounded-[18px] h-full w-full
                        flex items-center justify-center bg-primary 
                    `}
                    >
                        <Search className="size-[1.5em]" />
                    </div>
                </div>
            </div>
            <div className="flex h-[3.5em] w-full text-center text-[1.2em]">
                <SoldCarsCheckbox active={showSoldCars} toogleCheck={setShowSoldCars} />
                <div className="flex justify-center basis-1/3">
                    <div className="flex items-center">We found x vehicles</div>
                </div>
                <div className="flex justify-center gap-5 basis-1/3">
                    <div className="flex items-center">Sort by</div>
                    <div className="w-[150px] border border-secondary rounded-lg "></div>
                </div>
            </div>
        </header>
    )
}