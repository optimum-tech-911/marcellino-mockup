import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../assets/hero.svg'
import RobeSoireeImg from '../assets/Robe Soirée Élégance Soie et finition main.png'
import PantalonChinoImg from '../assets/Pantalon Chino Classique.png'
import PullLaineImg from '../assets/Pull Laine Mérinos.png'
import RobeCocktailImg from '../assets/Robe Cocktail.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home(){
  const animatedElements = useScrollAnimation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const productImages = [
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1506629905607-3c9d6f96f6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1571513720929-569d5fae8f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  ]

  const products = [
    { name: 'Veste City Premium', price: '€120', image: productImages[0] },
    { name: 'Robe Soirée Élégance', price: '€150', image: RobeSoireeImg },
    { name: 'Pantalon Chino Classique', price: '€80', image: PantalonChinoImg },
    { name: 'Chemise Lin d\'Été', price: '€65', image: productImages[3] },
    { name: 'Manteau Trench Iconique', price: '€220', image: productImages[4] },
    { name: 'Pull Laine Mérinos', price: '€95', image: PullLaineImg }
  ]

  return (
    <main>
      <section className='hero'>
        <div className='hero-inner container'>
          <div className='hero-text'>
            <h1>Marcellino — Élégance & Style à Sète</h1>
            <p className='lead'>Découvrez notre sélection exclusive de prêt-à-porter haut de gamme pour hommes et femmes. Des pièces intemporelles, des matières nobles et un service personnalisé dans notre boutique du centre-ville de Sète.</p>
            <div className='hero-actions'>
              <Link className='btn' to='/produits'>Découvrir la Collection</Link>
              <Link className='btn ghost' to='/a-propos'>Notre Histoire</Link>
            </div>
          </div>
          <div className='hero-media'>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '500px' }}>
              <img src={RobeSoireeImg} alt='Robe Soirée Élégance' style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
              <img src={PantalonChinoImg} alt='Pantalon Chino Classique' style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
              <img src={PullLaineImg} alt='Pull Laine Mérinos' style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
              <img src={RobeCocktailImg} alt='Robe Cocktail' style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className='showcase container'>
        <h2 className='animate-on-scroll'>Quelques pièces sélectionnées</h2>
        <div className='grid-sample'>
          {products.map((product, index) => (
            <div 
              key={index} 
              className='product-card animate-on-scroll'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className='img-placeholder' style={{ display: 'none' }}>
                Image non disponible
              </div>
              <h3>{product.name}</h3>
              <p className='price'>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
