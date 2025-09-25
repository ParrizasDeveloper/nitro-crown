import { Anton, Roboto, Teko } from 'next/font/google'
import localFont from "next/font/local"
export const roboto = Roboto({
    weight: 'variable',
    subsets: ['latin']
})

export const anton = Anton({
    weight: '400',
    subsets: ['latin']
})

export const teko = Teko({
    weight: ['300', '600'],
    subsets: ['latin']
})


export const chillax = localFont({
    src: "../assets/fonts/Chillax.woff2",
    variable: "--font-chillax",
    display: "swap"
})

export const azadliq = localFont({
    src: "../assets/fonts/AZADLIQ.woff2",
    variable: "--font-azadliq",
    display: "swap"
})