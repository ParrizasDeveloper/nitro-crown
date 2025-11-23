'use client'

import { OrderByTypes } from "@/lib/definitions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Triangle } from "lucide-react";
import { useRef, useState } from "react";

export default function SortBy({ orderBy, setOrderBy }: {
    orderBy: OrderByTypes,
    setOrderBy: (value: OrderByTypes) => void
}) {
    const [isOpen, setIsOpen] = useState(false);
    const triangleRef = useRef(null);
    const optionsRef = useRef<HTMLDivElement | null>(null);

    const options = [
        'Disponibility',
        'Price: Low to High',
        'Price: High to Low',
        'Year: New to Old',
        'Year: Old to New'
    ];

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    function handleOptionSelect(option: OrderByTypes) {
        setOrderBy(option);
        setIsOpen(false);
    }

    useGSAP(() => {
        if (!triangleRef.current) return;

        gsap.to(triangleRef.current, {
            rotate: isOpen ? 0 : 180,
            duration: 0.25,
            ease: "power2.out"
        });

        if(!optionsRef.current) return;

        gsap.to(optionsRef.current.querySelector('div'), {
            y: isOpen ? 0 : -100,
            duration: 0.25,
            opacity: isOpen ? 1 : 0,
        })
    }, [isOpen]);

    return (
        <div className="flex justify-center gap-5 basis-1/3 select-none cursor-pointer" onClick={toggleOpen}>
            <div className="flex items-center">Sort by</div>

            <div className="h-full w-[270px]">
                <div className="
                    relative flex justify-between items-center px-5 h-full bg-secondary-dark rounded-lg
                    border border-secondary/50 z-20
                ">
                    <span>{orderBy}</span>

                    <div ref={triangleRef} className="h-[.7em]">
                        <Triangle className="size-full fill-text" />
                    </div>
                </div>

                <div ref={optionsRef} className="overflow-hidden mt-2.5">
                    <div className="
                        rounded-lg text-left bg-secondary-dark overflow-hidden
                        border border-secondary/50
                    ">
                        {options.map((option) => (
                            <div
                                key={option}
                                className="py-2.5 pl-5 hover:bg-primary"
                                onClick={() => handleOptionSelect(option as OrderByTypes)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
