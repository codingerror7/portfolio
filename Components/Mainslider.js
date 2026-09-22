"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaJava, FaPython, FaNode, FaGithub, FaAws, FaDocker } from "react-icons/fa"
import { SiJavascript, SiMongodb, SiExpress, SiPostman } from "react-icons/si"
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

const techList = [
  { name: "Java", Icon: FaJava, hover: "hover:text-amber-500" },
  { name: "JavaScript", Icon: SiJavascript, hover: "hover:text-yellow-400" },
  { name: "Python", Icon: FaPython, hover: "hover:text-blue-400" },
  { name: "React", Icon: RiReactjsFill, hover: "hover:text-cyan-400" },
  { name: "Next.js", Icon: RiNextjsFill, hover: "hover:text-white" },
  { name: "Node.js", Icon: FaNode, hover: "hover:text-emerald-500" },
  { name: "Express", Icon: SiExpress, hover: "hover:text-zinc-300" },
  { name: "MongoDB", Icon: SiMongodb, hover: "hover:text-green-500" },
  { name: "AWS", Icon: FaAws, hover: "hover:text-orange-400" },
  { name: "Docker", Icon: FaDocker, hover: "hover:text-sky-400" },
  { name: "GitHub", Icon: FaGithub, hover: "hover:text-purple-400" },
  { name: "Postman", Icon: SiPostman, hover: "hover:text-orange-500" },
]

const Mainslider = () => {
  return (
    <div className="w-full py-6 relative overflow-hidden bg-black/40 border-y border-white/5">
      {/* Soft gradient edge fade mask */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Swiper
          className="w-full max-w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          spaceBetween={24}
          centeredSlides={false}
          watchOverflow={true}
          breakpoints={{
            0: {
              slidesPerView: 3.5,
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
              spaceBetween: 36,
            },
          }}
        >
          {techList.map((item, index) => {
            const Icon = item.Icon
            return (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center select-none py-2"
              >
                <div className="group flex flex-col items-center justify-center gap-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <Icon className={`text-2xl sm:text-3xl lg:text-4xl text-zinc-400 transition-colors duration-300 ${item.hover}`} />
                  <span className="text-[10px] sm:text-xs font-medium text-zinc-500 group-hover:text-zinc-300 tracking-wider transition-colors duration-300">
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