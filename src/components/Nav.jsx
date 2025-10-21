import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ContactForm from './ContactForm'
import ShoppingCartIcon from '../assets/shopping-cart.svg'
import logoSrc from '/src/assets/logo.png.png';

export default function Nav(){
  const loc = useLocation()
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleContactClick = (e) => {
    e.preventDefault()
    setIsContactOpen(true)
  }

  return (
    <>
      <header className='nav'>
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
          <nav className='links'>
            <Link className={loc.pathname==='/'? 'active':''} to='/'>Accueil</Link>
            <Link className={loc.pathname==='/a-propos'? 'active':''} to='/a-propos'>À propos</Link>
            <Link className={loc.pathname==='/produits'? 'active':''} to='/produits'>Produits</Link>
            <button className='cta' onClick={handleContactClick}>Contact</button>
          </nav>
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
      </header>
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
