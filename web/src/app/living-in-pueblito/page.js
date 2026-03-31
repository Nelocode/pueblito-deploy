"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation, MapPin } from 'lucide-react';
import { useState } from "react";
import LocationAccordion from "@/components/LocationAccordion";

export default function LivingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const inspirationCities = [
    { name: "La Habana", country: "Cuba", img: "/images/Inspiracion1.jpg", color: "#F2A900" }, // Gold
    { name: "El Viejo San Juan", country: "Puerto Rico", img: "/images/Inspiracion2.jpg", color: "#D64045" }, // Red/Pink
    { name: "Cartagena", country: "Colombia", img: "/images/Inspiracion3.jpg", color: "#009B77" }, // Teal
    { name: "Santo Domingo", country: "República Dominicana", img: "/images/Inspiracion4.jpg", color: "#003087" }, // Royal Blue
    { name: "Granada", country: "Isla del Caribe", img: "/images/Inspiracion5.jpg", color: "#9C27B0" }, // Purple
    { name: "Portobelo", country: "Panamá", img: "/images/Inspiracion6_new.png", color: "#4CAF50" }, // Green
    { name: "Coro", country: "Venezuela", img: "/images/Inspiracion7.jpg", color: "#FF5722" }, // Deep Orange
    { name: "Antigua", country: "Guatemala", img: "/images/Inspiracion8_new.png", color: "#795548" }, // Brown
    { name: "Costa Nova", country: "Portugal", img: "/images/Inspiracion9_costa_nova.png", color: "#003087" }, // Navy
  ];

  // Colors to cycle through for icons - STRICT USE of approved palette
  const iconColors = [
    "#F2A900", // Gold
    "#D64045", // Red
    "#009B77", // Teal
    "#003087", // Navy
    "#C06C5D", // Terracotta
  ];

  const amenities = [
    {
      title: "Plaza Comercial La Nube",
      desc: "Ubicada sobre la avenida principal y en la entrada de Vistacana, tendrá más de 20.000 m2 de comercios y servicios, incluyendo la cadena de supermercados La Sirena, Starbucks y otras importantes marcas.",
      img: "/images/amenities/plaza_la_nube.jpg",
      mapQuery: "Plaza La Nube Vistacana"
    },
    {
      title: "Supermercado La Sirena",
      desc: "Cadena de supermercados líder en República Dominicana, ofreciendo frescura, calidad y precios competitivos para toda la comunidad.",
      img: "/images/amenities/la_sirena_new.jpg",
      mapQuery: "Supermercado La Sirena Vistacana"
    },
    {
      title: "Ashton School",
      desc: "Institución educativa bilingüe de primer nivel, formando líderes con valores y excelencia académica dentro de un campus seguro.",
      img: "/images/amenities/ashton_school_new.jpg",
      mapQuery: "Ashton School Vistacana"
    },
    {
      title: "Campo de Golf",
      desc: "Un recorrido iluminado de 9 hoyos diseñado para disfrutar del deporte en un entorno natural relajante, accesible día y noche.",
      img: "/images/amenities/campo_golf.jpg",
      mapQuery: "Vistacana Golf Course"
    },
    {
      title: "Restaurante Playa Vistacana",
      desc: "Gastronomía exquisita frente al lago, ideal para compartir momentos inolvidables con vistas espectaculares.",
      img: "/images/amenities/restaurante_vistacana.png",
      mapQuery: "Restaurante Playa Vistacana"
    },
    {
      title: "La Isla",
      desc: "Un oasis recreativo en el lago para practicar deportes acuáticos, pesca o simplemente desconectar en plena naturaleza.",
      img: "/images/amenities/la_isla.jpg",
      mapQuery: "Vistacana Beach"
    },
    {
      title: "Gold's Gym",
      desc: "Gimnasio de clase mundial equipado con la última tecnología para mantener un estilo de vida activo y saludable.",
      img: "/images/amenities/golds_gym.jpg",
      mapQuery: "Golds Gym Vistacana"
    },
    {
      title: "Club Deportivo",
      desc: "Espacio integral con canchas y áreas de entrenamiento para diversas disciplinas, fomentando el deporte y la convivencia.",
      img: "/images/amenities/club_deportivo.jpg",
      mapQuery: "Vistacana Sports Club"
    },
    {
      title: "Club House",
      desc: "El punto de encuentro social por excelencia, con amenidades exclusivas para celebrar y compartir en comunidad.",
      img: "/images/amenities/club_house.jpg",
      mapQuery: "Vistacana Club House"
    },
    {
      title: "Parque Paseo del Sendero",
      desc: "Áreas verdes diseñadas para el esparcimiento familiar, caminatas al aire libre y conexión con el entorno natural.",
      img: "/images/amenities/parque_sendero.jpg",
      mapQuery: "Vistacana Paseo del Sendero"
    },
    {
      title: "Bru Specialty Coffee",
      desc: "El lugar perfecto para disfrutar de un café de especialidad y buena compañía en un ambiente acogedor.",
      img: "/images/amenities/bru_coffee.jpg",
      mapQuery: "Bru Coffee Vistacana"
    },
    {
      title: "Vistacana Business Center",
      desc: "Conveniencia total con oficinas de negocios, farmacia, estación de servicio y comercios esenciales a solo pasos de tu hogar.",
      img: "/images/amenities/farmacia_estacion.jpg",
      mapQuery: "Vistacana Business Center"
    },
  ];

  return (
    <main style={{ backgroundColor: '#F9F7F2', overflowX: 'hidden' }}>
      <Navbar />
      <PageHeader
        title="Vivir en Pueblito"
        subtitle="Más que metros cuadrados, un estilo de vida incomparable."
        bgImage="/images/portadas/Vivir.png"
      />

      {/* 1. Intro Section */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center' }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left', flex: '0 0 auto' }}
          >
            <div style={{ position: 'relative', lineHeight: 0.8 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '9rem', color: '#7CBD9F', display: 'block' }}>Vive</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '2.5rem',
                color: '#7CBD9F',
                fontWeight: '300',
                display: 'block',
                marginTop: '0.5rem',
                marginLeft: '0.5rem',
                letterSpacing: '1px'
              }}>
                los colores<br />del Caribe
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#555', flex: '1', minWidth: '300px', maxWidth: '600px' }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              Pueblito Caribeño nace inspirado en las zonas coloniales más representativas del Caribe, lugares donde la historia se encuentra con la vida cotidiana y el colorido transforma cada rincón en una obra de arte viva.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Cada calle rinde homenaje a un tesoro colonial, invitando a residentes y visitantes a recorrer un mapa de memorias y sensaciones sin salir de Punta Cana.
            </p>
            <p>
              Aquí, las plazas son lugares de encuentro, los balcones cuentan historias y la naturaleza se integra armónicamente con la vida urbana. Un entorno con alma para vivir, disfrutar y compartir.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 2. Inspiration Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#EFECE6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#555' }}>Nuestra inspiración</h2>
            <p style={{ color: '#777', marginTop: '0.5rem' }}>Cada calle está inspirada en icónicas zonas del Caribe</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {inspirationCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div style={{ position: 'relative', height: '300px', marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image src={city.img} alt={city.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', color: city.color, fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.2rem' }}>{city.name}</h3>
                <p style={{ color: '#666', fontSize: '1rem' }}>{city.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Location Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', color: '#7CBD9F', marginBottom: '2rem' }}>Bávaro-Punta Cana, Ubicación en la zona</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: '#666' }}>
          Estratégicamente ubicado en el corazón de Vistacana, el destino más vibrante de Punta Cana.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <LocationAccordion />
        </div>
      </section>

      {/* 4. Amenities Section + VIDEO Integrated */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#F9F7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '4rem',
            color: '#7CBD9F',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Vive cerca de todo
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto 3rem auto' }}></div>
        </div>
      </section>

      {/* 5. Video Section - Full Width */}
      <section style={{ width: '100%', backgroundColor: '#F9F7F2', paddingBottom: '0' }}>
        {/* VIDEO PLACEMENT - AutoPlay & No Controls */}
        <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
          <iframe
            src="https://www.youtube.com/embed/Fad9JA7dtz8?autoplay=1&mute=1&controls=0&loop=1&playlist=Fad9JA7dtz8&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%) scale(1.3)',
              pointerEvents: 'none'
            }}
          ></iframe>
        </div>
      </section>

      {/* 6. Directory List - Full Width Split Screen */}
      <section style={{ width: '100%', backgroundColor: '#F9F7F2' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {amenities.map((item, index) => {
            // Cycle colors
            const iconColor = iconColors[index % iconColors.length];
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  width: '100%',
                  minHeight: '600px', // Tall sections
                }}
              >
                {/* Text Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    order: isEven ? 1 : 2,
                    backgroundColor: iconColor,
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '4rem 6rem',
                    textAlign: 'left',
                    position: 'relative'
                  }}
                >

                  {/* Icon - Simplified, No Circle */}
                  <div style={{
                    marginBottom: '2rem',
                    width: '60px',
                    height: '60px',
                    position: 'relative'
                  }}>
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <Image
                        src="/images/amenities/amenity_icon.svg"
                        alt="icon"
                        fill
                        style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '2.5rem', fontWeight: '700', fontFamily: 'var(--font-body)', lineHeight: '1.2', marginBottom: '1.5rem', color: 'white' }}>{item.title}</h3>
                  <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '500px' }}>{item.desc}</p>

                  {/* Action Buttons: White style */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={`https://waze.com/ul?q=${encodeURIComponent(item.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'white', color: iconColor, padding: '0.8rem 2rem',
                        borderRadius: '50px', textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s',
                      }}
                    >
                      <Navigation size={18} />
                      Ir con Waze
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'transparent', color: 'white', padding: '0.8rem 2rem',
                        border: '2px solid white',
                        borderRadius: '50px', textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold',
                        transition: 'background 0.2s'
                      }}
                    >
                      <MapPin size={18} />
                      Ir con Maps
                    </a>
                  </div>
                </motion.div>

                {/* Image Side - Full Cover */}
                <div style={{
                  order: isEven ? 2 : 1,
                  position: 'relative',
                  height: '100%',
                  minHeight: '600px'
                }}>
                  <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
