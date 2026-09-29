"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Lightbulb, Sparkles, Award, Code, CheckCircle2, Cloud, Terminal, GitBranch } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const hackathons = [
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    status: "Finalist • 2024",
    highlight: "National Level • 36-Hour Sprint",
    desc: "Selected as a national finalist for building an innovative, impact-driven solution under intense 36-hour sprint conditions, showcasing robust architecture and agile execution.",
    accent: "text-amber-400",
    border: "border-amber-400/30 hover:border-amber-400",
    glow: "hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]",
    badge: "bg-amber-400/10 text-amber-300 border-amber-400/30",
  },
  {
    icon: Lightbulb,
    title: "Idea Hackathon",
    status: "Finalist • 2025",
    highlight: "Bansal Group of Institutes • Innovation Challenge",
    desc: "Recognized as a top finalist for architecting a practical, high-value tech solution that impressed judges with its scalable feasibility and user-first implementation.",
    accent: "text-orange-400",
    border: "border-orange-400/30 hover:border-orange-400",
    glow: "hover:shadow-[0_0_35px_rgba(249,115,22,0.35)]",
    badge: "bg-orange-400/10 text-orange-300 border-orange-400/30",
  },
  {
    icon: Sparkles,
    title: "Samadhan 2.0",
    status: "Participant • 2025",
    highlight: "SISTec Bhopal • Problem-Solving Marathon",
    desc: "Actively collaborated and contributed impactful features while solving complex real-world software challenges under tight competitive deadlines.",
    accent: "text-emerald-400",
    border: "border-emerald-400/30 hover:border-emerald-400",
    glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]",
    badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
  },
]

const credentials = [
  {
    year: "2024",
    title: "Microsoft Azure Fundamentals Certification",
    issuer: "Microsoft Certified",
    type: "Cloud & Infrastructure",
    icon: Cloud,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    year: "2024",
    title: "Infosys Springboard Web Development Certification",
    issuer: "Infosys Springboard",
    type: "Full-Stack Development",
    icon: Award,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    year: "2024",
    title: "Skillsoft Java Programming Language Certification",
    issuer: "Skillsoft",
    type: "Programming & OOP",
    icon: Terminal,
    color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    year: "Milestone",
    title: "Solved 500+ Algorithmic Problems on CodeChef",
    issuer: "Competitive Programming",
    type: "Data Structures & Logic",
    icon: Code,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    year: "Milestone",
    title: "Contributed to 2+ Open Source Community Repositories",
    issuer: "Open Source Ecosystem",
    type: "GitHub Collaboration",
    icon: GitBranch,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
]

const HackathonCard = ({ hack }) => {
  const Icon = hack.icon
  return (
    <div
      className={`p-5 sm:p-7 lg:p-8 rounded-2xl bg-zinc-950/80 border ${hack.border} backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${hack.glow} flex flex-col justify-between group overflow-hidden relative h-full min-h-[270px] sm:min-h-0`}
    >
      {/* Subtle top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/35 transition-all" />

      <div>
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${hack.accent} group-hover:scale-110 transition-transform duration-300`} />
          <span className={`px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold border ${hack.badge}`}>
            {hack.status}
          </span>
        </div>

        <h3 className="text-lg sm:text-2xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-zinc-100 transition-colors">
          {hack.title}
        </h3>

        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-normal">
          {hack.desc}
        </p>
      </div>

      <div className="pt-3.5 sm:pt-4 border-t border-white/10">
        <span className={`text-[11px] sm:text-xs font-medium ${hack.accent}`}>
          {hack.highlight}
        </span>
      </div>
    </div>
  )
}

const Page6 = () => {
  const [activeHackathon, setActiveHackathon] = useState(0)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-14 sm:py-20 lg:py-28">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-16"
        >
          <span className="uppercase tracking-widest text-[11px] sm:text-sm font-semibold text-emerald-400">
            Beyond Academics
          </span>
          <h2 className="uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Achievements, Certifications &{" "}
            <span className="text-emerald-400">Hackathons</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-2.5 sm:mt-4" />
          <p className="text-zinc-400 text-xs sm:text-base lg:text-lg mt-3 sm:mt-4 leading-relaxed font-normal">
            A snapshot of competitive programming, hackathons, and certified milestones demonstrating relentless curiosity.
          </p>
        </motion.div>

        {/* MOBILE ONLY: Touch Swipe Carousel (< md) */}
        <div className="block md:hidden mb-12 w-full overflow-hidden">
          <Swiper
            slidesPerView={1.08}
            spaceBetween={14}
            grabCursor={true}
            allowTouchMove={true}
            watchOverflow={true}
            onSlideChange={(swiper) => setActiveHackathon(swiper.activeIndex)}
            className="w-full select-none py-1"
          >
            {hackathons.map((hack, index) => (
              <SwiperSlide key={`mobile-hack-${index}`} className="!h-auto flex">
                <HackathonCard hack={hack} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Progress Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {hackathons.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeHackathon === i ? 'w-6 bg-amber-400' : 'w-1.5 bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP & TABLET: 3-Column Grid (>= md) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 lg:mb-20">
          {hackathons.map((hack, index) => (
            <motion.div
              key={`desktop-hack-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="h-full"
            >
              <HackathonCard hack={hack} />
            </motion.div>
          ))}
        </div>

        {/* Certifications & Milestones Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-zinc-400">
            Verified Credentials & Milestones
          </span>
          <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Certifications & Technical Badges
          </h3>
        </motion.div>

        {/* Certifications Clean List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300 hover:bg-zinc-900/50 hover:-translate-y-1 flex items-start sm:items-center justify-between gap-3 sm:gap-4 group"
              >
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5">
                  <div className={`p-2 sm:p-2.5 rounded-xl border ${cred.color} shrink-0 group-hover:scale-110 transition-transform duration-200 mt-0.5 sm:mt-0`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-base font-semibold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                      {cred.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                      {cred.issuer} • <span className="text-zinc-300">{cred.type}</span>
                    </p>
                  </div>
                </div>

                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium text-zinc-300 bg-white/5 border border-white/10 whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                  {cred.year}
                </span>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Page6