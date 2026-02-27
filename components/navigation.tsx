"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, GithubIcon, Mail, Home, User, Briefcase, Code, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/skills", label: "Skills", icon: Code },
    { href: "/contact", label: "Contact", icon: MessageCircle },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 border-b border-cyan-500/20" 
          : "bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="group relative flex items-center space-x-3 transition-all duration-300 focus:outline-none focus:ring-0"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-600 rounded-xl shadow-lg shadow-cyan-500/60 group-hover:shadow-2xl group-hover:shadow-cyan-500/80 group-hover:scale-110 transition-all duration-300">
              <Code className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="relative text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-teal-300 group-hover:to-emerald-300 transition-all duration-300">
              Ranjeet Yadav
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-0 ${
                    isActive 
                      ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/60" 
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 backdrop-blur-sm"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-white" : "group-hover:scale-110"}`} />
                  <span className="relative">
                    {item.label}
                    {!isActive && (
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    )}
                  </span>
                </Link>
              )
            })}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-slate-700/50">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="group relative overflow-hidden hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-0"
            >
              <a href="https://github.com/Ranjeet550" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-4 h-4 transition-all duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="group relative overflow-hidden hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-0"
            >
              <a href="mailto:ranjeetyadav550@gmail.com">
                <Mail className="w-4 h-4 transition-all duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)}
              className="group relative p-2 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-0"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-300">
            <div className="mx-2 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20 overflow-hidden">
              <div className="py-3 space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center space-x-3 mx-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:scale-[0.98] focus:outline-none focus:ring-0 ${
                        isActive 
                          ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/60" 
                          : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-white" : "group-hover:scale-110 group-hover:text-cyan-400"}`} />
                      <span className="relative">
                        {item.label}
                        {!isActive && (
                          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        )}
                      </span>
                    </Link>
                  )
                })}
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-t border-slate-700/50">
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://github.com/Ranjeet550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/30 shadow-md hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 hover:border-cyan-500/60"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">GitHub</span>
                  </a>
                  <a
                    href="mailto:ranjeetyadav550@gmail.com"
                    className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/30 shadow-md hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 hover:border-cyan-500/60"
                  >
                    <Mail className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
