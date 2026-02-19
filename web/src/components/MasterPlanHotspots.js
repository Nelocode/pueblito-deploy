"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MasterPlanHotspots.module.css';

// Datos de los hotspots basados en los archivos disponibles
const hotspots = [
    // Restaurantes / Bares
    { id: 1, title: "Yaque Bar", x: 67, y: 38, type: "restaurant", image: "/images/master-plan/Yaque Bar.jpg", desc: "Bar y restaurante frente al lago." },
    { id: 2, title: "Marealta", x: 69, y: 36, type: "restaurant", image: "/images/master-plan/Marealta (Restaurante).jpg", desc: "Gastronomía exquisita." },

    // Amenidades
    { id: 3, title: "Playa Artificial", x: 65, y: 39, type: "amenity", image: "/images/master-plan/Playa Artificial.jpg", desc: "Playa privada segura y cómoda." },
    { id: 4, title: "La Isla", x: 63, y: 34, type: "amenity", image: "/images/master-plan/La isla.jpg", desc: "Club de pesca, café y bar." },
    { id: 5, title: "Casa Club", x: 61, y: 35, type: "amenity", image: "/images/master-plan/Casa Club.jpg", desc: "Espacio social exclusivo." },
    { id: 6, title: "Centro Deportivo", x: 55, y: 65, type: "amenity", image: "/images/master-plan/Centro Deportivo.jpg", desc: "Canchas de fútbol, padel y tenis." },
    { id: 7, title: "Piscina en la playa", x: 50, y: 45, type: "amenity", image: "/images/master-plan/Piscina en la playa.jpg", desc: "Relax total junto al agua." },
    { id: 8, title: "Parque Paseo del Sendero", x: 35, y: 80, type: "amenity", image: "/images/master-plan/Parque Paseo del Sendero.jpg", desc: "Áreas verdes para caminar." },

    // Proyectos / Edificios
    { id: 9, title: "La Nube", x: 75, y: 50, type: "project", image: "/images/master-plan/La Nube.jpg", desc: "Plaza comercial y de entretenimiento." },
    { id: 10, title: "Ashton School", x: 25, y: 20, type: "project", image: "/images/master-plan/Ashton School.jpg", desc: "Institución educativa internacional." },
    { id: 11, title: "Business Center", x: 45, y: 42, type: "project", image: "/images/master-plan/Bussines Center.jpg", desc: "Centro de negocios moderno." },
    { id: 12, title: "Oficina Paseo del Sendero", x: 38, y: 75, type: "project", image: "/images/master-plan/Oficina Paseo del sendero.jpg", desc: "Oficinas administrativas." },

    // Entradas
    { id: 13, title: "Entrada Vistacana", x: 90, y: 25, type: "entrance", image: "/images/master-plan/Entrada Vistacana.jpg", desc: "Acceso principal." },
];

export default function MasterPlanHotspots() {
    const [activeHotspot, setActiveHotspot] = useState(null);

    // Helper to get class name by type
    const getTypeClass = (type) => {
        switch (type) {
            case 'restaurant': return styles.restaurant;
            case 'amenity': return styles.amenity;
            case 'project': return styles.project;
            case 'entrance': return styles.entrance;
            default: return '';
        }
    };

    return (
        <div className={styles.container}>

            {/* MAPA BASE */}
            <div className={styles.mapWrapper}>
                <Image
                    src="/images/master-plan/Base.png"
                    alt="Mapa Master Plan"
                    fill
                    className={styles.mapImage}
                    priority
                />

                {/* PINES INTERACTIVOS */}
                {hotspots.map((spot) => (
                    <div
                        key={spot.id}
                        className={`${styles.pin} ${getTypeClass(spot.type)}`}
                        style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        onClick={() => setActiveHotspot(spot)}
                        title={spot.title} // Native tooltip fallback
                    >
                        {/* Círculo pulsante animado */}
                        <div className={styles.pulse}></div>

                        {/* Pin visible */}
                        <div className={styles.pinInner}>
                            {activeHotspot?.id === spot.id ? '✕' : '+'}
                        </div>

                        {/* Tooltip CSS (Desktop) */}
                        <div className={styles.tooltip}>
                            {spot.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* POPUP CARD (Overlay) */}
            <AnimatePresence>
                {activeHotspot && (
                    <div className={styles.overlay} onClick={() => setActiveHotspot(null)}>
                        <motion.div
                            layoutId={`card-${activeHotspot.id}`}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className={styles.card}
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking card
                        >
                            <button
                                className={styles.closeButton}
                                onClick={() => setActiveHotspot(null)}
                            >
                                ✕
                            </button>

                            {/* Imagen del lugar */}
                            <div className={styles.cardImages}>
                                <Image
                                    src={activeHotspot.image}
                                    alt={activeHotspot.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            {/* Contenido */}
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>
                                    {activeHotspot.title}
                                </h3>
                                <p className={styles.cardDesc}>
                                    {activeHotspot.desc}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Leyenda flotante en el mapa */}
            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <span className={styles.legendDot} style={{ backgroundColor: '#E67E22' }}></span> Restaurantes
                </div>
                <div className={styles.legendItem}>
                    <span className={styles.legendDot} style={{ backgroundColor: '#27AE60' }}></span> Amenidades
                </div>
                <div className={styles.legendItem}>
                    <span className={styles.legendDot} style={{ backgroundColor: '#2980B9' }}></span> Proyectos
                </div>
                <div className={styles.legendItem}>
                    <span className={styles.legendDot} style={{ backgroundColor: '#D35400' }}></span> Entradas
                </div>
            </div>
        </div>
    );
}
