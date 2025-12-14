import { PrismaNeon } from '@prisma/adapter-neon'
import { Prisma, PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()
const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaNeon({ connectionString })
const prisma = new PrismaClient({ adapter })

const carData: Prisma.CarCreateInput[] = [
    {
        title: "Ford Mustang",
        brand: "Ford",
        model: "Mustang",
        year: 2025,
        price: 60000,
        kms: 46500,
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        images: [
            "ford_mustang_2025_front_display",
            "ford_mustang_2025_back_display",
            "ford_mustang_2025_side_display"
        ],
        description: "Ford Mustang 2025 - gray"
    },
    {
        title: "Lamborghini Huracan",
        brand: "Lamborghini",
        model: "Huracan",
        year: 2023,
        price: 220000,
        kms: 71300,
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        images: [
            "huracan_front_left_display",
            "huracan_front_right_display",
            "huracan_front_left_close_doors_display",
            "huracan_front_back_display"
        ],
        description: "Lamborghini Huracan 2023 - white"
    },
    {
        title: "Nissan GTR",
        brand: "Nissan",
        model: "GTR",
        year: 2024,
        price: 110000,
        kms: 38100,
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        images: [
            "GTR_front_left_display",
            "GTR_front_right_display",
            "GTR_side_display",
            "GTR_back_display"
        ],
        description: "Nissan GTR 2024 - white"
    }
]

export async function main() {
    for (const c of carData) {
        await prisma.car.create({ data: c })
    }
}

main()