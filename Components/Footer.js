"use client"
import React from 'react'
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/10 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <a
            href="#Page1"
            className="text-lg font-extrabold tracking-wider text-white uppercase inline-block"
          >
            WORKS.<span className="text-orange-400">SUJAL</span>
          </a>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Crafted with precision using Next.js, React & Tailwind CSS.
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            © {new Date().getFullYear()} Sujal Saraswat. All rights reserved.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-400">
          <a href="#Page1" className="hover:text-white transition-colors">HOME</a>
          <a href="#Page2" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#Page3" className="hover:text-white transition-colors">SKILLS</a>
          <a href="#Page4" className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#Page8" className="hover:text-white transition-colors">CONNECT</a>
        </div>

        {/* Social Icons & Back-to-Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/codingerror7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sujal-saraswat-a7aa63202/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-blue-400 hover:border-blue-400/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:saraswatsujal@gmail.com"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/shotsinmind"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-sky-400 hover:border-sky-400/30 transition-all"
              aria-label="X Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:border-orange-400 transition-all cursor-pointer"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
