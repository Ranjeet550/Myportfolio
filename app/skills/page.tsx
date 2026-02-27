"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FaReact, FaHtml5, FaJs, FaNodeJs, FaGithub,
  FaDatabase, FaCode, FaTools, FaBrain, FaUsers, FaComments,
  FaLightbulb, FaPuzzlePiece, FaServer, FaLaptopCode, FaPalette
} from "react-icons/fa"
import { 
  SiTailwindcss, SiAntdesign, SiRedux,
  SiPostman, SiMysql, SiMongodb
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { DiMsqlServer } from "react-icons/di"

export default function Skills() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("fade-in-up")
      }, index * 100)
    })

    // Animate progress bars
    const progressBars = document.querySelectorAll(".progress-bar")
    progressBars.forEach((bar, index) => {
      const progressValue = bar.getAttribute("data-value")
      if (progressValue) {
        setTimeout(
          () => {
            (bar as HTMLElement).style.width = `${progressValue}%`
          },
          500 + index * 100,
        )
      }
    })
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaPalette className="text-3xl text-cyan-400" />,
      gradient: "from-cyan-500 to-teal-600",
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, color: "bg-yellow-500", level: 90 },
        { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" />, color: "bg-orange-500", level: 95 },
        { name: "React", icon: <FaReact className="text-cyan-400" />, color: "bg-cyan-500", level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, color: "bg-teal-500", level: 88 },
        { name: "Ant Design", icon: <SiAntdesign className="text-blue-600" />, color: "bg-blue-600", level: 80 },
        { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" />, color: "bg-purple-500", level: 75 },
        { name: "Responsive Design", icon: <FaLaptopCode className="text-emerald-500" />, color: "bg-emerald-500", level: 92 },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-3xl text-teal-400" />,
      gradient: "from-teal-500 to-emerald-600",
      skills: [
        { name: "C#", icon: <FaCode className="text-purple-600" />, color: "bg-purple-600", level: 85 },
        { name: "Entity Framework Core", icon: <FaDatabase className="text-green-600" />, color: "bg-green-600", level: 80 },
        { name: ".NET Core", icon: <FaCode className="text-purple-700" />, color: "bg-purple-700", level: 82 },
        { name: "SQL Server", icon: <DiMsqlServer className="text-red-600" />, color: "bg-red-600", level: 85 },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, color: "bg-green-500", level: 78 },
        { name: "API Development", icon: <FaCode className="text-indigo-500" />, color: "bg-indigo-500", level: 88 },
        { name: "Database Design", icon: <FaDatabase className="text-blue-600" />, color: "bg-blue-600", level: 83 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools className="text-3xl text-emerald-400" />,
      gradient: "from-emerald-500 to-cyan-600",
      skills: [
        { name: "Git/GitHub", icon: <FaGithub className="text-gray-800" />, color: "bg-gray-800", level: 90 },
        { name: "VS Code", icon: <VscCode className="text-blue-500" />, color: "bg-blue-500", level: 95 },
        { name: "Visual Studio", icon: <FaCode className="text-purple-600" />, color: "bg-purple-600", level: 88 },
        { name: "Postman", icon: <SiPostman className="text-orange-500" />, color: "bg-orange-500", level: 85 },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" />, color: "bg-blue-600", level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, color: "bg-green-600", level: 75 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaBrain className="text-3xl text-cyan-400" />,
      gradient: "from-cyan-500 to-teal-600",
      skills: [
        { name: "Problem Solving", icon: <FaPuzzlePiece className="text-purple-500" />, color: "bg-purple-500", level: 92 },
        { name: "Team Collaboration", icon: <FaUsers className="text-pink-500" />, color: "bg-pink-500", level: 88 },
        { name: "Communication", icon: <FaComments className="text-indigo-500" />, color: "bg-indigo-500", level: 85 },
        { name: "Learning Agility", icon: <FaLightbulb className="text-yellow-500" />, color: "bg-yellow-500", level: 95 },
      ],
    },
  ]

  const achievements = [
    { title: "16+ Projects", description: "Completed various web and utility projects" },
    { title: "2+ Years", description: "Experience in full-stack development" },
    { title: "5+ Technologies", description: "Proficient in multiple programming languages" },
    { title: "100% Dedication", description: "Committed to delivering quality solutions" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-teal-600/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-teal-400/20 to-emerald-600/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-96 left-32 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-cyan-600/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-teal-600/20 rounded-full animate-wiggle"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-teal-400/20 to-emerald-600/20 rounded-full animate-heartbeat"></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-on-load opacity-0 mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-6 animate-spin-slow">
              <FaTools className="text-3xl text-white" />
            </div>
          </div>
          <div className="animate-on-load opacity-0 text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6 text-shadow">
            Skills & Expertise
          </div>
          <div className="animate-on-load opacity-0 text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and creative solutions. 
            Here's my arsenal of tools and skills that bring ideas to life.
          </div>
          
          {/* Stats Cards */}
          <div className="animate-on-load opacity-0 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: "Languages", count: "5+", icon: <FaCode className="text-cyan-400" /> },
              { label: "Frameworks", count: "8+", icon: <FaReact className="text-teal-400" /> },
              { label: "Tools", count: "10+", icon: <FaTools className="text-emerald-400" /> },
              { label: "Projects", count: "16+", icon: <FaLaptopCode className="text-cyan-400" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 hover:bg-slate-800/80 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105 group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{stat.count}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="animate-on-load opacity-0 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-6">
              <FaBrain className="text-2xl text-white" />
            </div>
            <h2 className="animate-on-load opacity-0 text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
            <p className="animate-on-load opacity-0 text-lg text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across different domains
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="animate-on-load opacity-0 group hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-500 border-cyan-500/30 bg-slate-800/50 backdrop-blur-md relative overflow-hidden hover-lift"
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] rounded-lg bg-slate-800/50 backdrop-blur-md"></div>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center text-2xl text-slate-200">
                    <div className="mr-4 p-3 rounded-xl bg-slate-700/50 shadow-md group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-cyan-500/30">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-xl group-hover/skill:scale-125 transition-transform duration-300 filter group-hover/skill:drop-shadow-lg group-hover/skill:drop-shadow-cyan-500/50">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-slate-300 group-hover/skill:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                      {/* Enhanced Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-full h-3 overflow-hidden shadow-inner">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 progress-bar relative overflow-hidden shadow-lg shadow-cyan-500/50`}
                            data-value={skill.level}
                            style={{ width: '0%' }}
                          >
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                          </div>
                        </div>
                        {/* Skill level indicator */}
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-white rounded-full shadow-md shadow-cyan-500/50 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" style={{ right: `${100 - skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="text-center mb-12">
            <h3 className="animate-on-load opacity-0 text-3xl font-bold text-white mb-4">Key Achievements</h3>
            <p className="animate-on-load opacity-0 text-slate-300 max-w-2xl mx-auto">
              Milestones that reflect my dedication to continuous learning and professional growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="animate-on-load opacity-0 text-center hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-500 border-cyan-500/30 bg-slate-800/50 backdrop-blur-md group relative overflow-hidden hover-lift"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-tr-full"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-t-lg"></div>
                  
                  {/* Achievement Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-4 group-hover:scale-125 transition-transform duration-300">
                    <FaLightbulb className="text-white text-lg" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.title}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {achievement.description}
                  </p>
                  
                  {/* Animated underline */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto transition-all duration-500 w-0 group-hover:w-16"></div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-cyan-500/5 group-hover:via-teal-500/5 group-hover:to-emerald-500/5 rounded-lg transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Enhanced Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full animate-wiggle"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-on-load opacity-0 mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-6 animate-heartbeat shadow-lg shadow-cyan-500/50">
              <FaLightbulb className="text-3xl text-white" />
            </div>
          </div>
          <h2 className="animate-on-load opacity-0 text-5xl font-bold text-white mb-8">My Learning Journey</h2>
          <p className="animate-on-load opacity-0 text-xl text-slate-300 mb-16 leading-relaxed max-w-4xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. My journey started with
            curiosity about how websites work, and it has evolved into a passion for creating innovative solutions using
            modern web technologies.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Foundation",
                description: "Started with HTML, CSS, and JavaScript fundamentals",
                year: "2022",
                icon: <FaCode className="text-2xl" />,
                gradient: "from-cyan-500 to-teal-600"
              },
              {
                phase: "Expansion",
                description: "Learned C#, React, and backend development",
                year: "2023",
                icon: <FaReact className="text-2xl" />,
                gradient: "from-teal-500 to-emerald-600"
              },
              {
                phase: "Specialization",
                description: "Focusing on full-stack development and modern frameworks",
                year: "2024",
                icon: <FaServer className="text-2xl" />,
                gradient: "from-emerald-500 to-cyan-600"
              },
            ].map((phase, index) => (
              <div key={index} className="animate-on-load opacity-0 relative group">
                <div className={`bg-gradient-to-r ${phase.gradient} text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-110 relative overflow-hidden hover-lift`}>
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10 animate-float"></div>
                  <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-bold bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg group-hover:bg-white/40 transition-all duration-300">
                        {phase.year}
                      </div>
                      <div className="p-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-125 group-hover:bg-white/40 transition-all duration-300">
                        {phase.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                      {phase.phase}
                    </h3>
                    <p className="text-base opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                      {phase.description}
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-6 flex space-x-2">
                      {[...Array(3)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dotIndex <= index ? 'bg-white/80' : 'bg-white/30'
                          } group-hover:bg-white`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced connecting line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 z-20">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-bounce"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
