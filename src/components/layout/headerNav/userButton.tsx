import { User as UserIcon } from "lucide-react";

export default function NavUserButton() {
    return (
        <div
            className={`
                hidden lg:block relative group transition-all cursor-pointer rounded-2xl p-2
                border-2 border-neutral-700/0 hover:border-neutral-700/50
                hover:duration-0 h-16 w-16
            `}
        >
            <UserIcon
                color="#B0B0B0"
                className={`stroke-1 group-hover:stroke-[1.5] hover:duration-0
                transition-all size-full   
            `}
            />
        </div>
    )
}