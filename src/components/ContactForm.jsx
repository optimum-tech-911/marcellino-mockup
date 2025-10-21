import React, { useState } from 'react'

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    alert('Merci pour votre message! Nous vous contacterons bientôt.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={`contact-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="contact-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--wood-dark)', marginBottom: '30px', textAlign: 'center' }}>
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom complet *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="question">Question générale</option>
              <option value="commande">Commande</option>
              <option value="retour">Retour/Échange</option>
              <option value="rendez-vous">Rendez-vous</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Votre message..."
            />
          </div>

          <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }}>
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  )
}

