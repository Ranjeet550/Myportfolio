"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, MapPin, Code, Coffee, Lightbulb, Target, 
  Heart, Users, Zap, Award, BookOpen, Rocket,
  Download, Github, Linkedin, Mail, Phone, Star,
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
      color: "from-blue-500 to-purple-600",
      skills: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      title: "Database & API Design",
      description: "Designing efficient NoSQL databases with MongoDB and creating RESTful APIs with Express.js",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600",
      skills: ["MongoDB", "Mongoose", "REST APIs", "Express Middleware"]
    },
    {
      title: "Frontend Excellence",
      description: "Creating responsive, interactive user interfaces with React and modern JavaScript/TypeScript",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      skills: ["React", "JavaScript", "TypeScript", "Responsive Design"]
    },
  ]

  const personalInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "India", color: "text-red-600" },
    { icon: <Calendar className="w-5 h-5" />, label: "Experience", value: "2+ Years", color: "text-blue-600" },
    { icon: <Coffee className="w-5 h-5" />, label: "Coffee Consumed", value: "∞ Cups", color: "text-amber-600" },
    { icon: <Code className="w-5 h-5" />, label: "Projects Completed", value: "16+", color: "text-green-600" },
    { icon: <Heart className="w-5 h-5" />, label: "Passion Level", value: "100%", color: "text-pink-600" },
    { icon: <Users className="w-5 h-5" />, label: "Team Projects", value: "8+", color: "text-purple-600" },
  ]

  const values = [
    {
      title: "Quality First",
      description: "Delivering robust, well-tested code that stands the test of time and scale",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Innovation",
      description: "Embracing creative solutions and cutting-edge technologies to solve complex problems",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Growth Mindset",
      description: "Committed to continuous learning and adapting to the ever-changing tech landscape",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Collaboration",
      description: "Building strong relationships and working effectively with diverse teams",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-pink-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(59,130,246,0.15),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(168,85,247,0.15),_transparent_50%),radial-gradient(circle_at_40%_20%,_rgba(34,197,94,0.1),_transparent_50%)]"></div>
      
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
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 text-sm font-medium mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
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
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 relative">
                <span className="inline-block hover:scale-105 transition-transform duration-300">About</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300">
                  Me
                </span>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
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
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                MERN Stack developer crafting <span className="font-semibold text-blue-600">full-stack applications</span> with scalable architecture, 
                <span className="font-semibold text-purple-600"> modern technologies</span>, and a commitment to 
                <span className="font-semibold text-green-600"> performance</span>
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">2+</div>
                  <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">16+</div>
                  <div className="text-sm text-gray-500 font-medium">Projects Done</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-sm text-gray-500 font-medium">Cups of Coffee</div>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-green-400 via-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20 animate-pulse delay-1000"></div>
                  
                  {/* Main Image */}
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-700">
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
                <h2 className="text-5xl font-bold text-gray-900 mb-8 relative">
                  Hello! I'm 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Ranjeet Yadav</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
                    I'm a passionate <span className="font-bold text-gray-900 bg-yellow-100 px-2 py-1 rounded-md">MERN Stack Developer</span> specializing in building modern, full-stack web applications. My expertise lies in creating seamless user experiences with React on the frontend and robust server-side solutions using Node.js and Express.js.
                  </p>
                  <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
                    I work extensively with <span className="font-semibold text-green-600 hover:scale-105 inline-block transition-transform duration-200">MongoDB</span> for database solutions, <span className="font-semibold text-yellow-600 hover:scale-105 inline-block transition-transform duration-200">Express.js</span> for backend APIs, <span className="font-semibold text-blue-600 hover:scale-105 inline-block transition-transform duration-200">React</span> for dynamic frontends, and <span className="font-semibold text-green-600 hover:scale-105 inline-block transition-transform duration-200">Node.js</span> for server-side development. I enjoy building complete web applications from database design to user interface implementation.
                  </p>
                  <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
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
                      <div className={`flex items-center space-x-4 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                        index % 2 === 0 ? 'hover:from-blue-50 hover:to-purple-50' : 'hover:from-purple-50 hover:to-pink-50'
                      }`}>
                        <div className={`${info.color} bg-white p-3 rounded-xl shadow-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 font-medium mb-1">{info.label}</div>
                          <div className="font-bold text-gray-900 text-lg group-hover:scale-110 transition-transform duration-300">{info.value}</div>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-5 h-5 text-gray-400" />
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
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 px-8 py-4 rounded-2xl"
                  >
                    <Download className="w-5 h-5 mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    Download Resume
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 text-gray-700 hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-500 group transform hover:scale-105 px-8 py-4 rounded-2xl"
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200/30 rounded-full animate-float delay-1000"></div>
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              My Professional Journey
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The path that led me to where I am today, filled with learning, growth, and endless curiosity</p>
          </div>
          
          {/* Timeline container with connecting line */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-green-500 rounded-full shadow-lg"></div>
            
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
                        index === 0 ? 'from-blue-500 to-cyan-500' :
                        index === 1 ? 'from-purple-500 to-pink-500' :
                        'from-green-500 to-teal-500'
                      } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 cursor-pointer group`}>
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
                      <div className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:scale-105 transform cursor-pointer ${
                        index === 0 ? 'hover:border-blue-200 hover:bg-blue-50/50' :
                        index === 1 ? 'hover:border-purple-200 hover:bg-purple-50/50' :
                        'hover:border-green-200 hover:bg-green-50/50'
                      }`}>
                        {/* Year badge */}
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                          index === 0 ? 'bg-blue-100 text-blue-700' :
                          index === 1 ? 'bg-purple-100 text-purple-700' :
                          'bg-green-100 text-green-700'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.year}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:scale-105 transition-transform duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                          {item.description}
                        </p>
                        
                        {/* Decorative arrow */}
                        <div className={`mt-6 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                          <div className={`inline-flex items-center text-sm font-medium ${
                            index === 0 ? 'text-blue-600' :
                            index === 1 ? 'text-purple-600' :
                            'text-green-600'
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"></div>
        
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Core Expertise
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              What I Do <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Best</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="group hover:shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden h-full transform hover:scale-105 transition-all duration-500 cursor-pointer">
                  <CardContent className="p-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative`}>
                        {exp.icon}
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto space-y-4">
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white text-sm rounded-full font-medium shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action button */}
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center">
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full animate-pulse blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full animate-pulse delay-1000 blur-3xl"></div>
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              What Drives Me
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              My Core <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center hover:-translate-y-4 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-gradient-to-r">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      {value.icon}
                    </div>
                    {/* Floating particle effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${value.color} opacity-30 animate-ping`}></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-ping"></div>
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
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 sm:p-16 shadow-2xl border border-white/20">
              {/* Header */}
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 text-sm font-medium mb-6 border border-yellow-400/30">
                  <Rocket className="w-4 h-4 mr-2" />
                  Ready to Collaborate?
                </div>
                
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Let's Work
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                    Together
                  </span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Ready to bring your ideas to life? I'm always excited to take on new challenges and create something 
                  <span className="font-semibold text-white"> amazing </span>
                  together.
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group transform hover:scale-110 text-lg"
                >
                  <Mail className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  Start a Conversation
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-6 rounded-2xl transition-all duration-500 group transform hover:scale-110 backdrop-blur-sm text-lg"
                >
                  <Github className="mr-3 w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  View My Work
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
              
              {/* Contact info */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-200 mb-4">Or reach out directly:</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="mailto:contact@ranjeet.dev" className="flex items-center text-white hover:text-blue-300 transition-colors duration-300 group">
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    contact@ranjeet.dev
                  </a>
                  <a href="tel:+1234567890" className="flex items-center text-white hover:text-green-300 transition-colors duration-300 group">
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
