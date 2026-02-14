import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Star, ChevronDown, ArrowRight, Shield, Award, Clock } from 'lucide-react'
import heroImg from '../assets/doctor-infornt-logo-used-hero-section.avif'

export default function Hero() {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

            tl.fromTo('.hero-badge',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }, 0.2
            )
            tl.fromTo('.hero-word',
                { y: 50, opacity: 0, rotateX: 30 },
                { y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.08 }, 0.4
            )
            tl.fromTo('.hero-subtitle',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }, 1.0
            )
            tl.fromTo('.hero-cta-row',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 }, 1.2
            )
            tl.fromTo('.hero-metric',
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 1.4
            )
            tl.fromTo('.hero-visual',
                { scale: 0.96, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }, 0.5
            )
            tl.fromTo('.hero-scroll',
                { opacity: 0 }, { opacity: 1, duration: 1 }, 2.0
            )

            gsap.to('.accent-shape-1', { y: -20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
            gsap.to('.accent-shape-2', { y: 15, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' })

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top', end: 'bottom top', scrub: 1,
                onUpdate: (self) => {
                    if (contentRef.current) {
                        gsap.set(contentRef.current, { y: self.progress * 80, opacity: 1 - self.progress * 0.5 })
                    }
                }
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const headlineWords = ['Redefining', 'Dental', 'Excellence']

    return (
        <section ref={sectionRef} id="hero" style={{
            position: 'relative', minHeight: '100vh', display: 'flex',
            alignItems: 'center', overflow: 'hidden', background: 'var(--off-white)',
        }}>
            {/* Background mesh */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: `
          radial-gradient(ellipse 80% 60% at 10% 40%, rgba(30,58,95,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 85% 25%, rgba(196,168,122,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 50% 70% at 50% 85%, rgba(90,158,166,0.03) 0%, transparent 60%)
        `,
            }} />

            <div className="accent-shape-1" style={{
                position: 'absolute', top: '15%', right: '12%', width: '100px', height: '100px',
                borderRadius: '20px', border: '1px solid rgba(30,58,95,0.05)',
                transform: 'rotate(35deg)', pointerEvents: 'none',
            }} />
            <div className="accent-shape-2" style={{
                position: 'absolute', bottom: '20%', left: '6%', width: '70px', height: '70px',
                borderRadius: '50%', background: 'rgba(196,168,122,0.04)', pointerEvents: 'none',
            }} />

            {/* Content Grid */}
            <div ref={contentRef} className="hero-grid" style={{
                maxWidth: '1300px', margin: '0 auto', padding: '7rem 1.25rem 3rem',
                width: '100%', display: 'grid', gridTemplateColumns: '1fr',
                gap: '2.5rem', alignItems: 'center', position: 'relative', zIndex: 2,
            }}>
                {/* Text Column */}
                <div style={{ order: 1 }}>
                    <div className="hero-badge" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.45rem 1rem', background: 'rgba(30,58,95,0.05)',
                        borderRadius: '50px', marginBottom: '1.5rem', opacity: 0,
                    }}>
                        <div style={{ display: 'flex', gap: '2px' }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={11} fill="var(--soft-warm)" color="var(--soft-warm)" />
                            ))}
                        </div>
                        <span style={{
                            fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)',
                            fontFamily: 'var(--font-body)', letterSpacing: '0.02em',
                        }}>5.0 Rated • 677+ Reviews</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 7vw, 4rem)', fontWeight: 700,
                        color: 'var(--sapphire-deep)', lineHeight: 1.1,
                        letterSpacing: '-0.02em', marginBottom: '1.25rem',
                    }}>
                        {headlineWords.map((word, i) => (
                            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em', perspective: '400px' }}>
                                <span className="hero-word" style={{
                                    display: 'inline-block', opacity: 0,
                                    ...(word === 'Excellence' ? {
                                        background: 'linear-gradient(135deg, var(--soft-accent), var(--teal-soft))',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    } : {}),
                                }}>{word}</span>
                            </span>
                        ))}
                    </h1>

                    <p className="hero-subtitle" style={{
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: 'var(--text-secondary)',
                        lineHeight: 1.7, maxWidth: '460px', marginBottom: '2rem',
                        fontFamily: 'var(--font-body)', fontWeight: 400, opacity: 0,
                    }}>
                        Gangtok's most trusted multi-speciality dental authority — where clinical precision meets luxury private care.
                    </p>

                    <div className="hero-cta-row" style={{
                        display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem', opacity: 0,
                    }}>
                        <motion.a href="#appointment" whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.85rem 1.75rem', background: 'var(--sapphire-deep)',
                                color: '#fff', borderRadius: '12px', textDecoration: 'none',
                                fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-body)',
                                boxShadow: '0 4px 15px rgba(30,58,95,0.2)',
                            }}
                        >Book Consultation <ArrowRight size={15} /></motion.a>

                        <motion.a href="#services" whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.85rem 1.75rem', background: 'transparent',
                                color: 'var(--sapphire-deep)', borderRadius: '12px',
                                border: '1.5px solid rgba(30,58,95,0.12)', textDecoration: 'none',
                                fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-body)',
                            }}
                        >Our Services</motion.a>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        {[
                            { icon: Shield, label: 'Sterile Excellence', value: '100%' },
                            { icon: Award, label: 'Specialities', value: '7+' },
                            { icon: Clock, label: 'Years Trusted', value: '10+' },
                        ].map((m, i) => (
                            <div key={i} className="hero-metric" style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem', opacity: 0,
                            }}>
                                <div style={{
                                    width: '36px', height: '36px', borderRadius: '10px',
                                    background: 'rgba(30,58,95,0.04)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}><m.icon size={16} color="var(--soft-accent)" /></div>
                                <div>
                                    <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--sapphire-deep)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>{m.value}</p>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>{m.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Column — Real Doctor Image */}
                <div className="hero-visual" style={{ position: 'relative', opacity: 0, order: 2 }}>
                    <div style={{
                        position: 'relative', borderRadius: '20px', overflow: 'hidden',
                        aspectRatio: '3/4', maxHeight: '520px',
                        boxShadow: '0 20px 60px rgba(30,58,95,0.15)',
                        margin: '0 auto', maxWidth: '380px', width: '100%',
                    }}>
                        <img
                            src={heroImg}
                            alt="White Tara Dental Clinic — Doctor"
                            loading="eager"
                            style={{
                                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                            }}
                        />
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                            background: 'linear-gradient(to top, rgba(22,45,74,0.6), transparent)',
                        }} />
                    </div>

                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute', bottom: '8%', left: '-4%',
                            padding: '0.85rem 1.1rem', background: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(16px)', borderRadius: '14px',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
                            maxWidth: '200px', zIndex: 3,
                        }}
                    >
                        <div style={{ display: 'flex', gap: '2px', marginBottom: '0.35rem' }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={10} fill="var(--soft-warm)" color="var(--soft-warm)" />
                            ))}
                        </div>
                        <p style={{ fontSize: '0.72rem', color: 'var(--text-primary)', lineHeight: 1.5, fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                            "Best dental clinic in Gangtok."
                        </p>
                        <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontFamily: 'var(--font-body)' }}>
                            — Google Review
                        </p>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        style={{
                            position: 'absolute', top: '6%', right: '-2%',
                            padding: '0.75rem 1.1rem',
                            background: 'linear-gradient(135deg, var(--soft-warm), var(--soft-warm-light))',
                            borderRadius: '14px', boxShadow: '0 8px 25px rgba(196,168,122,0.2)',
                            textAlign: 'center', zIndex: 3,
                        }}
                    >
                        <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--sapphire-deep)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>677+</p>
                        <p style={{ fontSize: '0.6rem', color: 'var(--sapphire)', fontWeight: 600, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '0.15rem' }}>5-Star Reviews</p>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (min-width: 769px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; padding-top: 7rem !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          .hero-visual { max-width: 320px !important; margin: 0 auto !important; }
        }
      `}</style>

            <div className="hero-scroll" onClick={() => {
                const el = document.getElementById('authority')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }} style={{
                position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '0.3rem', cursor: 'pointer', opacity: 0, zIndex: 10,
            }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-body)', fontWeight: 500 }}>Scroll</span>
                <ChevronDown size={16} color="var(--text-muted)" style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }} />
            </div>
        </section>
    )
}
