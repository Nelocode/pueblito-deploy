"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './MasterPlanHotspots.module.css';

const spots = [
    { id: 'ashton', title: "ASHTON\nSCHOOL", x: 26, y: 25, cardX: 5, cardY: 20, image: "/images/master-plan/Ashton School.jpg", labelPos: 'left' },
    { id: 'centro-dep', title: "CENTRO\nDEPORTIVO", x: 48, y: 38, cardX: 45, cardY: -5, image: "/images/master-plan/Centro Deportivo.jpg", labelPos: 'left' },
    { id: 'la-sirena', title: "LA\nSIRENA", x: 65, y: 31, cardX: 63, cardY: 5, image: "/images/La-sirena.jpg", labelPos: 'left' },
    { id: 'golds-gym', title: "GOLD'S\nGYM", x: 77, y: 29, cardX: 95, cardY: 30, image: "/images/master-plan/Casa Club.jpg", labelPos: 'right' },
    { id: 'business-center', title: "BUSSINES\nCENTER", x: 74, y: 37, cardX: 95, cardY: 60, image: "/images/master-plan/La Nube.jpg", labelPos: 'right' },
    { id: 'golf', title: "CAMPO\nDE GOLF", x: 60, y: 55, cardX: 85, cardY: 85, image: "/images/master-plan/La isla.jpg", labelPos: 'right' },
    { id: 'pueblito', title: "", x: 37, y: 62, cardX: 65, cardY: 100, image: "/images/Logoblanco.png", labelPos: 'none', isLogo: true },
    { id: 'parque', title: "PARQUE\nPASEO\nDEL\nSENDERO", x: 35, y: 75, cardX: 5, cardY: 85, image: "/images/master-plan/Parque Paseo del Sendero.jpg", labelPos: 'left' }
];

export default function MasterPlanHotspots() {
    const [hoveredId, setHoveredId] = useState(null);
    const cardsWrapperRef = useRef(null);

    const handlePinClick = (id) => {
        setHoveredId(id);

        // On mobile, scroll the corresponding card into view if it exists
        if (window.innerWidth <= 850 && cardsWrapperRef.current) {
            const cardElement = document.getElementById(`card-${id}`);
            if (cardElement) {
                // Determine the wrapper's left scroll position to align the card to the center/start
                const wrapper = cardsWrapperRef.current;
                const cardRect = cardElement.getBoundingClientRect();
                const wrapperRect = wrapper.getBoundingClientRect();

                // Calculate scroll position to center the card. 
                // scrollLeft + card's left offset relative to wrapper - (wrapper width/2) + (card width/2)
                const scrollLeftPos = wrapper.scrollLeft + (cardRect.left - wrapperRect.left) - (wrapperRect.width / 2) + (cardRect.width / 2);

                wrapper.scrollTo({
                    left: scrollLeftPos,
                    behavior: 'smooth'
                });
            }
        }
    };

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
                        {/* SVG Connecting Lines (Hidden on mobile via CSS) */}
                        <svg className={styles.svgOverlay}>
                            {spots.map((spot) => (
                                <line
                                    key={`line-${spot.id}`}
                                    x1={`${spot.x}%`}
                                    y1={`${spot.y}%`}
                                    x2={`${spot.cardX}%`}
                                    y2={`${spot.cardY}%`}
                                    className={`${styles.connectionLine} ${hoveredId === spot.id ? styles.lineActive : ''}`}
                                />
                            ))}
                        </svg>

                        {/* SCATTERED CARDS WRAPPER FOR MOBILE CAROUSEL */}
                        <div className={styles.cardsWrapper} ref={cardsWrapperRef}>
                            {spots.filter(spot => spot.cardX !== undefined && spot.cardY !== undefined).map((spot) => (
                                <div
                                    key={`card-${spot.id}`}
                                    id={`card-${spot.id}`}
                                    className={`${styles.card} ${hoveredId === spot.id ? styles.cardActive : ''}`}
                                    style={{ '--desktop-left': `${spot.cardX}%`, '--desktop-top': `${spot.cardY}%` }}
                                    onMouseEnter={() => setHoveredId(spot.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    onClick={() => handlePinClick(spot.id)}
                                >
                                    <div className={`${styles.cardImageWrapper} ${spot.isLogo ? styles.logoWrapper : ''}`}>
                                        {spot.image && (
                                            <Image
                                                src={spot.image}
                                                alt={spot.title}
                                                fill
                                                className={`${styles.cardImage} ${spot.isLogo ? styles.logoImage : ''}`}
                                                sizes="(max-width: 850px) 320px, 220px"
                                            />
                                        )}
                                    </div>

                                    {spot.labelPos !== 'none' && (
                                        <div className={`${styles.cardContent} ${styles[`label-${spot.labelPos}`]}`}>
                                            <h3 className={styles.cardTitle}>
                                                {spot.title.split('\n').map((line, i) => (
                                                    <span key={i}>{line}<br /></span>
                                                ))}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
