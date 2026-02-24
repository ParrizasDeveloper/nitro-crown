export type MainCar = {
    id: string,
    slug: string,
    brand: string,
    model: string,
    year: number,
    price: number,
    kms: number,
    availability: 'Available' | 'Sold' | 'Reserved',
    transmission: 'Automatic' | 'Manual' | 'SemiAutomatic',
    fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid',
    description: string,
    images: string[],
}

export type MainCarWithoutId = Omit<MainCar, "id">

export type OrderByTypes = 'Disponibility'
    | 'Price: Low to High'
    | 'Price: High to Low'
    | 'Year: New to Old'
    | 'Year: Old to New'

export type VehiclesFilter = {
    searchText: string;
    soldCars: boolean;
    orderBy: OrderByTypes;
}

export const colorByAvailability = {
    'Available': 'bg-green-500',
    'Sold': 'bg-red-500',
    'Reserved': 'bg-yellow-500',
}