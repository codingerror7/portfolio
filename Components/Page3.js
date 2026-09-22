"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Cpu,
  Database,
  Layers,
  Network,
  Binary,
  Code2,
  Workflow,
  Sparkles,
  Users,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
  SiThreedotjs,
  SiMui,
  SiFigma,
  SiFramer,
  SiReactquery,
  SiChakraui,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiJsonwebtokens,
  SiJest,
  SiPostman,
  SiPython,
  SiCloudflare,
  SiVercel,
  SiRender,
  SiIntellijidea,
} from 'react-icons/si'
import { RiReactjsFill, RiNextjsFill, RiRobot2Line, RiTerminalBoxLine } from 'react-icons/ri'
import { FaNode, FaDocker, FaJava, FaAws, FaGitAlt, FaGithub } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'

const skillIcons = {
  // Frontend
  "JavaScript": SiJavascript,
  "React.js": RiReactjsFill,
  "Next.js": RiNextjsFill,
  "TailwindCSS": SiTailwindcss,
  "Bootstrap 5": SiBootstrap,
  "GSAP": SiGreensock,
  "Three.js": SiThreedotjs,
  "Material UI": SiMui,
  "Figma": SiFigma,
  "Framer Motion": SiFramer,
  "React Query": SiReactquery,
  "Chakra UI": SiChakraui,

  // Backend
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "Express": SiExpress,
  "Node.js": FaNode,
  "REST API": TbApi,
  "GraphQL": SiGraphql,
  "Firebase": SiFirebase,
  "JWT Auth": SiJsonwebtokens,
  "Jest": SiJest,
  "Postman": SiPostman,
  "Docker": FaDocker,

  // Tools & Cloud
  "Java": FaJava,
  "Python": SiPython,
  "AWS": FaAws,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "Cloudflare": SiCloudflare,
  "Vercel": SiVercel,
  "Render": SiRender,
  "VS Code": VscVscode,
  "IntelliJ": SiIntellijidea,
  "Gen AI": RiRobot2Line,

  // Academics
  "OOPS": Cpu,
  "DBMS": Database,
  "Operating Systems": Layers,
  "Computer Networks": Network,
  "Data Structures": Binary,
  "Software Engineering": Code2,
  "ADA": Workflow,
  "Problem Solving": Sparkles,
  "Communication Skills": Users,
  "Project Management": CheckCircle2,
}

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
    <section id="Page3" className="relative bg-black py-20 lg:py-28 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[300px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Bento Grid Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Proven Metrics & Growth
          </span>
          <h2 className="uppercase font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Experience & <span className="text-emerald-400">Milestones</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: 3+ Years UI/UX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-950/40 flex flex-col justify-center text-center group"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-2 group-hover:scale-105 transition-transform duration-300">
              3+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Years of Experience in UI/UX & Web Designing
            </p>
          </motion.div>

          {/* Card 2: 1+ Years Web Dev */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-950/40 flex flex-col justify-center text-center group"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 mb-2 group-hover:scale-105 transition-transform duration-300">
              1+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Years of Experience in Full-Stack Web Development
            </p>
          </motion.div>

          {/* Card 3: Frontend Chart (Spans 1 col, 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl col-span-1 lg:row-span-2 flex flex-col justify-between group"
          >
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
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-zinc-400 mt-4 text-center">
              Modern React & Next.js Ecosystems
            </p>
          </motion.div>

          {/* Card 4: 5+ Frontend Apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-yellow-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-yellow-950/40 flex flex-col justify-center text-center group"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-2 group-hover:scale-105 transition-transform duration-300">
              5+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              High-Performance Frontend Web Applications
            </p>
          </motion.div>

          {/* Card 5: 3+ Backend Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-rose-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-rose-950/40 flex flex-col justify-center text-center group"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-300 mb-2 group-hover:scale-105 transition-transform duration-300">
              3+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Scalable Core Backend & API Architectures
            </p>
          </motion.div>

          {/* Card 6: 3+ MERN Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-purple-950/40 flex flex-col justify-center text-center group"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-2 group-hover:scale-105 transition-transform duration-300">
              3+
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Production-Grade Full-Stack MERN Solutions
            </p>
          </motion.div>

          {/* Card 7: Backend Chart (Spans 1 col, 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl col-span-1 lg:row-span-2 flex flex-col justify-between group"
          >
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
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-zinc-400 mt-4 text-center">
              Node, Express, MongoDB & Microservices
            </p>
          </motion.div>

          {/* Card 8: Libraries & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-950/40 flex flex-col justify-center text-center group"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              20+ Tools
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Libraries & Frameworks including React, Redux, Next.js & Tailwind
            </p>
          </motion.div>

          {/* Card 9: HIRE ME CTA Card */}
          <motion.a
            href="#Page8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-900/40 to-black border border-blue-400/50 hover:border-blue-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col items-center justify-center text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-5 h-5 text-blue-300" />
            </div>
            <span className="text-xs uppercase font-bold tracking-widest text-blue-300 mb-2">
              Available For Opportunities
            </span>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
              HIRE ME.
            </h3>
            <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-blue-200 mt-2 font-medium underline underline-offset-4 group-hover:text-white transition-colors">
              Let’s work together →
            </span>
          </motion.a>

          {/* Card 10: Solved 600+ Problems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-orange-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-orange-950/40 flex flex-col justify-center text-center sm:col-span-2 lg:col-span-2 group"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-2 group-hover:scale-105 transition-transform duration-300">
              600+ Questions Solved
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-medium leading-snug">
              Algorithmic problems tackled across LeetCode, CodeChef, and GeeksforGeeks with Java & Data Structures.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Skills Pill Badges Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 sm:mt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Technical Proficiency
          </span>
          <h2 className="uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Have A Look At My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Categories Stack */}
        <div className="space-y-14">
          
          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-500/40" />
              <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400">
                Frontend Development
              </h3>
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-500/40" />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
              {frontendSkills.map((skill) => {
                const IconComponent = skillIcons[skill]
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-amber-100 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(245,158,11,0.12)] hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all duration-300 hover:scale-105 cursor-default group"
                  >
                    {IconComponent && (
                      <IconComponent className="text-sm sm:text-base text-amber-300 group-hover:scale-115 transition-transform duration-200" />
                    )}
                    <span>{skill}</span>
                  </span>
                )
              })}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-rose-500/40" />
              <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-rose-400">
                Backend & Database
              </h3>
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-rose-500/40" />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
              {backendSkills.map((skill) => {
                const IconComponent = skillIcons[skill]
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-rose-100 bg-rose-500/10 border border-rose-500/30 hover:border-rose-400 hover:bg-rose-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(244,63,94,0.12)] hover:shadow-[0_0_20px_rgba(244,63,94,0.35)] transition-all duration-300 hover:scale-105 cursor-default group"
                  >
                    {IconComponent && (
                      <IconComponent className="text-sm sm:text-base text-rose-300 group-hover:scale-115 transition-transform duration-200" />
                    )}
                    <span>{skill}</span>
                  </span>
                )
              })}
            </div>
          </motion.div>

          {/* OTHERS / TOOLS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-emerald-500/40" />
              <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400">
                Tools & Cloud Ecosystem
              </h3>
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-emerald-500/40" />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
              {otherSkills.map((skill) => {
                const IconComponent = skillIcons[skill]
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-emerald-100 bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.12)] hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 cursor-default group"
                  >
                    {IconComponent && (
                      <IconComponent className="text-sm sm:text-base text-emerald-300 group-hover:scale-115 transition-transform duration-200" />
                    )}
                    <span>{skill}</span>
                  </span>
                )
              })}
            </div>
          </motion.div>

          {/* ACADEMICS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-sky-500/40" />
              <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-sky-400">
                Computer Science Fundamentals
              </h3>
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-sky-500/40" />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
              {academicSkills.map((skill) => {
                const IconComponent = skillIcons[skill]
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-sky-100 bg-sky-500/10 border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/20 backdrop-blur-md shadow-[0_0_12px_rgba(14,165,233,0.12)] hover:shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all duration-300 hover:scale-105 cursor-default group"
                  >
                    {IconComponent && (
                      <IconComponent className="w-3.5 h-3.5 text-sky-300 group-hover:scale-115 transition-transform duration-200" />
                    )}
                    <span>{skill}</span>
                  </span>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Page3