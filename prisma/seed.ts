import { Prisma, PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const carData: Prisma.CarCreateInput[] = [
    {
        title: "Ford Mustang 2025",
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
]