"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter, Star, Calendar, Code, Zap } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("fade-in-up")
      }, index * 100)
    })
  }, [filter])

  const projects = [
    {
      name: "Kodeshare",
      description:
        "A modern, real-time code collaboration platform that allows developers to share, edit, and execute code together. Features custom URL code sharing, real-time collaboration, code execution, and a seamless environment for pair programming and teaching.",
      tech: ["React 19", "Node.js", "Express", "MongoDB", "Socket.io", "Monaco Editor", "Tailwind CSS", "Three.js", "GSAP", "JWT"],
      category: "web",
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "#",
      githubUrl: "#",
      year: "2024",
      status: "Live",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "FileSecurity",
      description:
        "A secure file storage application with password protection and user authentication. Built with modern web technologies for safe file management and sharing.",
      tech: ["React", "Vite", "Ant Design", "Node.js", "Express", "MongoDB", "JWT", "Local Storage"],
      category: "security",
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "#",
      githubUrl: "#",
      year: "2024",
      status: "Live",
      color: "from-green-500 to-teal-600"
    },
     {
      name: "E-commerce Website",
      description:
        "A fully functional e-commerce website built with React, Node.js, and MongoDB. Features user authentication, product listings, shopping cart, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "ecommerce",
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "#",
      githubUrl: "https://github.com/Ranjeet550/E-commerce-Website",
      year: "2023",
      status: "Live",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "WeatherWeb",
      description:
        "A comprehensive weather application built with HTML, CSS, JavaScript, and Weather API integration. Features real-time weather data, forecasts, and beautiful UI.",
      tech: ["JavaScript", "HTML", "CSS", "Weather API", "Responsive Design"],
      category: "web",
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "#",
      githubUrl: "https://github.com/Ranjeet550/WeatherWeb",
      year: "2023",
      status: "Live",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "pdfpageshuffle",
      description:
        "Python tool for manipulating and reorganizing PDF pages with drag-and-drop functionality and batch processing.",
      tech: ["Python", "PDF Processing", "GUI", "File Management"],
      category: "utility",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "#",
      githubUrl: "https://github.com/Ranjeet550/pdfpageshuffle",
      year: "2023",
      status: "Live",
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "Portfolio Website",
      description:
        "This very portfolio website built with Next.js, featuring modern animations, responsive design, and clean UI components.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      category: "web",
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "#",
      githubUrl: "#",
      year: "2024",
      status: "Live",
      color: "from-purple-500 to-pink-600"
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: Code, color: "from-gray-500 to-gray-600" },
    { id: "web", label: "Web Apps", icon: Zap, color: "from-blue-500 to-purple-600" },
    { id: "utility", label: "Utilities", icon: Filter, color: "from-green-500 to-teal-600" },
    { id: "ecommerce", label: "E-commerce", icon: Star, color: "from-orange-500 to-red-600" },
    { id: "security", label: "Security", icon: Github, color: "from-red-500 to-pink-600" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-load opacity-0 mb-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="animate-on-load opacity-0 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="animate-on-load opacity-0 flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  onClick={() => setFilter(category.id)}
                  className={`
                    relative px-6 py-3 rounded-xl transition-all duration-300 border-2 hover:scale-105
                    ${filter === category.id 
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg shadow-purple-500/25` 
                      : "border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-white hover:bg-gray-800/50"
                    }
                  `}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.label}
                  {filter === category.id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  )}
                </Button>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="animate-on-load opacity-0 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{projects.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{projects.filter(p => p.featured).length}</div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">{new Set(projects.flatMap(p => p.tech)).size}</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{projects.filter(p => p.status === "Live").length}</div>
              <div className="text-gray-400 text-sm">Live Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.name}
                className={`animate-on-load opacity-0 group relative overflow-hidden border-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 ${
                  project.featured ? "ring-2 ring-purple-500/50" : ""
                }`}
              >
                {/* Project Color Accent */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="relative overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Overlay for Featured Projects */}
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    
                    {/* Status Badge */}
                    <Badge className="absolute top-4 left-4 bg-green-500/20 text-green-400 border border-green-500/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      {project.status}
                    </Badge>
                    
                    {/* Year Badge */}
                    <Badge className="absolute bottom-4 left-4 bg-gray-700/50 text-gray-300 border border-gray-600/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-600/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 6 && (
                      <Badge variant="secondary" className="text-xs bg-gray-700/50 text-gray-400 border border-gray-600/50">
                        +{project.tech.length - 6} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 transition-opacity border-0 text-white font-medium`}
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors" 
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-purple-500/30 transition-colors duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Ready to Build Something Amazing?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and turn your ideas into reality with cutting-edge technology and innovative solutions.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="/contact" className="flex items-center">
                <span className="mr-2">💬</span>
                Let's Talk
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#" className="flex items-center">
                <span className="mr-2">📄</span>
                View Resume
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="mt-16 flex justify-center space-x-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
