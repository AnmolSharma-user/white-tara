import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import doctorImg from '../assets/doctor_image.avif'
import interiorImg from '../assets/interior.avif'

export default function About() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-image',
                { scale: 1.08 },
                { scale: 1, scrollTrigger: { trigger: '.about-image', start: 'top 80%', end: 'bottom 20%', scrub: 1 } }
            )
            gsap.fromTo('.about-line',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-text', start: 'top 75%', toggleActions: 'play none none none' }
                }
            )
            gsap.to('.about-wave', { x: 80, y: -40, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="about" style={{
            position: 'relative', padding: 'var(--section-padding) clamp(1rem, 4vw, 5rem)',
            overflow: 'hidden', background: 'var(--off-white)',
        }}>
            <div className="about-wave" style={{
                position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(30,58,95,0.03) 0%, transparent 70%)',
                top: '-100px', right: '-200px', pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1200px', margin: '0 auto',
                display: 'grid', gridTemplateColumns: '1fr',
                gap: '2.5rem', alignItems: 'center',
            }}>
                {/* Images — stacked on mobile, side by side on desktop */}
                <div className="about-images" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
                }}>
                    <div style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
                        <img
                            src={doctorImg}
                            alt="Dr. at White Tara Dental Clinic"
                            className="about-image"
                            loading="lazy"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block', borderRadius: '1.25rem' }}
                        />
                    </div>
                    <div style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
                        <img
                            src={interiorImg}
                            alt="White Tara Dental Clinic Interior"
                            className="about-image"
                            loading="lazy"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block', borderRadius: '1.25rem' }}
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="about-text">
                    <p className="about-line" style={{
                        fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em',
                        color: 'var(--soft-warm)', fontWeight: 600, marginBottom: '0.75rem',
                        fontFamily: 'var(--font-body)', opacity: 0,
                    }}>About Our Practice</p>

                    <h2 className="about-line" style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--sapphire-deep)',
                        marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', opacity: 0,
                    }}>Where Precision Meets Compassion</h2>

                    <p className="about-line" style={{
                        fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8,
                        marginBottom: '0.75rem', fontFamily: 'var(--font-body)', opacity: 0,
                    }}>
                        White Tara Dental Clinic stands as Gangtok's most trusted multi-speciality dental centre, delivering world-class oral healthcare with clinical precision and genuine care.
                    </p>

                    <p className="about-line" style={{
                        fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8,
                        marginBottom: '1.5rem', fontFamily: 'var(--font-body)', opacity: 0,
                    }}>
                        Our state-of-the-art facility combines advanced surgical capability with a luxury private care experience. Every treatment is performed with sterile excellence and meticulous attention to detail.
                    </p>

                    <motion.div className="about-line"
                        style={{
                            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(30,58,95,0.06)', borderRadius: '1rem',
                            padding: '1.5rem', opacity: 0,
                        }}
                        whileHover={{ rotateX: 2, rotateY: -2, boxShadow: '0 15px 35px rgba(30,58,95,0.08)', transition: { duration: 0.3 } }}
                    >
                        <Quote size={20} color="var(--soft-warm)" style={{ marginBottom: '0.5rem', opacity: 0.6 }} />
                        <p style={{
                            fontSize: '1rem', fontStyle: 'italic', color: 'var(--sapphire-deep)',
                            lineHeight: 1.7, fontFamily: 'var(--font-heading)',
                        }}>
                            "Our commitment is to provide each patient with dental care that exceeds expectations — blending clinical expertise with the warmth they deserve."
                        </p>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (min-width: 769px) {
          #about > div:nth-child(2) { grid-template-columns: 0.9fr 1.1fr !important; gap: 3rem !important; }
          .about-images img { height: 350px !important; }
        }
        @media (max-width: 768px) {
          .about-images { grid-template-columns: 1fr !important; }
          .about-images img { height: 220px !important; }
        }
      `}</style>
        </section>
    )
}
