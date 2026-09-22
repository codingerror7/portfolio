"use client"
import React from 'react'
import { Briefcase, Laptop, CheckCircle2, Calendar } from "lucide-react"

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Collegetips.in",
    duration: "Apr 2025 – Jun 2025",
    type: "Internship / Contract",
    icon: Briefcase,
    gradient: "from-[#071912] via-[#04110c] to-black",
    border: "border-emerald-500/30 hover:border-emerald-400",
    glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    points: [
      "Redesigned and elevated the core website UI/UX using Figma and ReactJS for intuitive navigation.",
      "Optimized frontend bundle and asset loading, significantly improving site speed and responsiveness.",
      "Built and maintained scalable MERN stack features, RESTful APIs, and MongoDB integrations.",
      "Enhanced user experience with fluid micro-interactions, smooth component transitions, and clean layouts.",
      "Collaborated in a fast-paced agile environment, practicing active code reviews and version control.",
    ],
    skills: ["ReactJS", "JavaScript", "Figma", "MongoDB", "Express", "Node.js"],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent Client Engagements",
    duration: "May 2025 – Present",
    type: "Freelance / Projects",
    icon: Laptop,
    gradient: "from-[#1a1106] via-[#100a03] to-black",
    border: "border-amber-500/30 hover:border-amber-400",
    glow: "hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]",
    accent: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    points: [
      "Partnered with clients to gather technical requirements, scope deliverables, and architect tailored solutions.",
      "Engineered end-to-end full-stack applications with high aesthetic polish, responsive UI, and secure authentication.",
      "Built custom backend REST endpoints, handled database schemas, and configured production deployments.",
      "Ensured cross-browser compatibility, accessible navigation, and optimal mobile responsiveness.",
      "Delivered reliable client communication, milestone updates, and post-launch maintenance.",
    ],
    skills: ["ReactJS", "JavaScript", "Node.js", "Express", "MongoDB", "TailwindCSS"],
  },
]

const Page7 = () => {
  return (
    <section id="Experience" className="relative min-h-screen w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* Contained ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Professional Track Record
          </span>
          <h2 className="uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Where I’ve Built & Learned —{" "}
            <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
            Hands-on software development experience across production team environments and independent client projects.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <div
                key={idx}
                className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${exp.gradient} border ${exp.border} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${exp.glow} flex flex-col justify-between`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`p-3.5 rounded-2xl border ${exp.iconBg}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                    {exp.company}
                  </h3>

                  <p className={`text-sm sm:text-base font-semibold ${exp.accent} mb-6`}>
                    {exp.role} • <span className="text-zinc-400 font-normal">{exp.type}</span>
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-8">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${exp.accent}`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Footer */}
                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs uppercase font-semibold text-zinc-400 tracking-wider block mb-2.5">
                    Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium text-zinc-200 bg-white/5 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Page7