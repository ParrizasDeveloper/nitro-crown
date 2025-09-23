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