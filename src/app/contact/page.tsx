'use client'

import { useScrollBar } from "@/providers/ScrollbarProvider";
import { chillax, pangchang, roboto } from "@/styles/fonts";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const {scrollbarSize} = useScrollBar()
    const [privacyChecked, setPrivacyChecked] = useState(false)

    return (
        <main style={{paddingRight: scrollbarSize}}>
            <div className={`
                ${roboto.className} relative lg:grid lg:grid-cols-24 min-h-dvh p-5 text-text
                
            `}>
                <div className="lg:col-span-11 h-[50vh] lg:h-auto">
                    <Image
                        src='/images/contact/section.webp'
                        width={832}
                        height={1248}
                        alt="Image of the dealership contact section"
                        className="w-full h-full rounded-xl object-cover"
                        quality={100}
                    />
                </div>
                <form className="flex flex-col justify-center col-start-13 col-end-25 lg:px-[10%] mt-10 lg:mt-0 lg:text-[clamp(0.5rem,1vw,2rem)]">
                    <h1 className={`${pangchang.className} text-[2em] font-semibold mb-5`}>
                        CONTACT WITH US
                    </h1>
                    <p>
                        If you have any questions or inquiries, please feel free to contact us.
                        Our team is here to assist you and provide the information you need.
                    </p><br />
                    <p>
                        Only with previous appointment:
                        <span className="block font-extralight">Monday to Friday: 10:00 AM - 7:00 PM</span>
                        <span className="block font-extralight">Saturday: 10:00 AM - 6:00 PM</span>
                    </p>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-10`}>
                        <label htmlFor="firstName" className="pb-2 text-[0.7em] order-1 mt-7 sm:mt-0">
                            FIRST NAME *
                        </label>
                        <label htmlFor="lastName" className="pb-2 text-[0.7em] order-3 sm:order-2 mt-7 sm:mt-0">
                            LAST NAME *
                        </label>
                        <input 
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            className={`
                                border border-text/30 rounded-xl p-4 outline-none font-light
                                hover:border-text hover:bg-primary/10
                                focus:border-text focus:bg-primary/10
                                transition-colors duration-300 order-2 sm:order-3
                            `} 
                            required 
                        />
                        <input 
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            className={`
                                border border-text/30 rounded-xl p-4 outline-none font-light
                                hover:border-text hover:bg-primary/10
                                focus:border-text focus:bg-primary/10
                                transition-colors duration-300 order-4
                            `} 
                            required 
                        />
                        <label htmlFor="email" className="pb-2 mt-7 text-[0.7em] order-5">
                            EMAIL *
                        </label>
                        <label htmlFor="phone" className="pb-2 mt-7 text-[0.7em] order-7 sm:order-6">
                            PHONE NUMBER *
                        </label>
                        <input 
                            id="email"
                            type="email"
                            placeholder="Email"
                            className={`
                                border border-text/30 rounded-xl p-4 outline-none font-light
                                hover:border-text hover:bg-primary/10
                                focus:border-text focus:bg-primary/10
                                transition-colors duration-300 order-6 sm:order-7
                            `} 
                            required 
                        />
                        <input 
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            className={`
                                border border-text/30 rounded-xl p-4 outline-none font-light
                                hover:border-text hover:bg-primary/10
                                focus:border-text focus:bg-primary/10
                                transition-colors duration-300 order-8
                            `} 
                            required 
                        />
                        <label htmlFor="affair" className="pb-2 mt-7 col-span-full text-[0.7em] order-9">
                            AFFAIR *
                        </label>
                        <input 
                            id="affair"
                            type="text"
                            placeholder="Affair"
                            className={`
                                border border-text/30 rounded-xl p-4 outline-none font-light
                                hover:border-text hover:bg-primary/10
                                focus:border-text focus:bg-primary/10
                                transition-colors duration-300
                                col-span-full order-10
                            `} 
                            required 
                        />
                        <label htmlFor="message" className="pb-2 mt-7 col-span-full text-[0.7em] order-11">
                            MESSAGE *
                        </label>
                        <textarea
                            id="message"
                            placeholder="Message"
                            className={`
                                border border-text/30 rounded-xl p-4 outline-none font-light
                                hover:border-text hover:bg-primary/10
                                focus:border-text focus:bg-primary/10
                                transition-colors duration-300
                                col-span-full order-12
                            `} 
                            required 
                        />
                    </div>
                    <input 
                        type="checkbox" 
                        id="privacy" 
                        className="mt-7" 
                        checked={privacyChecked} 
                        onChange={() => setPrivacyChecked(!privacyChecked)} 
                        required 
                        hidden 
                    />
                    <label htmlFor="privacy" className="flex items-center gap-2.5 mt-10 p-2 cursor-pointer select-none">
                        <div className="border w-5 h-5 min-w-5 rounded-sm flex items-center justify-center">
                            <Check  className={`${privacyChecked ? 'block' : 'hidden'} stroke-3`} />
                        </div>
                        By submitting this form, you consent to Otomotion storing and using the collected information to process your request.
                    </label>
                    <div className={`${chillax.className} flex justify-end mt-10 mb-10`}>
                        <button
                            type="submit"
                            className={`
                                    flex items-center rounded-lg px-6 py-4 bg-primary gap-5
                                    text-white font-medium cursor-pointer
                                    hover:bg-text hover:text-primary transition-colors
                                    duration-300 group
                                `}
                        >
                            <span>I'm interested</span>
                            <ArrowRight className="-rotate-45 stroke-1 group-hover:rotate-0 transition-transform duration-300" />
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}
