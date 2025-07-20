'use client'

import { useRef, useCallback } from 'react'

interface TiltOptions {
  maxTilt?: number
  scale?: number
  speed?: number
  perspective?: number
  warmupDuration?: number
}

export function useTilt({
  maxTilt = 15,
  scale = 1.05,
  speed = 300,
  perspective = 1000,
  warmupDuration = 120
}: TiltOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const isWarmingUp = useRef(false)
  const warmupTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return

    // Use requestAnimationFrame for smooth performance
    requestAnimationFrame(() => {
      if (!elementRef.current) return

      const element = elementRef.current
      const rect = element.getBoundingClientRect()
      
      // Calculate mouse position relative to element center
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const mouseX = event.clientX - rect.left - centerX
      const mouseY = event.clientY - rect.top - centerY
      
      // Calculate rotation angles (clamped to prevent extreme rotations)
      const rotateX = Math.max(-maxTilt, Math.min(maxTilt, (mouseY / centerY) * maxTilt * -1))
      const rotateY = Math.max(-maxTilt, Math.min(maxTilt, (mouseX / centerX) * maxTilt))
      
      // Apply transform
      element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      
      // Handle smooth first transition
      if (isWarmingUp.current) {
        // Ultra-smooth transition for initial movement
        element.style.transition = `transform ${warmupDuration}ms cubic-bezier(0.16, 1, 0.3, 1)`
        
        // After warmup period, remove transition for direct tracking
        if (warmupTimeout.current) {
          clearTimeout(warmupTimeout.current)
        }
        warmupTimeout.current = setTimeout(() => {
          if (elementRef.current) {
            elementRef.current.style.transition = 'none'
            isWarmingUp.current = false
          }
        }, warmupDuration)
      } else {
        // Direct tracking without transition
        element.style.transition = 'none'
      }
    })
  }, [maxTilt, scale, perspective, warmupDuration])

  const handleMouseEnter = useCallback(() => {
    if (!elementRef.current) return
    
    const element = elementRef.current
    element.style.willChange = 'transform'
    
    // Activate warmup for smooth first transition
    isWarmingUp.current = true
    
    // Clear any existing timeout
    if (warmupTimeout.current) {
      clearTimeout(warmupTimeout.current)
      warmupTimeout.current = null
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return
    
    const element = elementRef.current
    
    // Clean up warmup state and timeout
    isWarmingUp.current = false
    if (warmupTimeout.current) {
      clearTimeout(warmupTimeout.current)
      warmupTimeout.current = null
    }
    
    // Smooth return to center
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    element.style.transition = `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`
    element.style.willChange = 'auto'
  }, [speed])

  return {
    ref: elementRef,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }
}