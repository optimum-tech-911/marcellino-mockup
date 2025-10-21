import React from 'react'
import StoreImg from '../assets/Marcellino Boutique.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About(){
  const animatedElements = useScrollAnimation()

  return (
    <main className='container about-page'>
      <section className='about-hero'>
        <div className='about-media animate-on-scroll'>
          <img src={StoreImg} alt='Vitrine de la boutique Marcellino à Sète' />
        </div>
        <div className='about-text animate-on-scroll'>
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '48px', 
            color: 'var(--wood-dark)',
            marginBottom: '20px'
          }}>
            À propos de Marcellino
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', color: 'var(--muted)' }}>
            Installée à Sète, Marcellino propose une sélection raffinée de vêtements et accessoires pour une clientèle recherchant qualité et élégance. Notre approche est simple : des pièces durables, un service attentif et un conseil sur mesure.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--muted)', fontWeight: '500' }}>
            📍 Adresse: 3 Rue Général de Gaulle, 34200 Sète<br />
            🕒 Horaires: Lun‑Sam 10:00‑19:00
          </p>
        </div>
      </section>

      <section className='values'>
        <h2 className='animate-on-scroll' style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '36px', 
          color: 'var(--wood-dark)',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Nos engagements
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className='animate-on-scroll' style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '16px', 
            boxShadow: 'var(--shadow)',
            textAlign: 'center',
            transition: 'var(--transition)'
          }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Conseil personnalisé" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--wood-dark)', marginBottom: '12px' }}>
              Conseil personnalisé
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.5' }}>
              Un accompagnement sur mesure pour trouver les pièces qui vous correspondent parfaitement.
            </p>
          </div>
          
          <div className='animate-on-scroll' style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '16px', 
            boxShadow: 'var(--shadow)',
            textAlign: 'center',
            transition: 'var(--transition)'
          }}>
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Qualité premium" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--wood-dark)', marginBottom: '12px' }}>
              Sélection de qualité
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.5' }}>
              Des marques soigneusement choisies pour leur excellence et leur durabilité.
            </p>
          </div>
          
          <div className='animate-on-scroll' style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '16px', 
            boxShadow: 'var(--shadow)',
            textAlign: 'center',
            transition: 'var(--transition)'
          }}>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Ambiance chaleureuse" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--wood-dark)', marginBottom: '12px' }}>
              Ambiance chaleureuse
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.5' }}>
              Un accueil premium dans un cadre élégant et convivial au cœur de Sète.
            </p>
          </div>
        </div>
      </section>

      <section className='location' style={{ marginTop: '60px', padding: '40px 0', background: 'var(--cream)' }}>
        <div className='container'>
          <h2 className='animate-on-scroll' style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '36px', 
            color: 'var(--wood-dark)',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Nous trouver
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div className='animate-on-scroll'>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--wood-dark)', marginBottom: '16px', fontSize: '24px' }}>
                Adresse
              </h3>
              <p style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--muted)' }}>
                3 Rue Général de Gaulle
              </p>
              <p style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--muted)' }}>
                34200 Sète, France
              </p>
              <p style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--muted)' }}>
                Tél: <a href='tel:+33983814824' style={{ color: 'var(--lux-gold)', textDecoration: 'none', fontWeight: 600 }}>09 83 81 48 24</a>
              </p>
              <a 
                href='https://www.google.com/maps/dir//3+Rue+Général+de+Gaulle,+34200+Sète,+France/@43.4041,3.6969,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x12b6b0b0b0b0b0b0:0x0'
                target='_blank'
                rel='noreferrer'
                className='btn'
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                📍 Obtenir les directions
              </a>
            </div>
            <div className='animate-on-scroll'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.123456789!2d3.6969!3d43.4041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI0JzE0LjgiTiAzwrA0MSc0OC44IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px', boxShadow: 'var(--shadow)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Marcellino Sète"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
