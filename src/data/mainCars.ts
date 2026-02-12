import { MainCar } from "@/lib/definitions";

type MainCarWithoutId = Omit<MainCar, "id">

export const mainCars: MainCarWithoutId[] = [
    {
        title: 'Ford Mustang',
        brand: 'Ford',
        model: 'Mustang',
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        year: 2025,
        kms: 45032,
        price: 62000,
        images: ['/images/home/mustang.webp'],
        availability: 'Available',
        description: 'A powerful and stylish sports car with modern features.'
    },
    {
        title: 'Ford Mustang',
        brand: 'Ford',
        model: 'Mustang',
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        year: 2025,
        kms: 45032,
        price: 62000,
        images: ['/images/home/mustang.webp'],
        availability: 'Available',
        description: 'A powerful and stylish sports car with modern features.'
    },
    {
        title: 'Ford Mustang',
        brand: 'Ford',
        model: 'Mustang',
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        year: 2025,
        kms: 45032,
        price: 62000,
        images: ['/images/home/mustang.webp'],
        availability: 'Available',
        description: 'A powerful and stylish sports car with modern features.'
    },
    {
        title: 'Ford Mustang',
        brand: 'Ford',
        model: 'Mustang',
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        year: 2025,
        kms: 45032,
        price: 62000,
        images: ['/images/home/mustang.webp'],
        availability: 'Available',
        description: 'A powerful and stylish sports car with modern features.'
    },
    {
        title: 'Ford Mustang',
        brand: 'Ford',
        model: 'Mustang',
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        year: 2025,
        kms: 45032,
        price: 62000,
        images: ['/images/home/mustang.webp'],
        availability: 'Available',
        description: 'A powerful and stylish sports car with modern features.'
    }
]