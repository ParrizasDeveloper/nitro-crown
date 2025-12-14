'use client'

import VehiclesFilterHeader from "@/components/ui/vehicles/header";
import VehicleList from "@/components/ui/vehicles/vehicleList";
import { getCars } from "@/lib/actions";
import { MainCar, VehiclesFilter } from "@/lib/definitions";
import { useScrollBar } from "@/providers/ScrollbarProvider";
import { useEffect, useState } from "react";

export default function Vehicles() {
    const {scrollbarSize} = useScrollBar()
    const [filters, setFilters] = useState<VehiclesFilter>({
        searchText: '',
        soldCars: true,
        orderBy: 'Disponibility',
    });
    const [vehicles, setVehicles] = useState<MainCar[]>([])

    useEffect(() => {
        getCars(filters).then(cars => setVehicles(cars))
    }, [filters])

    return (
        <div className="min-h-screen text-text">
            <div style={{paddingRight: scrollbarSize}}>
                <VehiclesFilterHeader filters={filters} setFilters={setFilters} count={vehicles.length} />
                <main>
                    <VehicleList vehicles={vehicles} />
                </main>
            </div>
        </div>
    )
}