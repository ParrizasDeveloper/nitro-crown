'use client'

import { MainCar } from "@/lib/definitions";
import VehicleCard from "./vehicleCard";

export default function VehicleList({vehicles}: {vehicles: MainCar[]}) {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2.5 p-3 md:p-10">
            {
                vehicles.map((car, index) => (
                    <VehicleCard key={index} props={car} />
                ))
            }
        </div>
    )
}