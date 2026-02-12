'use client'

import { MainCar } from "@/lib/definitions"
import { usePageTransition } from "@/providers/PageTransitionProvider"
import { chillax } from "@/styles/fonts"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VehicleClient({ car }: { car: MainCar }) {
    const { startTransitionTo } = usePageTransition()

    function handleClickLink(event: React.MouseEvent<HTMLAnchorElement>, link: string) {
        event.preventDefault()
        startTransitionTo(link)
    }

    return (
        <div className={`
            ${chillax.className}
            text-text min-h-dvh pt-header px-10
        `}>
            <Link
                className="flex items-center gap-6 mt-5 mb-12 group h-11"
                href="/vehicles"
                onClick={(e) => handleClickLink(e, "/vehicles")}
            >
                <div className={`
                    bg-primary p-2 group-hover:p-0 w-11 h-11 group-hover:w-0 group-hover:h-0 
                    rounded-lg transition-all duration-500 ease-out
                `}>
                    <ArrowLeft className="w-full h-full stroke-1" />
                </div>
                <span>Return to vehicles list</span>
                <div className={`
                    bg-primary p-0 group-hover:p-2 w-0 h-0 group-hover:w-11 group-hover:h-11
                    rounded-lg transition-all duration-500 ease-in-out
                `}>
                    <ArrowLeft className="w-full h-full stroke-1" />
                </div>
            </Link>

            <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
            </h1>
        </div>
    )
}
