'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Mainslider from './Mainslider'
import { Typewriter } from 'react-simple-typewriter'
import { ArrowRight, Sparkles, ArrowDown } from 'lucide-react'

const Page1 = () => {
  const [theme, setTheme] = useState('orange')

  const themes = [
    { id: 'orange', name: 'Sunset Orange', color: 'bg-orange-500', border: 'border-orange-400' },
    { id: 'yellow', name: 'Amber Gold', color: 'bg-amber-400', border: 'border-amber-300' },
    { id: 'green', name: 'Emerald Forest', color: 'bg-emerald-500', border: 'border-emerald-400' },
    { id: 'blue', name: 'Cyber Blue', color: 'bg-sky-500', border: 'border-sky-400' },
  ]

  const getGradient = () => {
    switch (theme) {
      case 'yellow':
        return 'from-yellow-500/90 via-amber-600/70 via-stone-900 to-black'
      case 'green':
        return 'from-emerald-500/90 via-emerald-800/70 via-stone-900 to-black'
      case 'blue':
        return 'from-sky-600/90 via-indigo-900/80 via-stone-900 to-black'
      case 'orange':
      default:
        return 'from-orange-600/90 via-red-700/70 via-stone-900 to-black'
    }
  }

  const getTagColor = () => {
    switch (theme) {
      case 'yellow':
        return 'border-amber-400/30 text-amber-300 bg-amber-950/20 hover:border-amber-400 hover:bg-amber-950/40'
      case 'green':
        return 'border-emerald-400/30 text-emerald-300 bg-emerald-950/20 hover:border-emerald-400 hover:bg-emerald-950/40'
      case 'blue':
        return 'border-sky-400/30 text-sky-300 bg-sky-950/20 hover:border-sky-400 hover:bg-sky-950/40'
      case 'orange':
      default:
        return 'border-orange-400/30 text-orange-300 bg-orange-950/20 hover:border-orange-400 hover:bg-orange-950/40'
    }
  }

  return (
    <section id="Page1" className="relative w-full overflow-hidden bg-black">
      {/* Dynamic Themed Hero Background */}
      <div
        className={`relative min-h-[92vh] lg:min-h-[105vh] w-full overflow-hidden rounded-b-[28px] lg:rounded-b-[80px] bg-gradient-to-b ${getGradient()} transition-colors duration-700 pb-12`}
      >
        {/* Subtle Ambient Radial Glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/60 pointer-events-none" />

        <Navbar />

        {/* Hero Content Grid */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">

          {/* Left Column: Intro & Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-center lg:text-left z-20"
          >
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/10 text-zinc-200 backdrop-blur-md border border-white/15">
              Full Stack Developer
            </span>
            <p className="text-zinc-200 text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
              Hey, I am
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 mb-4 leading-none">
              <span className="block min-h-[1.2em]">
                <Typewriter
                  words={[
                    "Sujal Saraswat",
                    "Full Stack Dev",
                    "Web Designer",
                    "Problem Solver",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2200}
                />
              </span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
              Building modern, scalable web applications with clean logic and visually engaging digital craftsmanship.
            </p>

            {/* Quick Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mt-6">
              <a
                href="#Page4"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-lg group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#Page8"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white font-medium text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Let’s Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Center Column: Hero Character Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex justify-center items-center z-10 my-4 lg:my-0"
          >
            <div className="relative">
              {/* Soft glow behind character */}
              <div className="absolute inset-0 -inset-x-4 bg-white/10 blur-3xl rounded-full scale-95 pointer-events-none" />
              <img
                src="./img6.png"
                alt="Sujal Saraswat"
                className="w-[240px] sm:w-[300px] lg:w-[460px] h-auto mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] float-animation select-none"
              />
            </div>
          </motion.div>

          {/* Right Column: Motto & Focus Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-center lg:text-left z-20 lg:pl-6"
          >
            <div className="glass-panel p-6 sm:p-7 rounded-2xl max-w-md mx-auto lg:mx-0 shadow-2xl">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug">
                Learning daily. Creating often. Building slowly.
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full my-3.5 mx-auto lg:mx-0" />
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Every line of code is a step toward the future I’m building for myself. Crafting thoughtful systems from backend architectures to fluid user interfaces.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Focus Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-20 max-w-5xl mx-auto px-4 mt-8 lg:mt-12 flex flex-wrap justify-center items-center gap-2.5 sm:gap-4"
        >
          {[
            "#PROBLEM SOLVING",
            "#CRITICAL THINKING",
            "#SOFTWARE DEVELOPMENT",
            "#LOGIC BUILDING",
          ].map((tag) => (
            <span
              key={tag}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default ${getTagColor()}`}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Theme Switcher Controls */}
        <div className="absolute bottom-5 right-5 sm:right-8 z-30 flex items-center gap-2.5 px-3 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/15 shadow-xl">
          <span className="hidden sm:inline text-xs uppercase tracking-wider text-zinc-400 font-medium pl-1">
            Theme
          </span>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              aria-label={`Switch to ${t.name}`}
              title={t.name}
              className={`w-6 h-6 rounded-full ${t.color} transition-all duration-200 cursor-pointer ${theme === t.id
                  ? 'ring-2 ring-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.6)]'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Tech Stack Marquee Slider */}
      <Mainslider />
    </section>
  )
}

export default Page1