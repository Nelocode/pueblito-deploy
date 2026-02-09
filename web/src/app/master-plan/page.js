"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import PageHeader from "@/components/PageHeader";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MasterPlanPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const legendData = {
    apartamentos: [
      "1. Towers", "2. Residences", "3. Lagoon", "4. Chukum", "5. Oasis Park",
      "6. Panorama Luxury I y II", "7. Panorama Lake", "8. Panorama Garden", "9. Wave", "10. Unique",
      "11. Arko", "12. Icon", "13. Vibes Waterfall", "14. Riviera Costeña", "15. Urbe Vista",
      "16. Infinity View", "17. Pueblito Caribeño", "18. Ziba", "19. Sabana Apts", "20. Ventura Golf Estates",
      "21. Tropics", "22. Sendero Residences", "23. Cayena", "24. Arenas", "25. The Wind"
    ],
    villas: [
      "1. Paseo del Sendero", "2. Magnolia", "3. Vista Park", "4. La Senda"
    ],
    restaurantes: [
      "1. Yaque", "2. Marealta", "3. Volare", "4. Granier"
    ],
    amenidades: [
      "1. Playa 1", "2. Lago", "3. La Isla", "4. Casa Club", "5. Sports Club",
      "6. Playa 2", "7. Sendero Ecológico", "8. Golf", "9. Boulevard Central", "10. Centro Ecuestre Sabana"
    ],
    proyectos: [
      "1. Vistacana Business Center", "2. La Nube Vistacana Shopping Center", "3. Ashton School Vistacana"
    ]
  };

  return (
    <main style={{ backgroundColor: '#F9F7F2', minHeight: '100vh' }}>
      <Navbar />

      <PageHeader
        title="Master Plan"
        subtitle="Una visión integral de nuestra comunidad."
        bgImage="/images/portadas/Masterplan.png"
      />

      <section style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>

        {/* MAP CONTAINER - Cropped visually */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          minHeight: '500px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0,0,0,0.05)',
          backgroundColor: '#E8F5E9',
          cursor: 'zoom-in'
        }}
          onClick={() => setLightboxImage("/images/master_plan_2024.png")}
        >
          <Image
            src="/images/master_plan_2024.png"
            alt="Master Plan Vistacana"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%' /* Crops the bottom legend out mostly by focusing top-center */
            }}
          />

          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            background: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            pointerEvents: 'none'
          }}>
            🔍 Clic para ampliar
          </div>
        </div>

        {/* HTML LEGEND */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem',
            color: '#2C3E50',
            marginBottom: '3rem'
          }}>
            Convenciones
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>

            {/* Column 1: Apartamentos */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: '700', color: '#27AE60', marginBottom: '1.5rem', borderBottom: '2px solid #27AE60', paddingBottom: '0.5rem', display: 'inline-block' }}>Apartamentos ■</h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                {legendData.apartamentos.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 2: Villas & Restaurants */}
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: '700', color: '#8E44AD', marginBottom: '1.5rem', borderBottom: '2px solid #8E44AD', paddingBottom: '0.5rem', display: 'inline-block' }}>Zonas de Villas ■</h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                  {legendData.villas.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: '700', color: '#E67E22', marginBottom: '1.5rem', borderBottom: '2px solid #E67E22', paddingBottom: '0.5rem', display: 'inline-block' }}>Restaurantes & Bars ■</h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                  {legendData.restaurantes.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Amenities & Projects */}
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: '700', color: '#F1C40F', marginBottom: '1.5rem', borderBottom: '2px solid #F1C40F', paddingBottom: '0.5rem', display: 'inline-block' }}>Amenidades ■</h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                  {legendData.amenidades.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: '700', color: '#D35400', marginBottom: '1.5rem', borderBottom: '2px solid #D35400', paddingBottom: '0.5rem', display: 'inline-block' }}>Proyectos Vistacana ■</h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                  {legendData.proyectos.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="/invest" className="btn-primary" style={{
            display: 'inline-block',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 10px 20px rgba(46, 58, 140, 0.2)'
          }}>
            Ver Oportunidades de Inversión
          </a>
        </div>

      </section>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <div style={{ position: 'relative', width: '95%', height: '95%' }}>
              <Image
                src={lightboxImage}
                alt="Vista ampliada"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'grid',
                placeItems: 'center',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10000,
                color: 'black'
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
