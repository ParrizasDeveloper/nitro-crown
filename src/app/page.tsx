'use client'

import MainCars from "@/components/ui/home/mainCars"
import MainSection from "@/components/ui/home/mainSection"

import Specialties from "@/components/ui/home/specialties"

export default function Home() {
  return (
    <>
      <MainSection />
      <div className="">
        <MainCars />
        <Specialties />
      </div>
    </>
  )
}
