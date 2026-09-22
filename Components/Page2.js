"use client"
import React, { useState } from 'react'
import Lottie from 'lottie-react'
import Wave from '../public/Wave.json'
import Snowfall from 'react-snowfall'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {
  Code2,
  Server,
  Cpu,
  Rocket,
  Terminal,
} from 'lucide-react'

const engineeringPillars = [
  {
    step: "01",
    action: "BUILD",
    role: "Frontend Architecture",
    tagline: "Component-Driven & High-Fidelity UI",
    description:
      "Engineering modern, accessible web applications using React 19 and Next.js App Router. Focusing on clean component boundaries, predictable state machines, and fluid micro-interactions with TailwindCSS.",
    tech: ["React 19", "Next.js", "TailwindCSS", "Framer Motion"],
    icon: Code2,
    gradient: "from-cyan-500/10 via-blue-950/20 to-zinc-950/90",
    border: "border-cyan-500/25 hover:border-cyan-400/60",
    glow: "group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]",
    accent: "text-cyan-400",
    numberColor: "group-hover:text-cyan-400",
    barColor: "from-cyan-500 to-blue-400",
    cornerGlow: "bg-cyan-500/15",
  },
  {
    step: "02",
    action: "ENGINEER",
    role: "Backend & Systems",
    tagline: "Scalable APIs, Auth & Data Schemas",
    description:
      "Designing resilient RESTful endpoints, secure JWT authentication lifecycles, and normalized MongoDB document models with Node.js and Express. Writing modular controllers with defensive validation and error handling.",
    tech: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
    icon: Server,
    gradient: "from-emerald-500/10 via-teal-950/20 to-zinc-950/90",
    border: "border-emerald-500/25 hover:border-emerald-400/60",
    glow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    accent: "text-emerald-400",
    numberColor: "group-hover:text-emerald-400",
    barColor: "from-emerald-500 to-teal-400",
    cornerGlow: "bg-emerald-500/15",
  },
  {
    step: "03",
    action: "INTEGRATE",
    role: "Services & Ecosystems",
    tagline: "External APIs, Cloud & AI Workflows",
    description:
      "Connecting core web applications with third-party ecosystems — integrating OpenAI LLM APIs for AI chatbots (like Tutorly.ai), cloud media storage, transactional webhooks, and testing every endpoint rigorously with Postman.",
    tech: ["OpenAI API", "Cloud APIs", "Postman", "Webhooks", "JSON APIs"],
    icon: Cpu,
    gradient: "from-amber-500/10 via-orange-950/20 to-zinc-950/90",
    border: "border-amber-500/25 hover:border-amber-400/60",
    glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
    accent: "text-amber-400",
    numberColor: "group-hover:text-amber-400",
    barColor: "from-amber-500 to-orange-400",
    cornerGlow: "bg-amber-500/15",
  },
  {
    step: "04",
    action: "SHIP",
    role: "DevOps & Optimization",
    tagline: "Deployment, Vitals & Algorithmic Rigor",
    description:
      "Deploying full-stack production builds to Vercel, Render, and AWS with Docker containerization and Git workflows. Applying Java algorithmic problem-solving fundamentals (600+ solved) to ensure lean, performant execution.",
    tech: ["Docker", "Git / GitHub", "Vercel", "Render", "Java DSA"],
    icon: Rocket,
    gradient: "from-sky-500/10 via-indigo-950/20 to-zinc-950/90",
    border: "border-sky-500/25 hover:border-sky-400/60",
    glow: "group-hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]",
    accent: "text-sky-400",
    numberColor: "group-hover:text-sky-400",
    barColor: "from-sky-500 to-indigo-400",
    cornerGlow: "bg-sky-500/15",
  },
]

// Reusable card component for both desktop grid and mobile horizontal carousel
const PillarCard = ({ pillar, isMobile = false }) => {
  const IconComponent = pillar.icon

  return (
    <div
      className={`group relative ${
        isMobile ? 'p-5 sm:p-6' : 'p-7 sm:p-8'
      } rounded-2xl bg-gradient-to-b ${pillar.gradient} border ${
        pillar.border
      } backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
        pillar.glow
      } flex flex-col justify-between overflow-hidden cursor-default h-full`}
    >
      {/* Subtle Ambient Radial Corner Highlight */}
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 ${pillar.cornerGlow} rounded-full blur-3xl pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Top ambient highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/40 transition-all duration-500" />

      <div>
        {/* Header: Step Number + Icon & Role Tag */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span
              className={`font-mono ${
                isMobile ? 'text-2xl' : 'text-2xl sm:text-3xl'
              } font-extrabold text-zinc-500 transition-all duration-300 ${pillar.numberColor}`}
            >
              {pillar.step}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-400 transition-colors" />
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono text-zinc-400 font-medium">
              {pillar.role}
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 group-hover:border-white/25 transition-all duration-300 shrink-0">
            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${pillar.accent}`} />
          </div>
        </div>

        {/* Pillar Action & Tagline */}
        <div className="mb-2.5 sm:mb-3">
          <h3
            className={`${
              isMobile ? 'text-lg' : 'text-xl sm:text-2xl'
            } font-extrabold text-white tracking-tight flex items-center gap-2`}
          >
            <span>{pillar.action}</span>
            <span className="text-zinc-600 font-normal text-xs sm:text-sm font-mono">•</span>
            <span className={`text-xs sm:text-sm font-semibold ${pillar.accent}`}>
              {pillar.tagline}
            </span>
          </h3>
          {/* Expanding accent bar */}
          <div
            className={`h-[2px] w-8 group-hover:w-20 bg-gradient-to-r ${pillar.barColor} rounded-full mt-2 transition-all duration-300`}
          />
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-normal">
          {pillar.description}
        </p>
      </div>

      {/* Technologies Applied Footer */}
      <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 mr-1">
          Stack:
        </span>
        {pillar.tech.map((t) => (
          <span
            key={t}
            className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/10 text-zinc-300 group-hover:border-white/20 group-hover:text-white transition-all duration-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

const Page2 = () => {
  return (
    <section id="Page2" className="relative min-h-screen w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* Subtle background snowfall ambience */}
      <Snowfall
        snowflakeCount={30}
        color="#38bdf8"
        style={{
          opacity: 0.2,
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
          alt="React Watermark"
          className="w-28 sm:w-36 lg:w-48 h-auto rotating"
        />
      </div>

      {/* About Me Hero Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-emerald-950/30 to-zinc-950/90 border border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-emerald-950/30"
        >
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

      {/* Section Header: What I Actually Do */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto text-center mt-24 sm:mt-32 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Engineering Philosophy & Workflow</span>
        </div>
        <h2 className="uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          What I <span className="text-emerald-400">Actually Do</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-3.5" />
        <p className="text-zinc-400 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          From architectural decisions and robust data models to production deployments — here is how I approach and execute software engineering.
        </p>
      </motion.div>

      {/* MOBILE ONLY: Horizontal Touch Swipe Carousel (< md) */}
      <div className="block md:hidden mt-8 px-4 w-full overflow-hidden">
        <Swiper
          slidesPerView={1.12}
          spaceBetween={14}
          grabCursor={true}
          allowTouchMove={true}
          watchOverflow={true}
          className="w-full select-none py-2"
        >
          {engineeringPillars.map((pillar) => (
            <SwiperSlide key={`mobile-${pillar.step}`} className="h-auto">
              <PillarCard pillar={pillar} isMobile={true} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-zinc-500 font-mono">
          <span>← Swipe horizontally to explore →</span>
        </div>
      </div>

      {/* DESKTOP & TABLET: Structured 2-Column Grid (>= md) */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto mt-12 px-4 sm:px-6">
        {engineeringPillars.map((pillar, index) => (
          <motion.div
            key={`desktop-${pillar.step}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <PillarCard pillar={pillar} isMobile={false} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Page2
