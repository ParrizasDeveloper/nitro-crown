'use client'

import { Brands } from "@/lib/definitions";
import Image from "next/image";
import styles from "./InfiniteSlider.module.css"
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";

export default function BrandsSlider() {
    const brands = Object.entries(Brands);

    return (
        <div 
            id="brands-slider"
            className="bg-linear-to-r from-transparent via-50% via-secondary to-transparent mb-10 h-16 sm:h-20 overflow-hidden"
        >
            <Swiper
                slidesPerView={"auto"}
                loop={true}
                speed={5000}
                observer={true}
                observeParents={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    reverseDirection: true
                }}
                allowTouchMove={false}
                modules={[Autoplay]}
                onInit={(swiper) => swiper.update()}
                className={`select-none max-w-500 h-16 sm:h-20 ${styles.infiniteSlider}`}
            >
                {
                    brands.map(([brand, logo], index) => (
                        <SwiperSlide key={`${brand}-a-${index}`} className="w-35! sm:w-50! h-16! sm:h-20! flex items-center justify-center">
                            <Image
                                src={logo}
                                alt={`${brand} Logo`}
                                width={200}
                                height={80}
                                sizes="(max-width: 640px) 140px, 200px"
                                className="h-full w-auto object-contain"
                                priority={index < 4}
                            />
                        </SwiperSlide>
                    ))
                }
                {
                    brands.map(([brand, logo], index) => (
                        <SwiperSlide key={`${brand}-b-${index}`} className="w-35! sm:w-50! h-16! sm:h-20! flex items-center justify-center">
                            <Image
                                src={logo}
                                alt={`${brand} Logo`}
                                width={200}
                                height={80}
                                sizes="(max-width: 640px) 140px, 200px"
                                className="h-full w-auto object-contain"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}