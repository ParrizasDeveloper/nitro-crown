'use client'

import VehiclesFilterHeader from "@/components/ui/vehicles/header";
import VehicleList from "@/components/ui/vehicles/vehicleList";
import { getCars } from "@/lib/actions";
import { MainCar, VehiclesFilter } from "@/lib/definitions";
import { useScrollBar } from "@/providers/ScrollbarProvider";
import { useEffect, useRef, useState } from "react";

export default function Vehicles() {
    const {scrollbarSize} = useScrollBar()
    const [filters, setFilters] = useState<VehiclesFilter>({
        searchText: '',
        soldCars: true,
        orderBy: 'Disponibility',
    });
    const [vehicles, setVehicles] = useState<MainCar[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const firstLoadRef = useRef<boolean>(true);

    useEffect(() => {
        setLoading(true)
        getCars(filters).then(cars => {
            setVehicles(cars)
            setLoading(false)
        })
    }, [filters])

    return (
        <div className="min-h-screen text-text">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 100%, var(--color-secondary-dark) 40%, black 100%)",
                }}
            />
            <div style={{paddingRight: scrollbarSize}} className="relative z-10">
                <VehiclesFilterHeader 
                    filters={filters} 
                    setFilters={setFilters} 
                    count={vehicles.length}
                    loading={loading}
                />
                <main>
                    <VehicleList vehicles={vehicles} />
                </main>
            </div>
        </div>
    )
}