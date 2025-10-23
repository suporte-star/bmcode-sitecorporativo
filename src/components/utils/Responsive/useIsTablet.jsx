'use client'
import { useState, useEffect } from "react"

export default function useIsTablet(breakpoint = 1024) {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

    const handleChange = (e) => setIsTablet(e.matches)

    // Checa imediatamente e adiciona listener
    handleChange(mediaQuery)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [breakpoint])

  return isTablet
}