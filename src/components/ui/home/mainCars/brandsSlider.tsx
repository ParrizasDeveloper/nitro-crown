'use client'

import { Brands } from "@/lib/definitions";
import Image from "next/image";
import styles from "./InfiniteSlider.module.css"
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandsSlider() {
    return (
        <div 
            id="brands-slider"
            className="bg-gradient-to-r from-transparent via-50% via-white/50 to-transparent mb-10"
        >
            <Swiper
                slidesPerView={"auto"}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    reverseDirection: true
                }}
                allowTouchMove={false}
                modules={[Autoplay]}
                className={`select-none max-w-[2000px] ${styles.infiniteSlider}`}
            >
                {
                    Object.entries(Brands).map(([brand, logo]) => (
                        <SwiperSlide key={brand} className="w-[200px]!">
                            <Image key={brand} src={logo} alt={`${brand} Logo`} width={200} height={200} />
                        </SwiperSlide>
                    ))
                }
                {
                    Object.entries(Brands).map(([brand, logo]) => (
                        <SwiperSlide key={brand} className="w-[200px]!">
                            <Image key={brand} src={logo} alt={`${brand} Logo`} width={200} height={200} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}