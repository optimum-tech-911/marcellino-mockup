import React from 'react'
export default function Footer(){
  return (
    <footer className='footer'>
      <div className='container'>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '30px' }}>
          <div>
            <h3 style={{ color: 'var(--lux-gold)', fontSize: '20px', marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>Marcellino</h3>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>Boutique de prêt-à-porter</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>3 Rue Général de Gaulle</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>34200 Sète, France</p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--lux-gold)', fontSize: '16px', marginBottom: '12px' }}>Horaires</h4>
            <p style={{ fontSize: '14px', marginBottom: '4px' }}>Lundi - Samedi</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>10:00 - 19:00</p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--lux-gold)', fontSize: '16px', marginBottom: '12px' }}>Contact</h4>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>
              <a href='tel:+33983814824' style={{ color: 'var(--lux-gold)', textDecoration: 'none', fontWeight: 600 }}>09 83 81 48 24</a>
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <a href='https://www.facebook.com/profile.php?id=100062762962059&sk=photos' target='_blank' rel='noreferrer' 
                 style={{ 
                   background: 'rgba(212,175,55,0.2)', 
                   border: '1px solid var(--lux-gold)', 
                   borderRadius: '8px', 
                   padding: '8px 12px', 
                   color: 'var(--lux-gold)', 
                   textDecoration: 'none', 
                   fontSize: '14px',
                   fontWeight: 600,
                   transition: 'var(--transition)'
                 }}>
                Facebook
              </a>
              <a href='https://share.google/dE9eJZkwIUK61aOAP' target='_blank' rel='noreferrer' 
                 style={{ 
                   background: 'rgba(212,175,55,0.2)', 
                   border: '1px solid var(--lux-gold)', 
                   borderRadius: '8px', 
                   padding: '8px 12px', 
                   color: 'var(--lux-gold)', 
                   textDecoration: 'none', 
                   fontSize: '14px',
                   fontWeight: 600,
                   transition: 'var(--transition)'
                 }}>
                Google Fiche
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(212,175,55,0.3)', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>© {new Date().getFullYear()} Marcellino. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
