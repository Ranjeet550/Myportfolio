"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, Phone, MapPin, Github, Send, Clock, Zap, 
  MessageCircle, CheckCircle, Star, ArrowRight,
  Calendar, Globe, Linkedin, Twitter, Sparkles,
  Heart, Rocket, Coffee, Target, Users
} from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0")
      }, index * 150)
    })
  }, [])

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "Drop me a line",
      value: "ry151916@gmail.com",
      link: "mailto:ry151916@gmail.com",
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50",
      textColor: "text-cyan-600",
      iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      subtitle: "Check my code",
      value: "github.com/Ranjeet550",
      link: "https://github.com/Ranjeet550",
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
      textColor: "text-teal-600",
      iconBg: "bg-gradient-to-br from-teal-500 to-emerald-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      subtitle: "Based in",
      value: "India",
      link: "#",
      color: "from-emerald-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-cyan-50",
      textColor: "text-emerald-600",
      iconBg: "bg-gradient-to-br from-emerald-500 to-cyan-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Availability",
      subtitle: "Ready to collaborate",
      value: "Open for projects",
      link: "#",
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50",
      textColor: "text-cyan-600",
      iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600"
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", link: "https://github.com/Ranjeet550", color: "hover:bg-gray-100" },
    { icon: <Mail className="w-5 h-5" />, name: "Email", link: "mailto:ry151916@gmail.com", color: "hover:bg-blue-100" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", link: "#", color: "hover:bg-blue-100" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", link: "#", color: "hover:bg-sky-100" },
  ]

  const services = [
    { 
      icon: <Rocket className="w-5 h-5" />, 
      title: "Web Development", 
      desc: "Full-stack applications with modern tech",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50"
    },
    { 
      icon: <Target className="w-5 h-5" />, 
      title: "API Development", 
      desc: "Scalable & secure backend solutions",
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50"
    },
    { 
      icon: <Sparkles className="w-5 h-5" />, 
      title: "Code Review", 
      desc: "Performance optimization & best practices",
      color: "from-emerald-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-cyan-50"
    },
    { 
      icon: <Zap className="w-5 h-5" />, 
      title: "Consulting", 
      desc: "Technical guidance & architecture design",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50"
    },
  ]

  const faqs = [
    {
      question: "How quickly do you respond?",
      answer: "I typically respond within 4-6 hours during business hours, and within 24 hours on weekends."
    },
    {
      question: "What's your preferred communication method?",
      answer: "Email for initial contact, then we can move to video calls or messaging based on your preference."
    },
    {
      question: "Do you offer project consultations?",
      answer: "Yes! I offer free 15-minute consultations to discuss your project requirements and how I can help."
    },
    {
      question: "What's your development process?",
      answer: "I follow agile methodology with regular updates, code reviews, and testing to ensure quality delivery."
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(6,182,212,0.05),_transparent_50%),radial-gradient(circle_at_75%_75%,_rgba(20,184,166,0.05),_transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDYsMTgyLDIxMiwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Main Title */}
          <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-100">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Let's Create</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                Something Amazing
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-200">
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
              Ready to bring your vision to life? I'm passionate about crafting exceptional digital experiences. 
              Let's collaborate and build something extraordinary together.
            </p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-300">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 group px-8 py-4 rounded-2xl font-semibold"
                asChild
              >
                <a href="mailto:ry151916@gmail.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  Send Email
                  <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-cyan-400/30 hover:bg-cyan-500/10 hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm"
                asChild
              >
                <a href="#contact-form">
                  <Send className="w-5 h-5 mr-2" />
                  Use Contact Form
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 bg-slate-800/50 backdrop-blur-lg group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-18 h-18 mx-auto mb-6 rounded-3xl ${info.iconBg} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/20`}>
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{info.title}</h3>
                    <p className="text-sm text-slate-400 mb-3 font-medium">{info.subtitle}</p>
                    <p className="text-slate-300 font-semibold mb-6">{info.value}</p>
                    {info.link !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="border-2 border-cyan-400/30 hover:bg-cyan-500/10 hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 transition-all duration-300 rounded-xl font-medium"
                      >
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Connect
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" id="contact-form">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 relative z-10">
              <Card className="border-0 shadow-2xl bg-slate-800/80 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500"></div>
                <CardHeader className="pb-8 pt-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                      Send me a message
                    </CardTitle>
                  </div>
                  <p className="text-slate-300 mt-2 text-lg">Let's discuss your project and bring your ideas to life together.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3">
                          Full Name
                        </label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          placeholder="Your full name" 
                          className="h-14 border-2 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 rounded-2xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 transition-all duration-300 font-medium text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="h-14 border-2 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 rounded-2xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 transition-all duration-300 font-medium text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-3">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        required 
                        placeholder="What's your project about?" 
                        className="h-14 border-2 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 rounded-2xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 transition-all duration-300 font-medium text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Share your vision, project details, timeline, or any questions you have..."
                        rows={6}
                        className="border-2 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 rounded-2xl resize-none bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 transition-all duration-300 font-medium text-white placeholder:text-slate-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-16 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-700 hover:via-teal-700 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          <span className="text-lg">Sending Message...</span>
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle className="w-6 h-6 mr-3 animate-bounce" />
                          <span className="text-lg">Message Sent Successfully!</span>
                        </>
                      ) : (
                        <>
                          <Rocket className="w-6 h-6 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          <span className="text-lg">Launch My Message</span>
                          <Sparkles className="w-5 h-5 ml-3 group-hover:animate-pulse" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8 relative z-10">
              {/* Introduction */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-200">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent mb-6 relative">
                    Let's Build Something Amazing!
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6 font-medium">
                  I'm passionate about transforming ideas into exceptional digital experiences. Whether you're envisioning a cutting-edge web application, need technical expertise, or want to explore innovative solutions, I'm here to bring your vision to life.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I believe in collaborative partnerships, delivering excellence, and creating lasting impact. Let's embark on this exciting journey together!
                </p>
              </div>

              {/* Quick Response Card */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-300">
                <div className="bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl shadow-cyan-500/30 relative overflow-hidden group hover:scale-105 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold">Let's Connect</h4>
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed text-lg relative z-10">
                    Ready to discuss your project over a virtual coffee? I respond to all messages within hours, not days. Let's make something incredible together!
                  </p>
                  <div className="flex flex-wrap gap-4 relative z-10">
                    {socialLinks.map((social, index) => (
                      <Button 
                        key={index}
                        variant="secondary" 
                        size="sm" 
                        asChild
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm rounded-xl font-semibold hover:scale-110"
                      >
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                          <span className="ml-2">{social.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 delay-400">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-8">
                  How I Can Help You Succeed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className={`${service.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className={`bg-gradient-to-br ${service.color} p-4 rounded-2xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                          {service.icon}
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-cyan-700 transition-colors duration-300">{service.title}</h5>
                          <p className="text-slate-700 font-medium leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Users className="w-4 h-4 mr-2" />
              Common Questions
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 font-medium">Everything you need to know about working together</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="animate-on-load opacity-0 translate-y-4 transition-all duration-700 group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 border border-cyan-500/20 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-teal-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-medium relative z-10">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-teal-600/5 to-emerald-600/5 group-hover:from-cyan-600/10 group-hover:via-teal-600/10 group-hover:to-emerald-600/10 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full -translate-y-16 -translate-x-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full translate-y-20 translate-x-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Ready to get started?
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Let's Turn Your Vision Into Reality
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Ready to embark on an exciting journey? Whether you have questions or want to dive right in, I'm here to make your project a success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-700 hover:via-teal-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 group"
                  asChild
                >
                  <a href="#contact-form">
                    <Rocket className="mr-2 w-5 h-5 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                    Start Your Project
                    <Sparkles className="ml-2 w-4 h-4 group-hover:animate-pulse" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-cyan-400/30 hover:bg-cyan-500/10 hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                  asChild
                >
                  <a href="mailto:ry151916@gmail.com">
                    <Coffee className="mr-2 w-5 h-5" />
                    Let's Chat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
