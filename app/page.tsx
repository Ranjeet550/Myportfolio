"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GithubIcon, Mail, Download, Code, Zap, Globe, Award } from "lucide-react"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Enhanced fade-in animation with stagger
    const elements = document.querySelectorAll(".animate-on-load")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0")
      }, index * 150)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                  <Zap className="w-4 h-4 mr-2" />
                  Available for new opportunities
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-100">
                  <p className="text-lg text-slate-400 font-medium">Hello, I'm</p>
                </div>
                <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-200">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    Ranjeet
                    <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                      Yadav
                    </span>
                  </h1>
                </div>
                <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-300">
                  <p className="text-2xl sm:text-3xl text-slate-300 font-light">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-400">
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                  Passionate about crafting exceptional digital experiences through clean code and innovative solutions. 
                  Specializing in modern web technologies with a focus on performance, scalability, and user experience.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-500">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group"
                  >
                    <Link href="/projects" className="flex items-center">
                      View My Work
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild 
                    className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
                  >
                    <a href="https://github.com/Ranjeet550" target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-600">
                <div className="flex items-center gap-6 pt-4">
                  <Link 
                    href="/contact" 
                    className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Get in touch</span>
                  </Link>
                  <div className="w-px h-6 bg-slate-700"></div>
                  <button className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 group">
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Resume</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-300">
                <div className="relative">
                  <div className="w-80 h-80 sm:w-96 sm:h-96 relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
                      <Image
                        src="/profile.jpg"
                        alt="Ranjeet Yadav"
                        width={500}
                        height={800}
                        className="w-full h-full transition-transform duration-500 hover:scale-105"
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full opacity-60 animate-bounce shadow-lg shadow-cyan-500/50" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full opacity-60 animate-bounce shadow-lg shadow-teal-500/50" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-50 animate-bounce shadow-lg shadow-emerald-500/50" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Building Digital Excellence
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Delivering results through dedication, innovation, and technical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, number: "16+", label: "Projects Completed", color: "text-cyan-400" },
              { icon: Award, number: "2+", label: "Years Experience", color: "text-teal-400" },
              { icon: Globe, number: "5+", label: "Technologies", color: "text-emerald-400" },
              { icon: Zap, number: "100%", label: "Client Satisfaction", color: "text-cyan-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-sm">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-700/50 to-slate-800/50 mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300 border border-slate-600/50`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20 rounded-3xl p-12 shadow-2xl shadow-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's Create Something
              <span className="block bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Amazing Together</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss how we can bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group border-0"
              >
                <Link href="/contact" className="flex items-center">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-400 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
              >
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
