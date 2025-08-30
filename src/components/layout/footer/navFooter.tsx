import { Instagram, TikTok, XformerlyTwitter } from "@/assets/socialMedia";
import { roboto } from "@/styles/fonts";

export default function NavFooter() {
    return (
        <footer id="navFooter" className={`
            ${roboto.className}
            h-24 border-t-[1px] border-[#3d3d3d] shrink-1 mx-[5%] px-[10px] items-center
            font-light flex justify-between z-10
        `}>
            <span>Nitro Crown</span>
            <div className="flex text-2xl">
                <a className="hover:scale-120 p-5 cursor-pointer transition-transform">
                    <Instagram />
                </a>
                <a className="hover:scale-120 p-5 cursor-pointer transition-transform">
                    <XformerlyTwitter />
                </a>
                <a className="hover:scale-120 p-5 cursor-pointer transition-transform">
                    <TikTok />
                </a>
            </div>
        </footer>
    )
}