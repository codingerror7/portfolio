'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ArrowUpRight, Sparkles, Compass, Users } from "lucide-react"
import { RiReactjsFill } from "react-icons/ri"
import { FaNode } from "react-icons/fa"
import { SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens } from "react-icons/si"

const projectTechIcons = {
  "React": RiReactjsFill,
  "Node.js": FaNode,
  "Express": SiExpress,
  "MongoDB": SiMongodb,
  "JWT": SiJsonwebtokens,
  "TailwindCSS": SiTailwindcss,
}

export default function Projects() {
  const otherProjects = [
    {
      title: "Tutorly.ai",
      category: "AI & Education",
      desc: "An AI-powered learning assistant platform providing instant explanations, study summaries, and interactive guidance.",
      tech: ["React", "AI Chatbot", "OpenAI API", "TailwindCSS"],
      live: "https://tutorly-ai-nine.vercel.app/",
      github: "https://github.com/codingerror7/Tutorly.ai",
      icon: Sparkles,
      accent: "text-purple-400",
      border: "border-purple-500/30 hover:border-purple-400/60",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      badge: "text-purple-300 bg-purple-500/10 border-purple-500/30",
    },
    {
      title: "DUO Website",
      category: "Creative Agency",
      desc: "A modern, high-conversion business website designed with clean UI layout, smooth animations, and strong visual hierarchy.",
      tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      live: "https://duo-website-eight.vercel.app/",
      github: "https://github.com/codingerror7/Duo-Website",
      icon: Compass,
      accent: "text-amber-400",
      border: "border-amber-500/30 hover:border-amber-400/60",
      glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
      badge: "text-amber-300 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "HackVerse",
      category: "Developer Platform",
      desc: "A hackathon discovery and collaboration platform where developers discover events, form teams, and brainstorm ideas in one place.",
      tech: ["JavaScript", "GSAP", "Three.js", "Web Animations"],
      github: "https://github.com/codingerror7/Hacker-Website-Project",
      icon: Users,
      accent: "text-cyan-400",
      border: "border-cyan-500/30 hover:border-cyan-400/60",
      glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
      badge: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
    },
  ]

  return (
    <section className="relative bg-black py-16 lg:py-24 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[550px] h-[320px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= FEATURED PROJECT 1: ShopZilla ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl p-8 sm:p-12 mb-12 bg-gradient-to-br from-[#020617] via-[#090e24] to-black border border-blue-500/30 hover:border-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_45px_rgba(59,130,246,0.35)] overflow-hidden"
        >
          {/* Subtle Project Index Number Watermark */}
          <span className="absolute top-6 right-8 text-6xl sm:text-8xl font-black font-mono text-white/[0.04] group-hover:text-blue-500/10 transition-colors pointer-events-none select-none">
            01
          </span>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-blue-500/15 border border-blue-400/40 text-blue-300">
              Featured Platform
            </span>
            <span className="text-xs text-zinc-400 font-mono">Full-Stack MERN</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 group-hover:text-blue-300 transition-colors">
            ShopZilla — Full Stack E-Commerce Platform
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-6 font-normal">
            Designed and engineered an end-to-end scalable e-commerce platform focusing on high performance, secure checkout flows, authenticated sessions, responsive catalog browsing, and seamless inventory management.
          </p>

          {/* Tech Stack Badges with Icons */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
            {["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"].map((tech) => {
              const IconComp = projectTechIcons[tech]
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm rounded-full border border-blue-500/30 text-blue-200 bg-blue-950/40 backdrop-blur-md shadow-sm"
                >
                  {IconComp && <IconComp className="text-sm text-blue-300" />}
                  <span>{tech}</span>
                </span>
              )
            })}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-3 border-t border-white/10">
            <a
              href="https://shopzilla-app-4ray.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-400 hover:text-blue-300 transition-all hover:translate-x-1"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/codingerror7/shopzilla-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-zinc-300 hover:text-white transition-all hover:translate-x-1"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>
        </motion.div>

        {/* ================= FEATURED PROJECT 2: TripNest ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl p-8 sm:p-12 mb-12 bg-gradient-to-br from-[#1a1305] via-[#1f1908] to-black border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_45px_rgba(245,158,11,0.35)] overflow-hidden"
        >
          {/* Subtle Project Index Number Watermark */}
          <span className="absolute top-6 right-8 text-6xl sm:text-8xl font-black font-mono text-white/[0.04] group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
            02
          </span>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/15 border border-amber-400/40 text-amber-300">
              Featured Platform
            </span>
            <span className="text-xs text-zinc-400 font-mono">Travel & Hospitality</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 group-hover:text-amber-300 transition-colors">
            TripNest — Smart Travel Booking Platform
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-6 font-normal">
            Developed a comprehensive travel booking ecosystem enabling users to discover exotic destinations, compare stay packages, plan itineraries, and manage reservations with interactive UI states and verified bookings.
          </p>

          {/* Tech Stack Badges with Icons */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
            {["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"].map((tech) => {
              const IconComp = projectTechIcons[tech]
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm rounded-full border border-amber-500/30 text-amber-200 bg-amber-950/40 backdrop-blur-md shadow-sm"
                >
                  {IconComp && <IconComp className="text-sm text-amber-300" />}
                  <span>{tech}</span>
                </span>
              )
            })}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-3 border-t border-white/10">
            <a
              href="https://github.com/codingerror7/Tripnest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-amber-400 hover:text-amber-300 transition-all hover:translate-x-1"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* ================= FEATURED PROJECT 3: Cluvio ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl p-8 sm:p-12 mb-16 bg-gradient-to-br from-[#0c0c0e] via-[#18181b] to-black border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_45px_rgba(16,185,129,0.35)] overflow-hidden"
        >
          {/* Subtle Project Index Number Watermark */}
          <span className="absolute top-6 right-8 text-6xl sm:text-8xl font-black font-mono text-white/[0.04] group-hover:text-emerald-500/10 transition-colors pointer-events-none select-none">
            03
          </span>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-500/15 border border-emerald-400/40 text-emerald-300">
              Work In Progress
            </span>
            <span className="text-xs text-zinc-400 font-mono">Community & Events</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 group-hover:text-emerald-300 transition-colors">
            Cluvio — Club & Event Management System
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-6 font-normal">
            Architecting a modern club and campus event platform to streamline registration workflows, attendee verification, executive member coordination, announcements, and real-time updates.
          </p>

          {/* Tech Stack Badges with Icons */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
            {["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"].map((tech) => {
              const IconComp = projectTechIcons[tech]
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm rounded-full border border-emerald-500/30 text-emerald-200 bg-emerald-950/40 backdrop-blur-md shadow-sm"
                >
                  {IconComp && <IconComp className="text-sm text-emerald-300" />}
                  <span>{tech}</span>
                </span>
              )
            })}
          </div>

          {/* Status & Actions */}
          <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-white/10">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Actively in active development & prototyping
            </span>

            <a
              href="https://github.com/codingerror7/Cluvio-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-zinc-300 hover:text-white transition-all hover:translate-x-1 ml-auto"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* ================= OTHER NOTABLE PROJECTS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:text-left"
        >
          <span className="uppercase tracking-widest text-xs font-semibold text-zinc-400">
            More Explorations
          </span>
          <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Other Notable Projects
          </h4>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherProjects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border ${project.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${project.glow} flex flex-col justify-between group overflow-hidden relative`}
              >
                {/* Top accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full border ${project.badge}`}>
                      {project.category}
                    </span>
                    <Icon className={`w-4 h-4 ${project.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  </div>

                  <h5 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h5>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/10 text-zinc-300 bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold pt-4 border-t border-white/5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.accent} hover:underline inline-flex items-center gap-1 transition-colors`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Closing Motto */}
        <p className="text-center text-sm sm:text-base text-zinc-400 mt-16 max-w-lg mx-auto font-medium">
          Every project is a step forward — learning, refining, and building with intent.
        </p>

      </div>
    </section>
  )
}

