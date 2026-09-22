"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Wave from '../public/Wave.json'
import Snowfall from 'react-snowfall'

const services = [
  {
    title: "Graphic Design",
    image: "./graphic.png",
    description:
      "Crafting visual identities through creative illustrations, icons, layouts, and modern aesthetics.",
    gradient: "from-amber-500/10 via-yellow-600/10 to-zinc-900/60",
    border: "border-yellow-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]",
    accent: "text-amber-400",
  },
  {
    title: "Web Development",
    image: "./webdev.png",
    description:
      "Building responsive, dynamic, fast, and scalable web apps using modern full-stack architectures.",
    gradient: "from-blue-500/10 via-indigo-600/10 to-zinc-900/60",
    border: "border-blue-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    accent: "text-blue-400",
  },
  {
    title: "UI/UX Design",
    image: "./ui.png",
    description:
      "Designing intuitive, user-centric interfaces focused on clarity, user flow, consistency, and delight.",
    gradient: "from-rose-500/10 via-orange-600/10 to-zinc-900/60",
    border: "border-rose-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]",
    accent: "text-rose-400",
  },
  {
    title: "Web Optimization",
    image: "./webopt.png",
    description:
      "Improving load speeds, SEO rankings, accessibility, Core Web Vitals, and responsive fluidity.",
    gradient: "from-emerald-500/10 via-teal-600/10 to-zinc-900/60",
    border: "border-emerald-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    accent: "text-emerald-400",
  },
]

const Page2 = () => {
  return (
    <section id="Page2" className="relative min-h-screen w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* Subtle background snowfall ambience */}
      <Snowfall
        snowflakeCount={35}
        color="#38bdf8"
        style={{
          opacity: 0.25,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Rotating ambient tech watermark */}
      <div className="absolute right-4 top-16 sm:right-12 sm:top-24 opacity-15 pointer-events-none z-0">
        <img
          src="./reactjs.png"
          alt="React"
          className="w-28 sm:w-36 lg:w-48 h-auto rotating"
        />
      </div>

      {/* About Me Hero Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-emerald-950/30 to-zinc-950/90 border border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-emerald-950/30">
          
          {/* Profile Image with subtle frame */}
          <div className="relative shrink-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl group">
              <img
                src="./myimage.jpg"
                alt="Sujal Saraswat"
                className="w-48 sm:w-60 lg:w-[280px] h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Status indicator pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 border border-emerald-400/40 text-[11px] font-semibold tracking-wider text-emerald-300 flex items-center gap-1.5 whitespace-nowrap shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              OPEN TO WORK
            </div>
          </div>

          {/* Bio Content */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
              About Me
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Who <span className="text-emerald-400">I Am</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal">
              Hello 👋🏼, I am a{" "}
              <span className="text-white font-semibold">
                B.Tech CSE student
              </span>{" "}
              at Lakshmi Narain College of Technology, Bhopal, passionate about crafting modern, high-performance web applications.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal">
              As a{" "}
              <span className="text-white font-semibold">
                Backend-Leaned Full Stack Developer
              </span>
              , I transform complex ideas into interactive, scalable, and visually polished digital experiences using React, Next.js, Node.js, Express, and MongoDB.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal">
              I consistently explore modern design systems and architectural patterns. I use{" "}
              <span className="text-white font-semibold">Java</span> to solve algorithmic problems, sharpening my understanding of data structures, computational complexity, and clean code principles.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Wave Animation */}
      <div className="hidden md:block absolute z-0 left-6 -mt-10 opacity-20 pointer-events-none">
        <Lottie
          animationData={Wave}
          loop={true}
          style={{ width: 260, height: 260 }}
        />
      </div>

      {/* Section Header: What I Do */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-24 sm:mt-32 px-4">
        <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
          Core Capabilities
        </span>
        <h2 className="uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
          What I <span className="text-emerald-400">Actually Do</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-3" />
        <p className="text-zinc-400 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          I engineer responsive interfaces, robust backend APIs, and full-stack solutions tailored to real-world demands — blending performance with aesthetic polish.
        </p>
      </div>

      {/* 4 Capabilities Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-12 px-4 sm:px-6">
        {services.map((item, index) => (
          <div
            key={index}
            className={`group p-6 sm:p-7 rounded-2xl bg-gradient-to-b ${item.gradient} border ${item.border} backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 ${item.glow} flex flex-col justify-between`}
          >
            <div>
              <div className="w-16 h-16 mx-auto mb-5 p-2 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 object-contain"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h3 className="text-white text-base sm:text-lg font-bold text-center uppercase tracking-wide mb-2.5">
                {item.title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className={`text-center text-xs font-semibold uppercase tracking-wider mt-5 ${item.accent} opacity-80 group-hover:opacity-100 transition-opacity`}>
              Learn More →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page2
