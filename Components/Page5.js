"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import Student from '../public/Student.json'
import Books from '../public/Books.json'
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"

const educationList = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institute: "LNCT Group of Colleges, Bhopal",
    duration: "2023 – 2027",
    score: "CGPA: 7.5",
    scoreBadge: "border-purple-400/30 text-purple-300 bg-purple-500/10",
    location: "Bhopal, Madhya Pradesh",
    description: "Specializing in Computer Science & Engineering with coursework covering Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Full-Stack Engineering.",
    borderColor: "hover:border-purple-400/50",
    glowColor: "hover:shadow-purple-500/20",
    dotColor: "from-purple-400 to-indigo-500",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institute: "Model Higher Secondary School",
    duration: "2021 – 2023",
    score: "Percentage: 87%",
    scoreBadge: "border-amber-400/30 text-amber-300 bg-amber-500/10",
    location: "Bhopal, Madhya Pradesh",
    description: "Completed higher secondary education in Science stream (Mathematics, Physics, Chemistry) with strong academic performance.",
    borderColor: "hover:border-amber-400/50",
    glowColor: "hover:shadow-amber-500/20",
    dotColor: "from-amber-400 to-orange-500",
  },
  {
    degree: "High School Certificate (10th)",
    institute: "Father Agnel High School",
    duration: "2020 – 2021",
    score: "Percentage: 93%",
    scoreBadge: "border-emerald-400/30 text-emerald-300 bg-emerald-500/10",
    location: "Bhopal, Madhya Pradesh",
    description: "Graduated with top academic honors (93%), developing deep analytical curiosity and disciplined problem-solving fundamentals.",
    borderColor: "hover:border-emerald-400/50",
    glowColor: "hover:shadow-emerald-500/20",
    dotColor: "from-emerald-400 to-teal-500",
  },
]

const Page5 = () => {
  return (
    <section id="Education" className="min-h-screen w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* Top Header & Intro Visual */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] flex justify-center"
        >
          <Lottie
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            animationData={Student}
            loop={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[55%] text-center lg:text-left"
        >
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Academic Background
          </span>
          <h2 className="uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mt-2">
            Learning Path — My <span className="text-emerald-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto lg:mx-0 mt-4" />
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-medium mt-5 max-w-xl leading-relaxed">
            I may not be from a top-tier institute, but I strive every day to build top-tier, production-ready work.
          </p>
        </motion.div>
      </div>

      {/* Main Responsive Timeline Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Timeline Column (8 cols on lg) */}
        <div className="lg:col-span-8 relative">
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-amber-500 to-emerald-500 rounded-full" />

          <div className="space-y-10 sm:space-y-12">
            {educationList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Glowing Node Dot on Timeline */}
                <div
                  className={`absolute left-[9px] sm:left-[17px] top-6 w-4 h-4 rounded-full bg-gradient-to-br ${item.dotColor} ring-4 ring-black shadow-lg transition-transform duration-300 group-hover:scale-125`}
                />

                {/* Education Card */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 ${item.borderColor} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${item.glowColor}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${item.scoreBadge}`}>
                      {item.score}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2 mb-1 group-hover:text-zinc-100 transition-colors">
                    {item.degree}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-zinc-400" />
                    {item.institute}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 pt-3 border-t border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Illustration Column (4 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:col-span-4 justify-center items-center"
        >
          <div className="w-full max-w-[340px]">
            <Lottie
              animationData={Books}
              loop={true}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Page5