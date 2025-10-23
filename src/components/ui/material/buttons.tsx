import gsap from "gsap"

export function RoundedPrimaryButton({link, title}: {link?: string, title: string}) {
    const tl = gsap.timeline()
    
    function hoverButton(target: HTMLDivElement) {
        tl.to(target, {
            ease: "back.in(4)",
            padding: 0,
            border: 0,
        })
    }

    function leaveButton(target: HTMLDivElement) {
        tl.to(target, {
            ease: "power1.out",
            padding: "10px",
            border: "1px solid #5a5a5a",
        })
    }

    return (
        <div 
            className={`
                border border-secondary h-full w-full rounded-full  
                p-2.5 cursor-pointer
            `}
            onMouseEnter={({currentTarget}) => hoverButton(currentTarget)}
            onMouseLeave={({ currentTarget }) => leaveButton(currentTarget)}
        >
            <div className={`
                flex justify-center items-center h-full w-full bg-primary rounded-full
            `}>
                {title}
            </div>
        </div>
    )
}