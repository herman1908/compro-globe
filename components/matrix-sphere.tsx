'use client'

import { useEffect, useRef } from 'react'

const CHARS = 'RoboKomputer'
type Point = { x: number; y: number; z: number; char: string; phase: number; size: number }

export function MatrixSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    let animationFrame = 0
    let width = 0
    let height = 0
    let points: Point[] = []
    let rotation = 0
    let tilt = 0
    let horizontalRotation = 0
    let verticalRotation = 0
    let targetHorizontalSpeed = 0.006
    let targetVerticalSpeed = 0.002
    let pointerX = 0
    let pointerY = 0
    let pointerActive = false

    const createPoints = () => {
      points = []
      const latitudeCount = Math.max(24, Math.min(38, Math.round(width / 25)))
      let charIndex = 0
      for (let lat = 1; lat < latitudeCount - 1; lat += 1) {
        const phi = (lat / (latitudeCount - 1)) * Math.PI
        const ringSize = Math.max(12, Math.round(Math.sin(phi) * latitudeCount * 2.15))
        for (let lon = 0; lon < ringSize; lon += 1) {
          const theta = (lon / ringSize) * Math.PI * 2
          points.push({
            x: Math.sin(phi) * Math.cos(theta),
            y: Math.cos(phi),
            z: Math.sin(phi) * Math.sin(theta),
            char: CHARS[charIndex++ % CHARS.length],
            phase: (lat * 0.8 + lon) % (Math.PI * 2),
            size: 8 + (lat % 3),
          })
        }
      }
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      createPoints()
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
      pointerActive = true
      targetHorizontalSpeed = pointerX * 0.034
      targetVerticalSpeed = pointerY * 0.026
    }

    const handlePointerLeave = () => {
      pointerActive = false
      targetHorizontalSpeed = 0.006
      targetVerticalSpeed = 0.002
    }

    const render = (time: number) => {
      context.clearRect(0, 0, width, height)
      const radius = Math.min(width, height) * 0.405
      const centerX = width * 0.5
      const centerY = height * 0.5
      const glow = context.createRadialGradient(centerX, centerY, radius * 0.55, centerX, centerY, radius * 1.14)
      glow.addColorStop(0, 'rgba(180, 184, 185, 0.12)')
      glow.addColorStop(0.72, 'rgba(180, 184, 185, 0.04)')
      glow.addColorStop(1, 'rgba(180, 184, 185, 0)')
      context.fillStyle = glow
      context.beginPath()
      context.arc(centerX, centerY, radius * 1.14, 0, Math.PI * 2)
      context.fill()

      const drift = Math.sin(time * 0.0007) * 0.0014 + Math.cos(time * 0.00043) * 0.0009
      const wander = Math.sin(time * 0.00031) * 0.004
      targetHorizontalSpeed = pointerActive ? pointerX * 0.034 : 0.006 + wander
      targetVerticalSpeed = pointerActive ? pointerY * 0.026 : 0.002 + drift
      horizontalRotation += (targetHorizontalSpeed - horizontalRotation) * 0.045
      verticalRotation += (targetVerticalSpeed - verticalRotation) * 0.045
      rotation += horizontalRotation
      tilt += verticalRotation
      const projected = points.map((point) => {
        const x = point.x * Math.cos(rotation) - point.z * Math.sin(rotation)
        const z = point.x * Math.sin(rotation) + point.z * Math.cos(rotation)
        const y = point.y * Math.cos(tilt) - z * Math.sin(tilt)
        const tiltedZ = point.y * Math.sin(tilt) + z * Math.cos(tilt)
        return { point, x: centerX + x * radius, y: centerY + y * radius, depth: (tiltedZ + 1) / 2, z: tiltedZ }
      }).sort((a, b) => a.z - b.z)

      context.font = '500 10px DM Mono, monospace'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      for (const item of projected) {
        const pulse = 0.82 + Math.sin(time * 0.0018 + item.point.phase) * 0.16
        const alpha = (0.06 + item.depth * 0.82) * pulse
        context.globalAlpha = alpha
        context.fillStyle = item.depth > 0.52 ? '#3d4244' : '#8e9596'
        context.fillText(item.point.char, item.x, item.y)
      }
      context.globalAlpha = 1

      context.strokeStyle = 'rgba(67, 73, 75, 0.18)'
      context.lineWidth = 1
      for (const tilt of [-0.62, 0, 0.62]) {
        context.beginPath()
        context.ellipse(centerX, centerY, radius, radius * Math.abs(Math.cos(tilt)) * 0.28, tilt, 0, Math.PI * 2)
        context.stroke()
      }
      context.beginPath()
      context.ellipse(centerX, centerY, radius * 0.28, radius, 0, 0, Math.PI * 2)
      context.stroke()

      animationFrame = requestAnimationFrame(render)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerleave', handlePointerLeave)
    resize()
    animationFrame = requestAnimationFrame(render)
    return () => {
      observer.disconnect()
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerleave', handlePointerLeave)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-sphere" aria-label="Globe matrix RoboKomputer berputar" role="img" />
}
