import { Prisma, PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const carData: Prisma.CarCreateInput[] = [
    {
        title: "Ford Mustang",
        brand: "Ford",
        model: "Mustang",
        year: 2025,
        price: 60000,
        imageBaseURL: "mustang_t5rklv",
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
        imageBaseURL: "huracan_odfs4l",
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
        imageBaseURL: "skyline_lkmzhs",
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
        await prisma.car.create({data: c})
    }
}

main()