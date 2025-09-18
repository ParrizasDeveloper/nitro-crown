import { anton, azadliq, chillax, roboto } from "@/styles/fonts"

export default function MainSection() {
    const swappingTitles: string[] = ['Luxury', 'Speed', 'Limits', 'Perfection']

    return (
        <section className={`
            ${anton.className}
            text-text font-extrabold 
            relative z-10 h-dvh w-full overflow-hidden
        `}>
            <div className={`
                text-center text-[clamp(4rem,14vw,25rem)]
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1em]
            `}>BEYOND PERFECTION</div>
        </section>
    )
}