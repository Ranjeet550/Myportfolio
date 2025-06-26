"use client"

import { useEffect, useRef } from "react"

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")

      if (containerRef.current) {
        const particles = containerRef.current.querySelectorAll(".particle")

        particles.forEach((particle, index) => {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          })

          gsap.to(particle, {
            y: "-=100",
            duration: Math.random() * 3 + 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2,
          })

          gsap.to(particle, {
            x: "+=50",
            duration: Math.random() * 4 + 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1,
          })
        })
      }
    }

    loadGSAP()
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="particle w-2 h-2 opacity-20"
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}
    </div>
  )
}
