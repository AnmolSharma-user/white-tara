import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Microscope, Target, HeartPulse } from 'lucide-react'
import treatmentSetupImg from '../assets/treatment_setup.avif'

const features = [
    {
        icon: Shield,
        title: 'Sterility Protocols',
        desc: 'Hospital-grade sterilization ensuring the highest safety standards for every procedure.',
    },
    {
        icon: Microscope,
        title: 'Advanced Technology',
        desc: 'Digital imaging, laser dentistry, and CAD/CAM systems for precision outcomes.',
    },
    {
        icon: Target,
        title: 'Precision Instruments',
        desc: 'Micro-surgical tools and magnification systems for unparalleled accuracy.',
    },
    {
        icon: HeartPulse,
        title: 'Patient Safety Systems',
        desc: 'Comprehensive monitoring, infection control, and emergency protocols always in place.',
    },
]

export default function Hygiene() {
    const sectionRef = useRef(null)
    const wrapperRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background color transition
            gsap.fromTo(sectionRef.current,
                { backgroundColor: '#0a0e1a' },
                {
                    backgroundColor: '#fafafa',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: '40% top',
                        scrub: 1,
                        pin: true,
                        pinSpacing: true,
                    },
                }
            )

            // Light sweep animation
            gsap.fromTo('.light-sweep',
                { x: '-100%' },
                {
                    x: '100%',
                    duration: 3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 50%',
                        toggleActions: 'play none none none',
                    },
                    ease: 'power2.inOut',
                }
            )

            // Header text color transition
            gsap.fromTo('.hygiene-header *',
                { color: '#fff' },
                {
                    color: 'var(--sapphire-deep)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: '40% top',
                        scrub: 1,
                    }
                }
            )

            gsap.fromTo('.hygiene-subtitle',
                { color: 'rgba(255,255,255,0.5)' },
                {
                    color: '#666',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: '40% top',
                        scrub: 1,
                    }
                }
            )

            // Icons sequential appearance
            gsap.fromTo('.hygiene-card',
                { y: 40, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.hygiene-grid',
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Horizontal text slide
            gsap.fromTo('.hygiene-marquee',
                { x: '10%' },
                {
                    x: '-10%',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="hygiene"
            style={{
                minHeight: '100vh',
                padding: 'var(--section-padding) clamp(1.5rem, 5vw, 6rem)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Light sweep effect */}
            <div className="light-sweep" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200px',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(196,168,122,0.06), transparent)',
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            <div ref={wrapperRef} style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                {/* Horizontal marquee text */}
                <div className="hygiene-marquee" style={{
                    position: 'absolute',
                    top: '-2rem',
                    left: '-5%',
                    fontSize: 'clamp(4rem, 12vw, 10rem)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    opacity: 0.03,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}>
                    Sterility • Precision • Technology • Safety •
                </div>

                {/* Header */}
                <div className="hygiene-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--soft-warm)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-body)',
                    }}>
                        Excellence in Hygiene
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                        color: '#fff',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                    }}>
                        Clinical Standards,{' '}
                        <span style={{ color: 'var(--soft-warm)' }}>Redefined</span>
                    </h2>

                    <p className="hygiene-subtitle" style={{
                        fontSize: '1.05rem',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontFamily: 'var(--font-body)',
                    }}>
                        Every instrument sterilized. Every surface sanitized. Every protocol followed — without exception.
                    </p>
                </div>

                {/* Image Banner */}
                <div style={{
                    borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '3rem',
                    maxHeight: '280px', position: 'relative',
                }}>
                    <img
                        src={treatmentSetupImg}
                        alt="Treatment setup at White Tara Dental"
                        loading="lazy"
                        style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to right, rgba(10,14,26,0.5), transparent 60%)',
                    }} />
                </div>

                {/* Cards Grid */}
                <div className="hygiene-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                }}>
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={i}
                                className="hygiene-card"
                                style={{
                                    padding: '2rem',
                                    background: 'rgba(255,255,255,0.9)',
                                    borderRadius: '1.25rem',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                    border: '1px solid rgba(0,0,0,0.04)',
                                    opacity: 0,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)'
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,43,91,0.08)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                                }}
                            >
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '0.75rem',
                                    background: 'linear-gradient(135deg, rgba(15,43,91,0.08), rgba(15,43,91,0.03))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.25rem',
                                }}>
                                    <Icon size={22} color="var(--sapphire)" />
                                </div>

                                <h3 style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--sapphire-deep)',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: '0.75rem',
                                    fontWeight: 600,
                                }}>
                                    {feature.title}
                                </h3>

                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    lineHeight: 1.7,
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    {feature.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
