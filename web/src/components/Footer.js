"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Particle Component
const FloatingParticle = ({ delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      y: [0, -20, 0],
      x: [0, 10, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#D4AF37',
      pointerEvents: 'none'
    }}
  />
);

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2C1B18', color: '#EDE0D4', padding: '5rem 2rem 3rem 2rem', borderTop: '5px solid #D4AF37', position: 'relative', overflow: 'hidden' }}>

      {/* Floating Particles for "Magic" */}
      <FloatingParticle delay={0} x="10%" y="20%" />
      <FloatingParticle delay={2} x="80%" y="10%" />
      <FloatingParticle delay={1} x="50%" y="40%" />
      <FloatingParticle delay={3} x="90%" y="60%" />
      <FloatingParticle delay={1.5} x="20%" y="80%" />

      {/* Main Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', position: 'relative', zIndex: 1 }}>

        {/* Brand - Logo Replacement */}
        <div>
          <div style={{ position: 'relative', width: '200px', height: '80px', marginBottom: '1rem' }}>
            <Image
              src="/images/Logoblanco-300x112.png"
              alt="Pueblito Caribeño"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left' }}
            />
          </div>
          <p style={{ lineHeight: '1.8', opacity: 0.8, fontSize: '1rem' }}>
            Arquitectura con alma, espacios con historia. Un estilo de vida donde la tradición abraza el confort moderno.
          </p>
        </div>

        {/* Navigation - Corrected Links */}
        <div style={{ paddingLeft: '2rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          <h4 style={{ fontFamily: 'var(--font-body)', color: '#D4AF37', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: '700' }}>Navegación</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link href="/" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Inicio</Link></li>
            <li><Link href="/living-in-pueblito" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Vivir en Pueblito</Link></li>
            <li><Link href="/events" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Agenda Cultural</Link></li>
            <li><Link href="/invest" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Oportunidades</Link></li>
            <li><Link href="/contact" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Contacto</Link></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', color: '#D4AF37', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: '700' }}>Contacto</h4>
          <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#D4AF37' }}>📍</span> Punta Cana, República Dominicana
          </p>
          <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#D4AF37' }}>✉️</span> ventas@paseodelsendero.com
          </p>
          <p style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#D4AF37' }}>📞</span> +1 (829) 259-8948
          </p>

          <form style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <input
              type="email"
              placeholder="Suscríbete al boletín"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.8rem',
                color: 'white',
                borderRadius: '4px',
                width: '100%'
              }}
            />
            <button style={{ background: '#D4AF37', color: '#2C1B18', border: 'none', padding: '0 1.5rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>OK</button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.9rem', opacity: 0.5 }}>
        <p>© {new Date().getFullYear()} Pueblito Caribeño. Todos los derechos reservados.</p>
      </div>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/18292598948"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 9999,
          fontSize: '2rem',
          textDecoration: 'none'
        }}
        aria-label="Contactar por WhatsApp"
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-2.32 0-4.507.905-6.148 2.547-3.39 3.391-3.39 8.905-.001 12.296l.001.001a8.67 8.67 0 0 0 1.583 1.258l-1.018 3.714 3.811-1.001a8.636 8.636 0 0 0 4.148 1.055h.001c2.32 0 4.507-.905 6.148-2.547 3.39-3.391 3.39-8.905.001-12.296-1.641-1.642-3.828-2.547-6.148-2.547zM6.621 17.585l-.234-.372c-1.332-2.115-1.282-4.836.14-6.907.456-.665 1.041-1.241 1.716-1.685 1.948-1.281 4.498-1.291 6.455-.027 1.229.793 2.155 2.052 2.54 3.456.386 1.405.215 2.909-.459 4.135-.595 1.082-1.528 1.956-2.628 2.459-1.378.631-2.903.744-4.321.319l-.403-.122-2.3.603.602-2.193a6.45 6.45 0 0 1-.508-2.203z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
