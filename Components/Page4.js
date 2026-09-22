"use client"
import React from 'react'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import Skills from '../public/Skills.json'
import Projects from './Projects'

const Page4 = () => {
  return (
    <section id="Page4" className="min-h-screen w-full overflow-hidden bg-black pt-12 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-emerald-400">
            Selected Works & Software
          </span>
          <h2 className="uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mt-2">
            My Creations In Code — See My{" "}
            <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto lg:mx-0 mt-4" />
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-normal mt-5 max-w-xl leading-relaxed">
            Building modern web experiences that are both functionally robust and visually compelling — from full-stack platforms to fluid frontend interfaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] flex justify-center"
        >
          <Lottie
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            animationData={Skills}
            loop={true}
          />
        </motion.div>
      </div>

      <Projects />
    </section>
  )
}

export default Page4