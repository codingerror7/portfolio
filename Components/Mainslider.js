"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import {
  FaJava,
  FaPython,
  FaNode,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiGit,
  SiMysql,
} from "react-icons/si"
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri"

import 'swiper/css'

const baseTechList = [
  { name: "React", Icon: RiReactjsFill, hover: "hover:text-cyan-400 group-hover:text-cyan-400" },
  { name: "Next.js", Icon: RiNextjsFill, hover: "hover:text-white group-hover:text-white" },
  { name: "JavaScript", Icon: SiJavascript, hover: "hover:text-yellow-400 group-hover:text-yellow-400" },
  { name: "TypeScript", Icon: SiTypescript, hover: "hover:text-blue-400 group-hover:text-blue-400" },
  { name: "Node.js", Icon: FaNode, hover: "hover:text-emerald-400 group-hover:text-emerald-400" },
  { name: "Express", Icon: SiExpress, hover: "hover:text-zinc-200 group-hover:text-zinc-200" },
  { name: "MongoDB", Icon: SiMongodb, hover: "hover:text-green-500 group-hover:text-green-500" },
  { name: "TailwindCSS", Icon: SiTailwindcss, hover: "hover:text-sky-400 group-hover:text-sky-400" },
  { name: "Java", Icon: FaJava, hover: "hover:text-amber-500 group-hover:text-amber-500" },
  { name: "Python", Icon: FaPython, hover: "hover:text-blue-400 group-hover:text-blue-400" },
  { name: "Docker", Icon: FaDocker, hover: "hover:text-sky-400 group-hover:text-sky-400" },
  { name: "AWS", Icon: FaAws, hover: "hover:text-orange-400 group-hover:text-orange-400" },
  { name: "MySQL", Icon: SiMysql, hover: "hover:text-blue-500 group-hover:text-blue-500" },
  { name: "Git", Icon: SiGit, hover: "hover:text-orange-500 group-hover:text-orange-500" },
  { name: "GitHub", Icon: FaGithub, hover: "hover:text-purple-400 group-hover:text-purple-400" },
  { name: "Postman", Icon: SiPostman, hover: "hover:text-orange-400 group-hover:text-orange-400" },
]

// Duplicate slides array so Swiper has 32 items, comfortably satisfying loop mode requirements at all breakpoints
const techSlides = [...baseTechList, ...baseTechList]

const Mainslider = () => {
  return (
    <div className="w-full py-5 sm:py-6 relative overflow-hidden bg-black/60 border-y border-white/5">
      {/* Edge gradient masks for seamless fade out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          grabCursor={true}
          watchSlidesProgress={true}
          breakpoints={{
            0: {
              slidesPerView: 3.2,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6.5,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 8.5,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 9.5,
              spaceBetween: 36,
            },
          }}
          className="w-full select-none py-1"
        >
          {techSlides.map((item, index) => {
            const Icon = item.Icon
            return (
              <SwiperSlide key={`${item.name}-${index}`} className="py-2">
                <div className="group flex flex-col items-center justify-center gap-2 p-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03]">
                  <Icon
                    className={`text-2xl sm:text-3xl lg:text-4xl text-zinc-400 transition-colors duration-300 ${item.hover}`}
                  />
                  <span className="text-[11px] sm:text-xs font-medium text-zinc-400 group-hover:text-zinc-200 tracking-wider transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Mainslider