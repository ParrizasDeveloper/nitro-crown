'use server'

import { MainCar, VehiclesFilter } from "./definitions"
import prisma from "./prisma"

export async function getCars(filters: VehiclesFilter) {
    const searchText = filters.searchText.trim()
    const cars:MainCar[] = await prisma.car.findMany({
        select: {
            id: true,
            slug: true,
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
            OR: searchText
                ? [
                    { brand: { contains: searchText, mode: 'insensitive' } },
                    { model: { contains: searchText, mode: 'insensitive' } },
                ]
                : undefined,
            availability: filters.soldCars ? undefined : 'Available',
        },
    })
    return cars
}

export async function getMainCars() {
    const cars:MainCar[] = await prisma.car.findMany({
        select: {
            id: true,
            slug: true,
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
            availability: 'Available',
        },
        orderBy: {
            price: 'asc',
        },
        take: 5,
    })
    return cars
}

export async function getCarById(id: string) {
    const car = await prisma.car.findUnique({
        where: { id },
        select: {
            id: true,
            slug: true,
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
