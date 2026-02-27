"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, MapPin, Code, Coffee, Lightbulb, Target, 
  Heart, Users, Zap, Award, BookOpen, Rocket,
  Download, GithubIcon, Linkedin, Mail, Phone, Star,
  ArrowRight, CheckCircle, TrendingUp
} from "lucide-react"

export default function About() {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, entry.target.id]))
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "MERN Stack Development",
      description: "Building modern full-stack applications using MongoDB, Express.js, React, and Node.js ecosystem",
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-600",
      skills: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      title: "Database & API Design",
      description: "Designing efficient NoSQL databases with MongoDB and creating RESTful APIs with Express.js",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-teal-500 to-emerald-600",
      skills: ["MongoDB", "Mongoose", "REST APIs", "Express Middleware"]
    },
    {
      title: "Frontend Excellence",
      description: "Creating responsive, interactive user interfaces with React and modern JavaScript/TypeScript",
      icon: <Target className="w-6 h-6" />,
      color: "from-emerald-500 to-cyan-600",
      skills: ["React", "JavaScript", "TypeScript", "Responsive Design"]
    },
  ]

  const personalInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "India", color: "text-cyan-400" },
    { icon: <Calendar className="w-5 h-5" />, label: "Experience", value: "2+ Years", color: "text-teal-400" },
    { icon: <Coffee className="w-5 h-5" />, label: "Coffee Consumed", value: "∞ Cups", color: "text-emerald-400" },
    { icon: <Code className="w-5 h-5" />, label: "Projects Completed", value: "16+", color: "text-cyan-400" },
    { icon: <Heart className="w-5 h-5" />, label: "Passion Level", value: "100%", color: "text-teal-400" },
    { icon: <Users className="w-5 h-5" />, label: "Team Projects", value: "8+", color: "text-emerald-400" },
  ]

  const values = [
    {
      title: "Quality First",
      description: "Delivering robust, well-tested code that stands the test of time and scale",
      icon: <Award className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Innovation",
      description: "Embracing creative solutions and cutting-edge technologies to solve complex problems",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-500"
    },
    {
      title: "Growth Mindset",
      description: "Committed to continuous learning and adapting to the ever-changing tech landscape",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Collaboration",
      description: "Building strong relationships and working effectively with diverse teams",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500"
    }
  ]

  const journey = [
    {
      year: "2022",
      title: "Started MERN Journey",
      description: "Began learning JavaScript and React, discovering my passion for modern web development"
    },
    {
      year: "2023",
      title: "MERN Stack Mastery",
      description: "Mastered MongoDB, Express.js, React, and Node.js, building complete full-stack applications"
    },
    {
      year: "2024",
      title: "Advanced MERN Development",
      description: "Specialized in advanced MERN patterns, performance optimization, and scalable application architecture"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Enhanced Background Pattern with Glassmorphism */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(6,182,212,0.1),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(20,184,166,0.1),_transparent_50%),radial-gradient(circle_at_40%_20%,_rgba(16,185,129,0.05),_transparent_50%)]"></div>
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <div 
              id="badge"
              data-animate
              className={`transition-all duration-1000 transform ${
                visibleElements.has('badge') 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-8 shadow-lg backdrop-blur-md hover:scale-105 transition-all duration-300 hover:border-cyan-400/50">
                <Star className="w-4 h-4 mr-2 animate-pulse" />
                Get to know me better
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            <div 
              id="title"
              data-animate
              className={`transition-all duration-1000 transform delay-200 ${
                visibleElements.has('title') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 relative">
                <span className="inline-block hover:scale-105 transition-transform duration-300">About</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300">
                  Me
                </span>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-green-300 rounded-full animate-bounce"></div>
              </h1>
            </div>
            
            <div 
              id="subtitle"
              data-animate
              className={`transition-all duration-1000 transform delay-400 ${
                visibleElements.has('subtitle') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                MERN Stack developer crafting <span className="font-semibold text-cyan-300 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-md">full-stack applications</span> with scalable architecture, 
                <span className="font-semibold text-teal-300 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-md ml-2"> modern technologies</span>, and a commitment to 
                <span className="font-semibold text-emerald-300 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-md ml-2"> performance</span>
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-cyan-300 group-hover:scale-110 transition-transform duration-300 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md inline-block">2+</div>
                  <div className="text-sm text-slate-300 font-medium mt-2">Years Experience</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-teal-300 group-hover:scale-110 transition-transform duration-300 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md inline-block">16+</div>
                  <div className="text-sm text-slate-300 font-medium mt-2">Projects Done</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-emerald-300 group-hover:scale-110 transition-transform duration-300 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md inline-block">100%</div>
                  <div className="text-sm text-slate-300 font-medium mt-2">Client Satisfaction</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-cyan-300 group-hover:scale-110 transition-transform duration-300 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md inline-block">∞</div>
                  <div className="text-sm text-slate-300 font-medium mt-2">Cups of Coffee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Image Section */}
            <div 
              id="image-section"
              data-animate
              className={`transition-all duration-1000 transform ${
                visibleElements.has('image-section') 
                  ? 'opacity-100 translate-x-0 rotate-0' 
                  : 'opacity-0 -translate-x-12 rotate-3'
              }`}
            >
              <div className="relative group">
                <div className="relative w-full max-w-lg mx-auto">
            {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 rounded-3xl blur-3xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-emerald-400 via-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-10 animate-pulse delay-1000"></div>
                  
                  {/* Main Image */}
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border-4 border-cyan-500/30 group-hover:scale-105 transition-all duration-700 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                    <Image
                      src="/profile.jpg"
                      alt="Ranjeet Yadav"
                      width={100}
                      height={100}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
               
                  

                  
                </div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="space-y-10">
              <div 
                id="intro-text"
                data-animate
                className={`transition-all duration-1000 transform ${
                  visibleElements.has('intro-text') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-12'
                }`}
              >
                <h2 className="text-5xl font-bold text-white mb-8 relative">
                  Hello! I'm 
                  <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent"> Ranjeet Yadav</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p className="hover:text-white transition-colors duration-300 cursor-default">
                    I'm a passionate <span className="font-bold text-white bg-cyan-500/30 px-3 py-1 rounded-lg backdrop-blur-md border border-cyan-400/50">MERN Stack Developer</span> specializing in building modern, full-stack web applications. My expertise lies in creating seamless user experiences with React on the frontend and robust server-side solutions using Node.js and Express.js.
                  </p>
                  <p className="hover:text-white transition-colors duration-300 cursor-default">
                    I work extensively with <span className="font-semibold text-emerald-300 bg-white/10 px-2 py-1 rounded-md backdrop-blur-md hover:scale-105 inline-block transition-transform duration-200">MongoDB</span> for database solutions, <span className="font-semibold text-teal-300 bg-white/10 px-2 py-1 rounded-md backdrop-blur-md hover:scale-105 inline-block transition-transform duration-200">Express.js</span> for backend APIs, <span className="font-semibold text-cyan-300 bg-white/10 px-2 py-1 rounded-md backdrop-blur-md hover:scale-105 inline-block transition-transform duration-200">React</span> for dynamic frontends, and <span className="font-semibold text-emerald-300 bg-white/10 px-2 py-1 rounded-md backdrop-blur-md hover:scale-105 inline-block transition-transform duration-200">Node.js</span> for server-side development. I enjoy building complete web applications from database design to user interface implementation.
                  </p>
                  <p className="hover:text-white transition-colors duration-300 cursor-default">
                    When I'm not coding, you'll find me exploring the latest MERN stack updates, optimizing database queries, or experimenting with new React patterns and Node.js features. I'm constantly learning and adapting to deliver high-performance, scalable applications that solve real-world problems.
                  </p>
                </div>
              </div>

              {/* Enhanced Personal Info Grid */}
              <div 
                id="personal-info"
                data-animate
                className={`transition-all duration-1000 transform ${
                  visibleElements.has('personal-info') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="group">
                      <div className={`flex items-center space-x-4 p-6 bg-white/10 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer backdrop-blur-md ${
                        index % 2 === 0 ? 'hover:bg-cyan-500/20 hover:border-cyan-400/50' : 'hover:bg-teal-500/20 hover:border-teal-400/50'
                      }`}>
                        <div className={`${info.color} bg-white/20 p-3 rounded-xl shadow-md shadow-cyan-500/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 backdrop-blur-md`}>
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-slate-300 font-medium mb-1">{info.label}</div>
                          <div className="font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">{info.value}</div>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-5 h-5 text-cyan-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Contact Actions */}
              <div 
                id="contact-actions"
                data-animate
                className={`transition-all duration-1000 transform ${
                  visibleElements.has('contact-actions') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 group transform hover:scale-105 px-8 py-4 rounded-2xl backdrop-blur-md border border-cyan-400/30"
                  >
                    <Download className="w-5 h-5 mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    Download Resume
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-slate-600 hover:border-cyan-400 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 group transform hover:scale-105 px-8 py-4 rounded-2xl backdrop-blur-md"
                  >
                    <Mail className="w-5 h-5 mr-3 group-hover:scale-125 transition-transform duration-300" />
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Timeline */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-teal-400/10 rounded-full animate-float delay-1000 blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div 
            id="journey-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 transform ${
              visibleElements.has('journey-header') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-cyan-300 text-sm font-medium mb-6 border border-white/20 backdrop-blur-md">
              <TrendingUp className="w-4 h-4 mr-2" />
              My Professional Journey
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">The path that led me to where I am today, filled with learning, growth, and endless curiosity</p>
          </div>
          
          {/* Timeline container with connecting line */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-teal-500 to-emerald-400 rounded-full shadow-lg shadow-cyan-500/50"></div>
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div 
                  key={index} 
                  id={`journey-${index}`}
                  data-animate
                  className={`transition-all duration-1000 transform ${
                    visibleElements.has(`journey-${index}`) 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`
                  }`}
                >
                  <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} space-x-8`}>
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${
                        index === 0 ? 'from-cyan-500 to-teal-500' :
                        index === 1 ? 'from-teal-500 to-emerald-500' :
                        'from-emerald-500 to-cyan-500'
                      } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-cyan-500/50 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 cursor-pointer group backdrop-blur-md border border-white/30`}>
                        <span className="group-hover:scale-125 transition-transform duration-300">
                          {item.year.slice(-2)}
                        </span>
                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-75"></div>
                      </div>
                      
                      {/* Achievement badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`flex-1 max-w-md ${index % 2 === 1 ? 'text-right' : ''}`}>
                      <div className={`group bg-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border-2 border-white/20 hover:border-cyan-400/50 hover:scale-105 transform cursor-pointer backdrop-blur-md ${
                        index === 0 ? 'hover:bg-cyan-500/20' :
                        index === 1 ? 'hover:bg-teal-500/20' :
                        'hover:bg-emerald-500/20'
                      }`}>
                        {/* Year badge */}
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                          index === 0 ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50' :
                          index === 1 ? 'bg-teal-500/30 text-teal-200 border border-teal-400/50' :
                          'bg-emerald-500/30 text-emerald-200 border border-emerald-400/50'
                        } group-hover:scale-110 transition-transform duration-300 backdrop-blur-md`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.year}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-blue-100 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                          {item.description}
                        </p>
                        
                        {/* Decorative arrow */}
                        <div className={`mt-6 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                          <div className={`inline-flex items-center text-sm font-medium ${
                            index === 0 ? 'text-cyan-300' :
                            index === 1 ? 'text-teal-300' :
                            'text-emerald-300'
                          } group-hover:scale-110 transition-transform duration-300`}>
                            {index % 2 === 0 ? (
                              <>Learn More <ArrowRight className="w-4 h-4 ml-1" /></>
                            ) : (
                              <><ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Learn More</>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Cards */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div 
            id="experience-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 transform ${
              visibleElements.has('experience-header') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-6 border border-white/20 backdrop-blur-md">
              <Rocket className="w-4 h-4 mr-2" />
              Core Expertise
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              What I Do <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Best</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My core competencies and areas of expertise that drive successful project outcomes and innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                id={`experience-${index}`}
                data-animate
                className={`transition-all duration-1000 transform ${
                  visibleElements.has(`experience-${index}`) 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-12 rotate-3'
                }`}
              >
                <Card className="group hover:shadow-2xl border-0 bg-white/10 overflow-hidden h-full transform hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-md border border-white/20 hover:border-white/50">
                  <CardContent className="p-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative backdrop-blur-md border border-white/30`}>
                        {exp.icon}
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto space-y-4">
                      <h4 className="font-bold text-white text-sm uppercase tracking-wider flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white text-sm rounded-full font-medium shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-md border border-white/30`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action button */}
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-white/20 to-white/10 text-white rounded-xl font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-white/30 backdrop-blur-md hover:bg-white/30">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full animate-pulse blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full animate-pulse delay-1000 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div 
            id="values-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 transform ${
              visibleElements.has('values-header') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-6 border border-white/20 backdrop-blur-md">
              <Heart className="w-4 h-4 mr-2" />
              What Drives Me
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              My Core <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The fundamental principles that guide my work, relationships, and drive my unwavering commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                id={`value-${index}`}
                data-animate
                className={`transition-all duration-1000 transform ${
                  visibleElements.has(`value-${index}`) 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-12 rotate-6'
                }`}
              >
                <div className="group bg-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center hover:-translate-y-4 hover:scale-105 cursor-pointer border-2 border-white/20 hover:border-white/50 backdrop-blur-md">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl backdrop-blur-md border border-white/30`}>
                      {value.icon}
                    </div>
                    {/* Floating particle effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${value.color} opacity-30 animate-ping`}></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-teal-300 transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-teal-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-500/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500/20 rounded-full animate-bounce delay-1000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <div 
            id="cta-section"
            data-animate
            className={`transition-all duration-1000 transform ${
              visibleElements.has('cta-section') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 sm:p-16 shadow-2xl border border-white/30">
              {/* Header */}
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-cyan-300 text-sm font-medium mb-6 border border-white/30 backdrop-blur-md">
                  <Rocket className="w-4 h-4 mr-2" />
                  Ready to Collaborate?
                </div>
                
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Let's Work
                  <span className="block bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent animate-gradient-x bg-300%">
                    Together
                  </span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Ready to bring your ideas to life? I'm always excited to take on new challenges and create something 
                  <span className="font-semibold text-white bg-white/10 px-3 py-1 rounded-lg backdrop-blur-md"> amazing </span>
                  together.
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group transform hover:scale-110 text-lg backdrop-blur-md border border-white/30"
                >
                  <Mail className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  Start a Conversation
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white/20 hover:text-white font-bold px-10 py-6 rounded-2xl transition-all duration-500 group transform hover:scale-110 backdrop-blur-md text-lg"
                >
                  <GithubIcon className="mr-3 w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  View My Work
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
              
              {/* Contact info */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-slate-300 mb-4">Or reach out directly:</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="mailto:contact@ranjeet.dev" className="flex items-center text-white hover:text-cyan-300 transition-colors duration-300 group bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20 hover:border-cyan-400/50">
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    contact@ranjeet.dev
                  </a>
                  <a href="tel:+1234567890" className="flex items-center text-white hover:text-teal-300 transition-colors duration-300 group bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20 hover:border-teal-400/50">
                    <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
