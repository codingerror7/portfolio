"use client"
import React, { useState, useEffect } from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "HOME", href: "#Page1" },
    { name: "ABOUT", href: "#Page2" },
    { name: "SKILLS", href: "#Page3" },
    { name: "PROJECTS", href: "#Page4" },
    { name: "CONNECT", href: "#Page8" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md py-3 md:py-4 border-b border-white/10 shadow-lg shadow-black/40"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#Page1"
            className="group flex items-center gap-1.5 text-base sm:text-lg lg:text-2xl font-extrabold tracking-wider text-white uppercase transition-transform duration-200 hover:scale-105"
          >
            <span>WORKS.</span>
            <span className="text-orange-400 group-hover:text-amber-300 transition-colors duration-200">
              SUJAL
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm lg:text-base font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 uppercase tracking-wider hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/Sujal_resume.pdf"
              download="Sujal_resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2 rounded-full text-zinc-950 font-semibold text-xs lg:text-sm bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 hover:from-orange-300 hover:to-amber-300 shadow-[0_0_20px_rgba(251,146,60,0.35)] hover:shadow-[0_0_28px_rgba(251,146,60,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Resume</span>
              <FaCloudDownloadAlt className="text-sm lg:text-base" />
            </a>
          </nav>

          {/* Mobile Actions: Resume + Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="/Sujal_resume.pdf"
              download="Sujal_resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-zinc-950 font-semibold text-xs bg-gradient-to-r from-orange-400 to-amber-400 shadow-[0_0_12px_rgba(251,146,60,0.4)]"
            >
              <span>CV</span>
              <FaCloudDownloadAlt className="text-xs" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-200 hover:text-white rounded-lg bg-white/5 border border-white/10 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex flex-col gap-4 text-center animate-in fade-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium tracking-wider text-zinc-300 hover:text-orange-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
      {/* Spacer so fixed header doesn't overlap on non-hero pages if needed */}
      <div className="h-4 md:h-6" />
    </>
  )
}

export default Navbar