import { Anton, Roboto } from 'next/font/google'
import localFont from "next/font/local"
export const roboto = Roboto({
    weight: 'variable',
    subsets: ['latin']
})

export const anton = Anton({
    weight: '400',
    subsets: ['latin']
})

export const chillax = localFont({
    src: "../assets/fonts/Chillax.woff2",
    variable: "--font-chillax",
    display: "swap"
})