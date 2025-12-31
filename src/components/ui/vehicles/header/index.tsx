'use client'

import { chillax, pangchang } from "@/styles/fonts";
import { Search } from "lucide-react";
import { useRef } from "react";
import SoldCarsCheckbox from "./soldCarsCheckbox";
import SortBy from "./sortBy";
import { VehiclesFilter } from "@/lib/definitions";
import { LoadingElement } from "../../material/loadingElements";



export default function VehiclesFilterHeader({
    filters,
    setFilters,
    count,
    loading,
}: {
    filters: VehiclesFilter,
    setFilters: (newFilters: VehiclesFilter) => void,
    count: number,
    loading: boolean,
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const timeOutRef = useRef<NodeJS.Timeout | null>(null);

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
        timeOutRef.current = setTimeout(() => {
            setFilters({...filters, searchText: e.target.value});
        }, 500);
    }

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
                    border-2 border-primary rounded-3xl
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
                        onChange={handleSearchChange}
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
            <div className="flex flex-wrap w-full px-10 text-[1.2em] gap-y-5">
                <SoldCarsCheckbox active={filters.soldCars} toogleCheck={(soldCars) => setFilters({...filters, soldCars})} />
                {
                    !loading ? (
                        <div className={`
                            h-[3.5em]
                            flex justify-center basis-full order-3 xl:basis-1/3 xl:order-2
                        `}>
                            <div className="flex items-center">We found {count} vehicles</div>
                        </div>
                    ) : (
                        <LoadingElement />
                    )
                    
                }
                <SortBy orderBy={filters.orderBy} setOrderBy={(orderBy) => setFilters({...filters, orderBy})} />
            </div>
        </header>
    )
}