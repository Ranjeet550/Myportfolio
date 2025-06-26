"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail, Download, Code, Zap, Globe, Award } from "lucide-react"

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
    <div className="min-h-screen bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.1),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(37,99,235,0.1),_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(99,102,241,0.05),_transparent_50%)]"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Available for new opportunities
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-100">
                  <p className="text-lg text-gray-600 font-medium">Hello, I'm</p>
                </div>
                <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-200">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                    Ranjeet
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Yadav
                    </span>
                  </h1>
                </div>
                <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-300">
                  <p className="text-2xl sm:text-3xl text-gray-700 font-light">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-400">
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                    className="border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    <a href="https://github.com/Ranjeet550" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
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
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Get in touch</span>
                  </Link>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <Image
                        src="/profile.jpg"
                        alt="Ranjeet Yadav"
                        width={500}
                        height={800}
                        className="w-full h-full  transition-transform duration-500 hover:scale-105"
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Building Digital Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering results through dedication, innovation, and technical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, number: "16+", label: "Projects Completed", color: "text-blue-600" },
              { icon: Award, number: "2+", label: "Years Experience", color: "text-purple-600" },
              { icon: Globe, number: "5+", label: "Technologies", color: "text-green-600" },
              { icon: Zap, number: "100%", label: "Client Satisfaction", color: "text-orange-600" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's Create Something
              <span className="block">Amazing Together</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss how we can bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/contact" className="flex items-center">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
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
