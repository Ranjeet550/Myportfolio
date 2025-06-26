"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github, Mail, Home, User, Briefcase, Code, MessageCircle, Terminal } from "lucide-react"
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
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-purple-100/50" 
          : "bg-gradient-to-r from-white/90 via-purple-50/30 to-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="group relative flex items-center space-x-3 transition-all duration-300"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <Code className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="relative z-10 text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:via-blue-700 group-hover:to-indigo-700 transition-all duration-300">
              Ranjeet Yadav
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive 
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25" 
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-white" : "group-hover:scale-110"}`} />
                  <span className="relative">
                    {item.label}
                    {!isActive && (
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    )}
                  </span>
                </Link>
              )
            })}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-purple-200/50">
              <Button 
                variant="ghost" 
                size="sm" 
                asChild 
                className="group relative overflow-hidden hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
              >
                <a href="https://github.com/Ranjeet550" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-600" />
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild 
                className="group relative overflow-hidden hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
              >
                <a href="mailto:ranjeetyadav550@gmail.com">
                  <Mail className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-600" />
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
              className="group relative p-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-600 group-hover:rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-600" />
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-300">
            <div className="mx-2 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-100/50 overflow-hidden">
              <div className="py-3 space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center space-x-3 mx-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:scale-[0.98] ${
                        isActive 
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25" 
                          : "text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-white" : "group-hover:scale-110 group-hover:text-purple-600"}`} />
                      <span className="relative">
                        {item.label}
                        {!isActive && (
                          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        )}
                      </span>
                    </Link>
                  )
                })}
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50 border-t border-purple-100/50">
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://github.com/Ranjeet550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600 transition-colors duration-300">GitHub</span>
                  </a>
                  <a
                    href="mailto:ranjeetyadav550@gmail.com"
                    className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-4 h-4 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600 transition-colors duration-300">Email</span>
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
