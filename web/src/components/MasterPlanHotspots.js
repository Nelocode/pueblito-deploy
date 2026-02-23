"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './MasterPlanHotspots.module.css';

// Coordinates for pins (x,y) and cards (cardX, cardY) to scatter them
// If cardX/cardY are present, a card is rendered. Otherwise, just a pin with a label.
const spots = [
    // --- Left Side ---
    { id: 'golf-1', title: "Campo de Golf", subtitle: "De 9 hoyos Par 3", x: 19, y: 35, cardX: 5, cardY: 10, image: "/images/master-plan/La isla.jpg", desc: "De 9 hoyos Par 3" },
    { id: 'parque', title: "Parque Paseo del Sendero", x: 35, y: 75, cardX: 5, cardY: 45, image: "/images/master-plan/Parque Paseo del Sendero.jpg", desc: "" },
    { id: 'isla', title: "La Isla", subtitle: "Club de Pesca, café y bar", x: 60, y: 40, cardX: 5, cardY: 77, image: "/images/master-plan/La isla.jpg", desc: "Club de Pesca, café y bar" },

    // Pins without cards (Labels only, exactly like reference)
    { id: 'acceso-serv', title: "Acceso Servicio", x: 26, y: 36 },
    { id: 'ashton-pin', title: "Ashton School", x: 35, y: 20 },
    { id: 'acceso-res-1', title: "Acceso Residentes", x: 42, y: 15 },
    { id: 'lago-2', title: "Lago 2 Club", x: 41, y: 30 },
    { id: 'royal-gardens', title: "Royal Gardens", x: 25, y: 78 },
    { id: 'zona-ecuestre', title: "Zona Ecuestre", x: 35, y: 62 },
    { id: 'wellness-residences', title: "Wellness Residences @ Paseo Park", x: 35, y: 66 },
    { id: 'pueblito-caribeno', title: "Pueblito Caribeño", x: 43, y: 53 },
    { id: 'campo-golf-ref', title: "Campo de Golf", x: 50, y: 60 },

    // --- Right Side ---
    { id: 'nube', title: "La Nube", subtitle: "Plaza Comercial y de entretenimiento", x: 75, y: 50, cardX: 80, cardY: 5, image: "/images/master-plan/La Nube.jpg", desc: "Plaza Comercial y de entretenimiento" },
    { id: 'playa-art', title: "Playa artificial", subtitle: "Playa privada, cómoda, segura y con excelente servicio", x: 65, y: 35, cardX: 80, cardY: 30, image: "/images/master-plan/Playa Artificial.jpg", desc: "Playa privada, cómoda, segura y con excelente servicio" },
    { id: 'piscinas', title: "Piscinas Club House", x: 61, y: 35, cardX: 80, cardY: 55, image: "/images/master-plan/Casa Club.jpg", desc: "" },
    { id: 'club-dep', title: "Club Deportivo", subtitle: "Canchas de fútbol, pádel, tenis, entre otros.", x: 55, y: 65, cardX: 80, cardY: 80, image: "/images/master-plan/Centro Deportivo.jpg", desc: "Canchas de fútbol, pádel, tenis, entre otros." },

    // Cards floating at bottom or alternate spots
    { id: 'ashton-card', title: "International Ashton School", x: 35, y: 20, cardX: 20, cardY: 80, image: "/images/master-plan/Ashton School.jpg", desc: "" }, // Pin shares coord with ashton-pin roughly
    { id: 'restaurantes', title: "Restaurantes", subtitle: "3 opciones gastronómicas al frente al Lago interno", x: 67, y: 38, cardX: 62, cardY: 80, image: "/images/master-plan/Yaque Bar.jpg", desc: "3 opciones gastronómicas al frente al Lago interno" },

    // Pins without cards right side
    { id: 'comp-dep', title: "Complejo Deportivo", x: 51, y: 21 },
    { id: 'lago-1', title: "Lago 1 Playa Artificial", x: 64, y: 35 }, // Near playa-art
    { id: 'chukum', title: "Chukum Lagoon", subtitle: "Hotel & Residences", x: 69, y: 38 },
    { id: 'acceso-res-2', title: "Acceso Residentes", x: 78, y: 20 },
    { id: 'plaza-com-la-nube', title: "Plaza Comercial La Nube", x: 75, y: 50 }, // Near nube
    { id: 'rest-piscina-salon', title: "Restaurantes Piscinas Salón Eventos", x: 61, y: 32 }, // Near piscinas
];

export default function MasterPlanHotspots() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className={styles.container}>
            <div className={styles.scatterContainer}>

                {/* CENTER MAP COLUMN */}
                <div className={styles.mapSection}>
                    <div className={styles.mapWrapper}>
                        <Image
                            src="/images/master-plan/Base.png"
                            alt="Mapa Master Plan Vistacana"
                            fill
                            className={styles.mapImage}
                            priority
                            sizes="(max-width: 850px) 100vw, 70vw"
                        />

                        {/* MAP PINS */}
                        {spots.map((spot) => (
                            <div
                                key={`pin-${spot.id}`}
                                className={`${styles.pin} ${hoveredId === spot.id ? styles.pinActive : ''}`}
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                                onMouseEnter={() => setHoveredId(spot.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setHoveredId(spot.id)}
                            >
                                <div className={styles.pinInner}></div>
                                <div className={styles.pinLabel}>{spot.title}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SCATTERED CARDS */}
                {spots.filter(spot => spot.cardX !== undefined && spot.cardY !== undefined).map((spot) => (
                    <div
                        key={`card-${spot.id}`}
                        className={`${styles.card} ${hoveredId === spot.id ? styles.cardActive : ''}`}
                        style={{ left: `${spot.cardX}%`, top: `${spot.cardY}%` }}
                        onMouseEnter={() => setHoveredId(spot.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => setHoveredId(spot.id)}
                    >
                        <div className={styles.cardImageWrapper}>
                            {spot.image && (
                                <Image
                                    src={spot.image}
                                    alt={spot.title}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 850px) 320px, 220px"
                                />
                            )}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{spot.title}</h3>
                            {(spot.desc || spot.subtitle) && (
                                <p className={styles.cardDesc}>{spot.subtitle || spot.desc}</p>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
