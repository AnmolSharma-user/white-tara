import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

import receptionImg from '../assets/reception_image.avif'
import treatmentImg from '../assets/treatment.avif'
import interiorImg from '../assets/interior.avif'
import littlePatientImg from '../assets/little_patient.avif'
import girlPatientDoctorImg from '../assets/girl_little_patient_and_doctor.avif'
import doctorImg from '../assets/doctor_image.avif'
import treatmentSetupImg from '../assets/treatment_setup.avif'
import heroImg from '../assets/doctor-infornt-logo-used-hero-section.avif'

const galleryItems = [
    {
        src: receptionImg, alt: 'Clinic Reception', category: 'Clinic',
        caption: 'Our welcoming reception area'
    },
    {
        src: interiorImg, alt: 'Clinic Interior', category: 'Clinic',
        caption: 'State-of-the-art clinic interior'
    },
    {
        src: treatmentImg, alt: 'Treatment in Progress', category: 'Treatment',
        caption: 'Precision dental treatment'
    },
    {
        src: treatmentSetupImg, alt: 'Treatment Setup', category: 'Treatment',
        caption: 'Advanced treatment setup'
    },
    {
        src: doctorImg, alt: 'Our Doctor', category: 'Team',
        caption: 'Expert dental care team'
    },
    {
        src: heroImg, alt: 'Doctor at White Tara', category: 'Team',
        caption: 'Trusted dental professionals'
    },
    {
        src: girlPatientDoctorImg, alt: 'Doctor with Young Patient', category: 'Patients',
        caption: 'Gentle care for young patients'
    },
    {
        src: littlePatientImg, alt: 'Young Patient', category: 'Patients',
        caption: 'A smile for every age'
    },
]

const categories = ['All', 'Clinic', 'Treatment', 'Team', 'Patients']

export default function Gallery() {
    const sectionRef = useRef(null)
    const [activeCategory, setActiveCategory] = useState('All')
    const [lightbox, setLightbox] = useState(null)

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.gallery-header',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
                }
            )
            gsap.fromTo('.gallery-filter',
                { y: 20, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="gallery" style={{
            padding: 'var(--section-padding) clamp(1rem, 4vw, 5rem)',
            background: 'var(--white)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div className="gallery-header" style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0 }}>
                    <p style={{
                        fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em',
                        color: 'var(--soft-warm)', fontWeight: 600, marginBottom: '0.75rem',
                        fontFamily: 'var(--font-body)',
                    }}>Inside White Tara</p>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--sapphire-deep)',
                        fontFamily: 'var(--font-heading)', marginBottom: '0.5rem',
                    }}>Our Clinic Gallery</h2>
                    <p style={{
                        fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '500px',
                        margin: '0 auto', fontFamily: 'var(--font-body)',
                    }}>
                        Take a look at our modern facility, expert team, and the care we provide.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="gallery-filter" style={{
                    display: 'flex', justifyContent: 'center', gap: '0.5rem',
                    flexWrap: 'wrap', marginBottom: '2.5rem', opacity: 0,
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '0.45rem 1.1rem', borderRadius: '50px', border: 'none',
                                cursor: 'pointer', fontSize: '0.8rem', fontWeight: 500,
                                fontFamily: 'var(--font-body)', transition: 'all 0.3s',
                                background: activeCategory === cat ? 'var(--sapphire-deep)' : 'rgba(30,58,95,0.06)',
                                color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                            }}
                        >{cat}</button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '1rem',
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, i) => (
                            <motion.div
                                key={item.alt}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                onClick={() => setLightbox(item)}
                                style={{
                                    borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer',
                                    position: 'relative', aspectRatio: '4/3',
                                }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                                        transition: 'transform 0.5s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                {/* Hover overlay */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(22,45,74,0.7), transparent 60%)',
                                    opacity: 0, transition: 'opacity 0.3s', display: 'flex',
                                    alignItems: 'flex-end', padding: '1rem',
                                }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                                >
                                    <div>
                                        <p style={{
                                            color: '#fff', fontSize: '0.85rem', fontWeight: 600,
                                            fontFamily: 'var(--font-body)',
                                        }}>{item.caption}</p>
                                        <p style={{
                                            color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem',
                                            fontFamily: 'var(--font-body)', marginTop: '0.2rem',
                                        }}>{item.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightbox(null)}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 9999,
                            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '2rem', cursor: 'zoom-out',
                        }}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightbox(null) }}
                            style={{
                                position: 'absolute', top: '1.5rem', right: '1.5rem',
                                background: 'rgba(255,255,255,0.1)', border: 'none',
                                borderRadius: '50%', width: '44px', height: '44px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: '#fff',
                            }}
                        ><X size={22} /></button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={e => e.stopPropagation()}
                            style={{ maxWidth: '900px', maxHeight: '80vh', position: 'relative' }}
                        >
                            <img
                                src={lightbox.src}
                                alt={lightbox.alt}
                                style={{
                                    maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain',
                                    borderRadius: '1rem', display: 'block',
                                }}
                            />
                            <p style={{
                                textAlign: 'center', color: 'rgba(255,255,255,0.7)',
                                fontSize: '0.9rem', marginTop: '1rem',
                                fontFamily: 'var(--font-body)',
                            }}>{lightbox.caption}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 600px) {
          #gallery .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
        </section>
    )
}
