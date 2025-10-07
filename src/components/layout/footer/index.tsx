import { links } from "@/data/sections";
import { chillax } from "@/styles/fonts";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className={`
            ${chillax.className}
            w-full px-20 pt-14 pb-7 bg-secondary-dark text-text
        `}>
            <div className="flex text-lg">
                <section className={`
                    basis-1/3 flex flex-col gap-20 px-10
                `}>
                    <div>
                        <h2 className="text- font-semibold">Nitro Crwon</h2>
                        <p className="text-text/50">Driven by passion, powered by excellence.</p>
                    </div>
                    <ul>
                        {links.map(link => (
                            <li key={link.name}>
                                {link.name} 
                            </li>
                        ))}
                    </ul>
                </section>
                <section className={`
                    flex flex-col gap-20
                    basis-1/3 border-l border-secondary/50 px-10
                `}>
                    <div>
                        <h2>Address</h2>
                        <p className="text-text/50">
                            Calle de la Velocidad, 27 <br />
                            18015 Granada, Spain
                        </p>
                    </div>
                    <div>
                        <h2>By appointment only</h2>
                        <p className="text-text/50">
                            Monday to Friday: 10:00 AM - 7:00 PM <br />
                            Saturday: 10:00 AM - 6:00 PM
                        </p>
                    </div>
                </section>
                <section className={`
                    flex flex-col gap-20
                    basis-1/3 border-l border-secondary/50 px-10
                `}>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h2>Phone</h2>
                            <p className="text-text/50">
                                +34 123 456 789
                            </p>
                        </div>
                        <div>
                            <h2>Mail</h2>
                            <p className="text-text/50">
                                contact@nitrocrown.es
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2.5">
                        <div className={`
                            border rounded-xl p-5 cursor-pointer hover:bg-[#1877F2]
                            border-text/30 hover:border-text/0 transition-all
                        `}>
                            <FaFacebookF className="size-6" />
                        </div>
                        <div className={`
                            border rounded-xl p-5 cursor-pointer hover:bg-[#E1306C]
                            border-text/30 hover:border-text/0 
                            transition-all
                        `}>
                            <FaInstagram className="size-6" />
                        </div>
                        <div className={`
                            border rounded-xl p-5 cursor-pointer hover:bg-[#FF0000]
                            border-text/30 hover:border-text/0 transition-all
                        `}>
                            <FaYoutube className="size-6" />
                        </div>
                        <div className={`
                            border rounded-xl p-5 cursor-pointer hover:bg-[#25D366]
                            border-text/30 hover:border-text/0 transition-all
                        `}>
                            <FaWhatsapp className="size-6" />
                        </div>
                    </div>
                </section>
            </div>
            <footer className="flex mt-32 text-[0.9rem] text-text/50">
                <div className="basis-1/3">© 2025 Nitro Crown. All rights reserved.</div>
                <div className="basis-1/3 flex justify-center">Legal Notice · Privacy Policy · Cookie Policy</div>
                <div className="basis-1/3 flex justify-end">Developed by @Miguel Angel Párrizas</div>
            </footer>
        </footer>
    )
}