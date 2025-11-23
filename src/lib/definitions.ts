export type MainCar = {
    name: string,
    brand: string,
    model: string,
    imageBaseURL: string,
    price: number,
    year: number,
    kms: number,
    transmision: 'Automatic' | 'Manual' | 'Semi-automatic',
    fuel: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid'
}

export type OrderByTypes = 'Disponibility'
    | 'Price: Low to High'
    | 'Price: High to Low'
    | 'Year: New to Old'
    | 'Year: Old to New'