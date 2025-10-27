import gsap from "gsap"
import { useRef } from "react"

export function RoundedPrimaryButton({link, title}: {link?: string, title: string}) {
    const btnRef = useRef<HTMLDivElement | null>(null)
    
    function handleMove(e: React.MouseEvent) {
        if(!btnRef.current) { return }

        const rect = btnRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left))
        const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top))

        gsap.to(btnRef.current.querySelector(".circle-button"), {
            width: "90%",
            height: "90%",
            x: (x - rect.width / 2) / 4,
            y: (y - rect.height / 2) / 4,
        })

        gsap.to(btnRef.current.querySelector(".circle-button>div"), {
            width: "80%",
            height: "80%",
            x: (x - rect.width / 2) / 3,
            y: (y - rect.height / 2) / 3,
            background: "white",
            color: "#111317"
        })
    }

    function handleLeave() {
        if(!btnRef.current) { return }

        gsap.to(btnRef.current.querySelector(".circle-button"), {
            width: "100%",
            height: "100%",
            x: 0,
            y: 0
        })

        gsap.to(btnRef.current.querySelector(".circle-button>div"), {
            width: "90%",
            height: "90%",
            x: 0,
            y: 0,
            background: "#0079f9",
            color: "#FAFAFA"
        })
    }

    return (
        <div 
            ref={btnRef}
            className="flex justify-center items-center h-full w-full cursor-pointer select-none"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            <div
                className={`
                    circle-button 
                    relative flex justify-center items-center
                    border border-secondary h-full w-full rounded-full
                `}
            >
                <div className={`
                    flex justify-center items-center h-[90%] w-[90%]
                    bg-primary rounded-full 
                `}>
                    {title}
                </div>
            </div>
        </div>
    )
}