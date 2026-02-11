'use server'

import { MainCar, VehiclesFilter } from "./definitions"
import prisma from "./prisma"

export async function getCars(filters: VehiclesFilter) {
    const cars:MainCar[] = await prisma.car.findMany({
        select: {
            id: true,
            title: true,
            brand: true,
            model: true,
            availability: true,
            createdAt: true,
            kms: true,
            price: true,
            year: true,
            transmission: true,
            fuelType: true,
            description: true,
            images: true,
        },
        where: {
            title: { contains: filters.searchText, mode: 'insensitive' },
            availability: filters.soldCars ? undefined : 'Available',
        },
    })
    return cars
}

export async function getCarById(id: string) {
    const car = await prisma.car.findUnique({
        where: { id },
        select: {
            id: true,
            title: true,
            brand: true,
            model: true,
            availability: true,
            createdAt: true,
            kms: true,
            price: true,
            year: true,
            transmission: true,
            fuelType: true,
            description: true,
            images: true,
        },
    })
    return car
}