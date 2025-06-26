"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const transitionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")

      if (transitionRef.current) {
        gsap.set(transitionRef.current, { yPercent: -100 })
        gsap.to(transitionRef.current, {
          yPercent: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(transitionRef.current, {
              yPercent: 100,
              duration: 0.5,
              ease: "power2.inOut",
              delay: 0.2,
            })
          },
        })
      }
    }

    loadGSAP()
  }, [pathname])

  return (
    <>
      <div ref={transitionRef} className="page-transition" />
      {children}
    </>
  )
}
