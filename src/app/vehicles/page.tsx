'use client'

import VehiclesFilterHeader from "@/components/ui/vehicles/header";
import { useScrollBar } from "@/context/ScrollbarProvider";

export default function Vehicles() {
    const {scrollbarSize} = useScrollBar()
    return (
        <div className="min-h-screen text-text">
            <div style={{paddingRight: scrollbarSize}}>
                <VehiclesFilterHeader />
                <main>
                    Vehicles List
                </main>
            </div>
        </div>
    )
}