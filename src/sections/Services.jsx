import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import {
    Stethoscope, CircleDot, Scissors, Crown, SmilePlus, HeartPulse, Baby
} from 'lucide-react'

const services = [
    {
        icon: Stethoscope,
        title: 'Endodontics',
        desc: 'Advanced root canal therapy with precision instruments for painless, lasting results.',
    },
    {
        icon: CircleDot,
        title: 'Implantology',
        desc: 'State-of-the-art dental implant solutions for permanent tooth replacement.',
    },
    {
        icon: Scissors,
        title: 'Oral & Maxillofacial Surgery',
        desc: 'Expert surgical interventions including wisdom teeth, jaw corrections, and trauma care.',
    },
    {
        icon: Crown,
        title: 'Prosthodontics',
        desc: 'Custom crowns, bridges, and dentures crafted for natural aesthetics and comfort.',
    },
    {
        icon: SmilePlus,
        title: 'Orthodontics',
        desc: 'Braces, aligners, and smile correction for perfectly aligned teeth.',
    },
    {
        icon: HeartPulse,
        title: 'Periodontics',
        desc: 'Comprehensive gum disease treatment and prevention for lasting oral health.',
    },
    {
        icon: Baby,
        title: 'Pedodontics',
        desc: 'Gentle, specialized dental care designed for children in a comfortable environment.',
    },
]

export default function Services() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section header
            gsap.fromTo('.services-header',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.services-header',
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Cards stagger
            gsap.fromTo('.service-card',
                { y: 60, opacity: 0, filter: 'blur(6px)' },
                {
                    y: 0, opacity: 1, filter: 'blur(0px)',
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.services-grid',
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="services"
            style={{
                padding: 'var(--section-padding) clamp(1.5rem, 5vw, 6rem)',
                background: 'linear-gradient(180deg, #0a0e1a 0%, #111827 50%, #0a0e1a 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle background glow */}
            <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(15,43,91,0.15) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div className="services-header" style={{ textAlign: 'center', marginBottom: '4rem', opacity: 0 }}>
                    <p style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--soft-warm)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-body)',
                    }}>Our Specialities</p>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                        color: '#fff',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                    }}>
                        Advanced Dental Services
                    </h2>

                    <p style={{
                        fontSize: '1.05rem',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontFamily: 'var(--font-body)',
                    }}>
                        Comprehensive multi-speciality care delivered with clinical precision and patient-first philosophy.
                    </p>
                </div>

                {/* Grid */}
                <div className="services-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={i}
                                className="service-card"
                                style={{
                                    padding: '2rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: '1.25rem',
                                    opacity: 0,
                                    cursor: 'default',
                                    transition: 'border-color 0.4s, box-shadow 0.4s',
                                }}
                                whileHover={{
                                    borderColor: 'rgba(15,43,91,0.5)',
                                    boxShadow: '0 0 30px rgba(15,43,91,0.15), 0 0 60px rgba(15,43,91,0.05)',
                                }}
                            >
                                <motion.div
                                    style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, rgba(196,168,122,0.15), rgba(196,168,122,0.05))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.25rem',
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Icon size={22} color="var(--soft-warm)" />
                                </motion.div>

                                <h3 style={{
                                    fontSize: '1.15rem',
                                    color: '#fff',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: '0.75rem',
                                    fontWeight: 600,
                                }}>
                                    {service.title}
                                </h3>

                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    lineHeight: 1.7,
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    {service.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
