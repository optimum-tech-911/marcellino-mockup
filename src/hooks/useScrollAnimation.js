import { useEffect, useState } from 'react'

export const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          setAnimatedElements(prev => new Set([...prev, element]))
          element.classList.add('animated')
        }
      })
    }

    // Check on mount with a delay to ensure DOM is ready
    setTimeout(handleScroll, 100)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return animatedElements
}
