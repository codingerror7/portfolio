"use client"
import React from 'react'

const frontendSkills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Bootstrap 5",
  "GSAP",
  "Three.js",
  "Material UI",
  "Figma",
  "Framer Motion",
  "React Query",
  "Chakra UI",
]

const backendSkills = [
  "MySQL",
  "MongoDB",
  "Express",
  "Node.js",
  "REST API",
  "GraphQL",
  "Firebase",
  "JWT Auth",
  "Jest",
  "Postman",
  "Docker",
]

const otherSkills = [
  "Java",
  "Python",
  "AWS",
  "Git",
  "GitHub",
  "Cloudflare",
  "Vercel",
  "Render",
  "VS Code",
  "IntelliJ",
  "Gen AI",
]

const academicSkills = [
  "OOPS",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Data Structures",
  "Software Engineering",
  "ADA",
  "Problem Solving",
  "Communication Skills",
  "Project Management",
]

const Page3 = () => {
  return (
    <section id="Page3" className="bg-black py-20 lg:py-28 overflow-hidden">
      {/* Bento Grid Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Proven Metrics & Growth
          </span>
          <h2 className="uppercase font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Experience & <span className="text-emerald-400">Milestones</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: 3+ Years UI/UX */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/40 flex flex-col justify-center text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-2">
              3+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Years of Experience in UI/UX & Web Designing
            </p>
          </div>

          {/* Card 2: 1+ Years Web Dev */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950/40 flex flex-col justify-center text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 mb-2">
              1+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Years of Experience in Full-Stack Web Development
            </p>
          </div>

          {/* Card 3: Frontend Chart (Spans 1 col, 2 rows on desktop) */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl col-span-1 lg:row-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                Specialization
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-4">
                Frontend Architecture
              </h3>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/5 my-auto">
              <img
                src="./frontchart.png"
                alt="Frontend Skills Breakdown"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-zinc-400 mt-4 text-center">
              Modern React & Next.js Ecosystems
            </p>
          </div>

          {/* Card 4: 5+ Frontend Apps */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-yellow-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-950/40 flex flex-col justify-center text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-2">
              5+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              High-Performance Frontend Web Applications
            </p>
          </div>

          {/* Card 5: 3+ Backend Projects */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-rose-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-950/40 flex flex-col justify-center text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-300 mb-2">
              3+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Scalable Core Backend & API Architectures
            </p>
          </div>

          {/* Card 6: 3+ MERN Projects */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/40 flex flex-col justify-center text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-2">
              3+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Production-Grade Full-Stack MERN Solutions
            </p>
          </div>

          {/* Card 7: Backend Chart (Spans 1 col, 2 rows on desktop) */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl col-span-1 lg:row-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-cyan-400 tracking-wider">
                Specialization
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-4">
                Backend Systems
              </h3>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/5 my-auto">
              <img
                src="./backchart.png"
                alt="Backend Skills Breakdown"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-zinc-400 mt-4 text-center">
              Node, Express, MongoDB & Microservices
            </p>
          </div>

          {/* Card 8: Libraries & Frameworks */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/40 flex flex-col justify-center text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              20+ Tools
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Libraries & Frameworks including React, Redux, Next.js & Tailwind
            </p>
          </div>

          {/* Card 9: HIRE ME CTA Card */}
          <a
            href="#Page8"
            className="group p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-900/40 to-black border border-blue-400/50 hover:border-blue-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col items-center justify-center text-center"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-blue-300 mb-2">
              Available For Opportunities
            </span>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
              HIRE ME.
            </h3>
            <span className="text-xs sm:text-sm text-blue-200 mt-2 font-medium underline underline-offset-4">
              Let’s work together →
            </span>
          </a>

          {/* Card 10: Solved 600+ Problems */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-orange-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-950/40 flex flex-col justify-center text-center sm:col-span-2 lg:col-span-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-2">
              600+ Questions Solved
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Algorithmic problems tackled across LeetCode, CodeChef, and GeeksforGeeks with Java & Data Structures.
            </p>
          </div>

        </div>
      </div>

      {/* Skills Pill Badges Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 sm:mt-36">
        <div className="text-center mb-12">
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Technical Proficiency
          </span>
          <h2 className="uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Have A Look At My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          
          {/* FRONTEND */}
          <div>
            <h3 className="text-center text-sm sm:text-base font-bold uppercase tracking-widest text-amber-400 mb-6">
              Frontend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-amber-100 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:shadow-[0_0_18px_rgba(245,158,11,0.35)] transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3 className="text-center text-sm sm:text-base font-bold uppercase tracking-widest text-rose-400 mb-6">
              Backend & Database
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-rose-100 bg-rose-500/10 border border-rose-500/30 hover:border-rose-400 hover:bg-rose-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(244,63,94,0.15)] hover:shadow-[0_0_18px_rgba(244,63,94,0.35)] transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* OTHERS / TOOLS */}
          <div>
            <h3 className="text-center text-sm sm:text-base font-bold uppercase tracking-widest text-emerald-400 mb-6">
              Tools & Cloud Ecosystem
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-emerald-100 bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_18px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ACADEMICS */}
          <div>
            <h3 className="text-center text-sm sm:text-base font-bold uppercase tracking-widest text-sky-400 mb-6">
              Computer Science Fundamentals
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
              {academicSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-sky-100 bg-sky-500/10 border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(14,165,233,0.15)] hover:shadow-[0_0_18px_rgba(14,165,233,0.35)] transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Page3