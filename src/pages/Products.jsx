import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import RobeSoireeImg from '../assets/Robe Soirée Élégance Soie et finition main.png'
import PantalonChinoImg from '../assets/Pantalon Chino Classique.png'
import PullLaineImg from '../assets/Pull Laine Mérinos.png'
import RobeCocktailImg from '../assets/Robe Cocktail.png'

const products = [
  { 
    id: 1, 
    name: 'Veste City Premium', 
    price: 120, 
    desc: 'Coupe moderne, tissu italien',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 2, 
    name: 'Robe Soirée Élégance', 
    price: 150, 
    desc: 'Soie et finition main',
    image: RobeSoireeImg
  },
  { 
    id: 3, 
    name: 'Pantalon Chino Classique', 
    price: 80, 
    desc: 'Coupe droite, confort',
    image: PantalonChinoImg
  },
  { 
    id: 4, 
    name: 'Chemise Lin d\'Été', 
    price: 65, 
    desc: 'Parfaite pour l\'été',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 5, 
    name: 'Manteau Trench Iconique', 
    price: 220, 
    desc: 'Classique réinventé',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 6, 
    name: 'Pull Laine Mérinos', 
    price: 95, 
    desc: 'Douceur et chaleur',
    image: PullLaineImg
  },
  { 
    id: 7, 
    name: 'Blazer Femme Chic', 
    price: 180, 
    desc: 'Élégance moderne',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 8, 
    name: 'Jean Premium', 
    price: 90, 
    desc: 'Denim de qualité',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 9, 
    name: 'Robe Cocktail', 
    price: 160, 
    desc: 'Soirée glamour',
    image: RobeCocktailImg
  }
]

export default function Products(){
  const animatedElements = useScrollAnimation()

  return (
    <main className='container products-page'>
      <h1 className='animate-on-scroll' style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: '48px', 
        color: 'var(--lux-green-dark)', 
        textAlign: 'center',
        marginBottom: '12px'
      }}>
        Collection Marcellino
      </h1>
      <p className='animate-on-scroll' style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '38px', fontSize: '18px' }}>
        Découvrez notre sélection exclusive de prêt-à-porter haut de gamme. Chaque pièce est soigneusement choisie pour son style intemporel et sa qualité exceptionnelle.
      </p>
      <div className='animate-on-scroll' style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
        <a 
          href='https://www.facebook.com/profile.php?id=100062762962059&sk=photos' 
          target='_blank' 
          rel='noreferrer'
          className='btn'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            fontSize: '16px',
            padding: '14px 28px'
          }}
        >
          Voir toute la galerie Facebook
        </a>
      </div>
      <div className='products-grid'>
        {products.map((p, index) => (
          <article 
            className='product animate-on-scroll'
            key={p.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={p.image} 
              alt={p.name}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className='img-placeholder large' style={{ display: 'none' }}>
              Image non disponible
            </div>
            <div className='prod-body'>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--wood-dark)' }}>{p.name}</h3>
              <p className='muted' style={{ color: 'var(--muted)' }}>{p.desc}</p>
              <div className='prod-foot'>
                <div className='price' style={{ fontWeight: '700', color: 'var(--wood-dark)', fontSize: '20px' }}>€{p.price}</div>
                <button className='btn small' style={{ 
                  padding: '8px 16px', 
                  fontSize: '14px',
                  background: 'linear-gradient(135deg, var(--lux-green), var(--wood))',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}>
                  En savoir
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
