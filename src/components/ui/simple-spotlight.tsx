'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface SimpleSpotlightProps {
  size?: number
  className?: string
}

export function SimpleSpotlight({ size = 500, className = '' }: SimpleSpotlightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    const element = containerRef.current?.parentElement
    if (!element) return

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  return (
    <div
      ref={containerRef}
      className={`absolute pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        width: size,
        height: size,
        left: mousePosition.x - size / 2,
        top: mousePosition.y - size / 2,
        background: `radial-gradient(circle, 
          rgba(255, 153, 0, 0.4) 0%, 
          rgba(255, 204, 0, 0.2) 30%, 
          rgba(255, 153, 0, 0.1) 60%, 
          transparent 100%)`,
        borderRadius: '50%',
        filter: 'blur(40px)',
      }}
    />
  )
}