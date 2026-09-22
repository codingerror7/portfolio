"use client"
import React from 'react'
import { Trophy, Lightbulb, Sparkles, Award, Code, CheckCircle2 } from "lucide-react"

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
  },
  {
    year: "2024",
    title: "Infosys Springboard Web Development Certification",
    issuer: "Infosys Springboard",
    type: "Full-Stack Development",
  },
  {
    year: "2024",
    title: "Skillsoft Java Programming Language Certification",
    issuer: "Skillsoft",
    type: "Programming & OOP",
  },
  {
    year: "Milestone",
    title: "Solved 500+ Algorithmic Problems on CodeChef",
    issuer: "Competitive Programming",
    type: "Data Structures & Logic",
  },
  {
    year: "Milestone",
    title: "Contributed to 2+ Open Source Community Repositories",
    issuer: "Open Source Ecosystem",
    type: "GitHub Collaboration",
  },
]

const Page6 = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Beyond Academics
          </span>
          <h2 className="uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Achievements, Certifications &{" "}
            <span className="text-emerald-400">Hackathons</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
            A snapshot of competitive programming, hackathons, and certified milestones demonstrating relentless curiosity.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {hackathons.map((hack, index) => {
            const Icon = hack.icon
            return (
              <div
                key={index}
                className={`p-7 sm:p-8 rounded-2xl bg-zinc-950/80 border ${hack.border} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${hack.glow} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-10 h-10 ${hack.accent}`} />
                    <span className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${hack.badge}`}>
                      {hack.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {hack.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {hack.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className={`text-xs font-medium ${hack.accent}`}>
                    {hack.highlight}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications & Milestones Header */}
        <div className="text-center mb-10">
          <span className="uppercase tracking-widest text-xs font-semibold text-zinc-400">
            Verified Credentials & Milestones
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Certifications & Technical Badges
          </h3>
        </div>

        {/* Certifications Clean List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300 hover:bg-zinc-900/50 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {cred.issuer} • <span className="text-emerald-400/80">{cred.type}</span>
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-zinc-300 bg-white/5 border border-white/10 whitespace-nowrap shrink-0">
                {cred.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Page6