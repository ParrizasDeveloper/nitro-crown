import { getCarById } from "@/lib/actions"

export default async function VehiclePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const car = await getCarById(id)

    

    return (
        <div className="text-text min-h-dvh pt-header">
            <h1>Vehicle {id}</h1>
        </div>
    )
}
