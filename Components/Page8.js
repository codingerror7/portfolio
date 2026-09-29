"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Linkedin,
  Github,
  Phone,
  Download,
  Mail,
  Twitter,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from "lucide-react"
import Lottie from 'lottie-react'
import Hi from '../public/Hi.json'

const Page8 = () => {
  const [copiedType, setCopiedType] = useState(null)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2500)
  }

  const contacts = [
    {
      title: "LinkedIn",
      label: "Professional Profile",
      value: "sujal-saraswat",
      href: "https://www.linkedin.com/in/sujal-saraswat-a7aa63202/",
      icon: Linkedin,
      color: "text-blue-400",
      border: "border-blue-500/30 hover:border-blue-400",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    },
    {
      title: "GitHub",
      label: "Code & Repositories",
      value: "codingerror7",
      href: "https://github.com/codingerror7",
      icon: Github,
      color: "text-white",
      border: "border-zinc-500/30 hover:border-white",
      glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
    },
    {
      title: "Email",
      label: "Direct Inquiries",
      value: "saraswatsujal@gmail.com",
      href: "mailto:saraswatsujal@gmail.com",
      icon: Mail,
      color: "text-cyan-400",
      border: "border-cyan-500/30 hover:border-cyan-400",
      glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]",
      canCopy: true,
    },
    {
      title: "X (Twitter)",
      label: "Thoughts & Updates",
      value: "@shotsinmind",
      href: "https://x.com/shotsinmind?t=Matt9gYz9gIQhtqTm3a17Q&s=09",
      icon: Twitter,
      color: "text-sky-400",
      border: "border-sky-500/30 hover:border-sky-400",
      glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]",
    },
    {
      title: "Phone",
      label: "Available on Call",
      value: "+91 9300446947",
      href: "tel:+919300446947",
      icon: Phone,
      color: "text-emerald-400",
      border: "border-emerald-500/30 hover:border-emerald-400",
      glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]",
      canCopy: true,
    },
  ]

  return (
    <section id="Page8" className="relative min-h-screen w-full overflow-hidden bg-black py-14 sm:py-20 lg:py-28 font-sans">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="uppercase tracking-widest text-[11px] sm:text-sm font-semibold text-emerald-400">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-1.5 sm:mt-2 mb-3 sm:mb-4">
            Let’s <span className="text-emerald-400">Connect</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mb-4 sm:mb-6" />
          <p className="text-zinc-300 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-14 font-normal">
            Open to full-time engineering roles, freelance opportunities, open source projects, and meaningful technical conversations. Let’s build something impactful together.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {contacts.map((item, idx) => {
            const Icon = item.icon
            const isLast = idx === contacts.length - 1
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-zinc-950/80 border ${item.border} backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${item.glow} flex flex-col justify-between text-center overflow-hidden ${
                  isLast ? 'col-span-2 sm:col-span-2 lg:col-span-1 xl:col-span-1 max-w-xs sm:max-w-none mx-auto w-full' : 'col-span-1'
                }`}
              >
                {/* Subtle top border highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/35 transition-all" />

                <div>
                  <div className="w-11 h-11 sm:w-14 sm:h-14 mx-auto mb-2.5 sm:mb-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-0.5 sm:mb-1 group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-zinc-400 mb-2.5 sm:mb-4">
                    {item.label}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2 pt-2.5 sm:pt-3 border-t border-white/10">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 sm:gap-1.5 text-xs font-semibold text-zinc-200 hover:text-white py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:scale-105"
                  >
                    <span>Open</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {item.canCopy && (
                    <button
                      onClick={() => handleCopy(item.value, item.title)}
                      className="inline-flex items-center justify-center gap-1 text-[10px] sm:text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors py-1 px-2 rounded-md hover:bg-white/5 cursor-pointer"
                    >
                      {copiedType === item.title ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Buttons: Primary Resume + Secondary Direct Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-10 sm:mb-16 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <a
            href="/Sujal_resume.pdf"
            download="Sujal_resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-zinc-950 font-bold text-sm sm:text-lg shadow-[0_0_25px_rgba(251,146,60,0.4)] hover:shadow-[0_0_40px_rgba(251,146,60,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Download Full Resume</span>
          </a>

          <a
            href="mailto:saraswatsujal@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-sm sm:text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span>Send Direct Email</span>
          </a>
        </motion.div>

        {/* Closing Mascot / Greeting Illustration */}
        <div className="max-w-[220px] sm:max-w-[420px] lg:max-w-[550px] mx-auto opacity-90">
          <Lottie
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            animationData={Hi}
            loop={true}
          />
        </div>

      </div>
    </section>
  )
}

export default Page8