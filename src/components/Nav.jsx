import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ContactForm from './ContactForm'
import BackToTop from './BackToTop'
import ShoppingCartIcon from '../assets/shopping-cart.svg'
import logoSrc from '/src/assets/logo.png.png';

export default function Nav(){
  const loc = useLocation()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleContactClick = (e) => {
    e.preventDefault()
    setIsContactOpen(true)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className='nav-inner'>
          <div className='brand'>
            <div className='logo'>
              <img src={logoSrc} alt="Marcellino Logo" width="60" height="60" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </div>
            <div>
              <div className='brand-title'>Marcellino</div>
              <div className='brand-sub'>Pour Lui · Pour Elle</div>
            </div>
          </div>
          <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
            <Link className={loc.pathname==='/'? 'active':''} to='/' onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link className={loc.pathname==='/a-propos'? 'active':''} to='/a-propos' onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <Link className={loc.pathname==='/produits'? 'active':''} to='/produits' onClick={() => setIsMenuOpen(false)}>Produits</Link>
            <button className='cta' onClick={handleContactClick}>Contact</button>
          </nav>
          <div className="mobile-controls">
            <button className='hamburger' onClick={toggleMenu}>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </button>
          <div className='nav-right'>
            <div className='cart-container'>
              <button className='cart-btn' style={{
                background: 'rgba(212,175,55,0.15)',
                border: '2px solid rgba(212,175,55,0.4)',
                borderRadius: '12px',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--lux-gold)',
                cursor: 'pointer',
                transition: 'var(--transition)',
                position: 'relative'
              }}>
                <img src={ShoppingCartIcon} alt="Panier" style={{ width: '20px', height: '20px' }} />
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'var(--lux-gold)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>0</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </header>
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <BackToTop />
    </>
  )
}
