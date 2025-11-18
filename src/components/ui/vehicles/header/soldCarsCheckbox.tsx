'use client'

import { Check } from "lucide-react"

export default function SoldCarsCheckbox({
    active,
    toogleCheck
}: {
    active: boolean,
    toogleCheck: (setTo: boolean) => void
}) {

    return (
        <div className="flex justify-center basis-1/3 select-none">
            <input 
                type="checkbox" 
                id="sold-cars" 
                className="m-2 mt-3 hidden" 
                checked={active} 
                onChange={e => toogleCheck(e.target.checked)}
            />
            <label
                className={`
                            relative flex items-center border border-secondary/50 rounded-lg h-full 
                            cursor-pointer gap-2 px-[1.25em]
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