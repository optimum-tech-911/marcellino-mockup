import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import LogoPng from './assets/logo.png.png'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Derive theme colors from the logo image and set CSS variables
;(function deriveThemeFromLogo(){
  try{
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = LogoPng
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if(!ctx) return
      const size = 64
      canvas.width = size
      canvas.height = size
      // Draw scaled down to average colors efficiently
      ctx.drawImage(img, 0, 0, size, size)
      const { data } = ctx.getImageData(0, 0, size, size)
      let r = 0, g = 0, b = 0, count = 0
      for(let i=0; i<data.length; i+=4){
        const alpha = data[i+3]
        if(alpha < 10) continue
        r += data[i]
        g += data[i+1]
        b += data[i+2]
        count++
      }
      if(count === 0) return
      r = Math.round(r / count)
      g = Math.round(g / count)
      b = Math.round(b / count)
      const primary = `rgb(${r}, ${g}, ${b})`
      // Create darker and accent variations
      const dark = `rgb(${Math.max(0, r-30)}, ${Math.max(0, g-30)}, ${Math.max(0, b-30)})`
      const accent = `rgb(${Math.min(255, r+40)}, ${Math.min(255, g+25)}, ${Math.min(255, b)})`
      const root = document.documentElement
      root.style.setProperty('--wood', primary)
      root.style.setProperty('--wood-dark', dark)
      root.style.setProperty('--accent', accent)
    }
  }catch{}
})()
