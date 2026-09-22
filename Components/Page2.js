"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Wave from '../public/Wave.json'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Code2, Layout, Zap, Cpu } from 'lucide-react'

const services = [
  {
    title: "Graphic Design",
    icon: Layout,
    image: "./graphic.png",
    description:
      "Crafting visual identities through creative illustrations, icons, layouts, and modern aesthetics.",
    gradient: "from-amber-500/10 via-yellow-600/5 to-zinc-950/80",
    border: "border-yellow-500/25 hover:border-yellow-400/60",
    glow: "hover:shadow-[0_0_35px_rgba(234,179,8,0.22)]",
    accent: "text-amber-400",
    tag: "Visual Design",
  },
  {
    title: "Web Development",
    icon: Code2,
    image: "./webdev.png",
    description:
      "Building responsive, dynamic, fast, and scalable web apps using modern full-stack architectures.",
    gradient: "from-blue-500/10 via-indigo-600/5 to-zinc-950/80",
    border: "border-blue-500/25 hover:border-blue-400/60",
    glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.22)]",
    accent: "text-blue-400",
    tag: "Full Stack",
  },
  {
    title: "UI/UX Design",
    icon: Sparkles,
    image: "./ui.png",
    description:
      "Designing intuitive, user-centric interfaces focused on clarity, user flow, consistency, and delight.",
    gradient: "from-rose-500/10 via-orange-600/5 to-zinc-950/80",
    border: "border-rose-500/25 hover:border-rose-400/60",
    glow: "hover:shadow-[0_0_35px_rgba(244,63,94,0.22)]",
    accent: "text-rose-400",
    tag: "Interface & Experience",
  },
  {
    title: "Web Optimization",
    icon: Zap,
    image: "./webopt.png",
    description:
      "Improving load speeds, SEO rankings, accessibility, Core Web Vitals, and responsive fluidity.",
    gradient: "from-emerald-500/10 via-teal-600/5 to-zinc-950/80",
    border: "border-emerald-500/25 hover:border-emerald-400/60",
    glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.22)]",
    accent: "text-emerald-400",
    tag: "Performance & SEO",
  },
]

const Page2 = () => {
  return (
    <section id="Page2" className="relative min-h-screen w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* Subtle ambient lighting glows for rich depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-emerald-950/20 to-zinc-950/90 border border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-emerald-950/30"
        >
          {/* Profile Image with subtle frame & glow */}
          <div className="relative shrink-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl group">
              <img
                src="./myimage.jpg"
                alt="Sujal Saraswat"
                className="w-48 sm:w-60 lg:w-[280px] h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Status indicator pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/90 border border-emerald-400/40 text-[11px] font-semibold tracking-wider text-emerald-300 flex items-center gap-2 whitespace-nowrap shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              OPEN TO WORK
            </div>
          </div>

          {/* Bio Content */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
                About Me
              </span>
              <span className="w-8 h-[1px] bg-emerald-500/40" />
            </div>

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

            {/* Quick highlight tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {["Full-Stack MERN", "Data Structures & Java", "UI/UX & Design Systems"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-emerald-300/90 bg-emerald-950/30 border border-emerald-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto text-center mt-24 sm:mt-32 px-4"
      >
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
      </motion.div>

      {/* 4 Capabilities Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-12 px-4 sm:px-6">
        {services.map((item, index) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b ${item.gradient} border ${item.border} backdrop-blur-md transition-all duration-300 hover:-translate-y-2 ${item.glow} flex flex-col justify-between overflow-hidden`}
            >
              {/* Top ambient highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-500" />

              <div>
                <div className="w-16 h-16 mx-auto mb-5 p-2 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-lg">
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

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {item.tag}
                </span>
                <span className={`inline-flex items-center gap-1 font-semibold ${item.accent} group-hover:translate-x-1 transition-transform duration-300`}>
                  <IconComponent className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Page2

