'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

interface NeuralNetworkProps {
  nodeCount?: number
  className?: string
}

export function NeuralNetwork({ nodeCount = 12, className = '' }: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [nodes, setNodes] = useState<Node[]>([])
  const mousePos = useRef({ x: 0, y: 0 })

  // Initialize nodes
  useEffect(() => {
    if (dimensions.width === 0) return

    const newNodes: Node[] = []
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      })
    }

    // Create connections (each node connects to 2-3 nearest nodes)
    newNodes.forEach((node, i) => {
      const distances = newNodes
        .map((other, j) => ({
          index: j,
          distance: Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2)
        }))
        .filter(d => d.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3)

      node.connections = distances.map(d => d.index)
    })

    setNodes(newNodes)
  }, [dimensions, nodeCount])

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const rect = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        mousePos.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || nodes.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Get CSS variables for theme-aware colors
      const style = getComputedStyle(document.documentElement)
      const nodeColor = style.getPropertyValue('--neural-node').trim()
      const connectionColor = style.getPropertyValue('--neural-connection').trim()
      const glowColor = style.getPropertyValue('--neural-glow').trim()

      // Update and draw nodes
      nodes.forEach(node => {
        // Mouse interaction
        const dx = mousePos.current.x - node.x
        const dy = mousePos.current.y - node.y
        const distance = Math.sqrt(dx ** 2 + dy ** 2)
        
        if (distance < 100) {
          const force = (100 - distance) * 0.001
          node.vx += (dx / distance) * force
          node.vy += (dy / distance) * force
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Boundary bounce
        if (node.x <= 0 || node.x >= dimensions.width) node.vx *= -1
        if (node.y <= 0 || node.y >= dimensions.height) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(0, Math.min(dimensions.width, node.x))
        node.y = Math.max(0, Math.min(dimensions.height, node.y))

        // Slow down
        node.vx *= 0.999
        node.vy *= 0.999

        // Draw connections first (behind nodes)
        node.connections.forEach(connectionId => {
          const target = nodes[connectionId]
          if (!target) return

          const dist = Math.sqrt((node.x - target.x) ** 2 + (node.y - target.y) ** 2)
          const opacity = Math.max(0, 1 - dist / 200)

          if (opacity > 0.1) {
            ctx.strokeStyle = connectionColor.replace(')', `, ${opacity})`).replace('oklch(', 'oklch(')
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            ctx.stroke()
          }
        })

        // Draw node
        const nodeOpacity = distance < 100 ? 1 : 0.6
        ctx.fillStyle = nodeColor.replace(')', `, ${nodeOpacity})`).replace('oklch(', 'oklch(')
        ctx.beginPath()
        ctx.arc(node.x, node.y, distance < 100 ? 4 : 2, 0, Math.PI * 2)
        ctx.fill()

        // Add glow on hover
        if (distance < 50) {
          ctx.shadowColor = glowColor
          ctx.shadowBlur = 10
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [nodes, dimensions])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}