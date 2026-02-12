// src/app/vehicles/[id]/page.tsx
import { notFound } from "next/navigation";
import VehicleClient from "@/components/ui/vehicles/vehicle/vehicleClient";
import { getCarById } from "@/lib/actions";

export default async function VehiclePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const car = await getCarById(id);

    if (!car) notFound();

    return <VehicleClient car={car} />;
}
