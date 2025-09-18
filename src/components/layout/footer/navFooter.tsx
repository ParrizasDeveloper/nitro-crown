import { Instagram, TikTok, XformerlyTwitter } from "@/assets/socialMedia";
import { roboto } from "@/styles/fonts";

export default function NavFooter() {
    return (
        <footer id="navFooter" className={"z-10 flex justify-center"}>
            <div className={`
                ${roboto.className}
                h-24 border-t-[1px] border-secondary shrink-1 mx-[5%] px-[10px] items-center
                font-light flex justify-between w-full
            `}>
                <div>Nitro Crown</div>
                <div className="flex text-2xl">
                    <a className="hover:scale-[135%] py-5 px-5 cursor-pointer transition-transform duration-300">
                        <Instagram />
                    </a>
                    <a className="hover:scale-[135%] py-5 px-5 cursor-pointer transition-transform duration-300">
                        <XformerlyTwitter />
                    </a>
                    <a className="hover:scale-[135%] py-5 pl-5 cursor-pointer transition-transform duration-300">
                        <TikTok />
                    </a>
                </div>
            </div> 
        </footer>
    )
}