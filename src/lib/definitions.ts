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

export const Brands = {
    'Audi': '/logos/brands/Audi-Logo.wine.svg',
    'BMW': '/logos/brands/BMW-Logo.wine.svg',
    'Mercedes': '/logos/brands/Mercedes-Logo.wine.svg',
    'Porsche': '/logos/brands/Porsche-Logo.wine.svg',
    'Ferrari': '/logos/brands/Ferrari-Logo.wine.svg',
    'Lamborghini': '/logos/brands/Lamborghini-Logo.wine.svg',
    'Ford': '/logos/brands/Ford-Logo.wine.svg',
    'Opel': '/logos/brands/Opel-Logo.wine.svg',
    'Tesla': '/logos/brands/Tesla-Logo.wine.svg',
}