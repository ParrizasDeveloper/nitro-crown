'use client'

import { Check } from "lucide-react"

export default function SoldCarsCheckbox({
    active,
    toogleCheck,
    className,
}: {
    active: boolean,
    toogleCheck: (setTo: boolean) => void,
    className?: string,
}) {

    return (
        <div className={className}>
            <input 
                type="checkbox" 
                id="sold-cars" 
                className="m-2 mt-3 hidden" 
                checked={active} 
                onChange={e => toogleCheck(e.target.checked)}
            />
            <label
                className={`
                            relative flex items-center border rounded-lg  w-full md:w-auto
                            h-full cursor-pointer gap-2 px-[1.25em] bg-secondary-dark
                            ${active ? 'border-primary' : 'border-secondary/50'}
                        `}
                htmlFor="sold-cars"
            >
                <div className={`
                    border-secondary/75 rounded-md h-[1.5em] w-[1.5em] overflow-hidden
                    flex items-center justify-center
                    ${active ? 'bg-primary border-0' : 'bg-transparent border'}
                `}>
                    {active && 
                       <Check /> 
                    }
                </div>
                <span>Show sold cars</span>
            </label>
        </div>
    )
}