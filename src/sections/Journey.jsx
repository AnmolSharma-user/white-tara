import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { MessageSquare, Search, ClipboardList, Sparkles, CalendarCheck } from 'lucide-react'

const steps = [
    {
        icon: MessageSquare,
        title: 'Consultation',
        desc: 'Begin with a thorough discussion about your dental goals and concerns.',
    },
    {
        icon: Search,
        title: 'Diagnosis',
        desc: 'Advanced digital imaging and examination to identify precise treatment needs.',
    },
    {
        icon: ClipboardList,
        title: 'Treatment Plan',
        desc: 'A personalized, transparent roadmap tailored to your unique oral health.',
    },
    {
        icon: Sparkles,
        title: 'Precision Care',
        desc: 'Expert treatment delivered with state-of-the-art technology and gentle hands.',
    },
    {
        icon: CalendarCheck,
        title: 'Follow-Up',
        desc: 'Ongoing support and monitoring to ensure lasting, beautiful results.',
    },
]

export default function Journey() {
    const sectionRef = useRef(null)
    const lineRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header
            gsap.fromTo('.journey-header',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.journey-header',
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Progress line
            gsap.fromTo(lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.journey-timeline',
                        start: 'top 70%',
                        end: 'bottom 60%',
                        scrub: 1,
                    }
                }
            )

            // Steps stagger
            gsap.fromTo('.journey-step',
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.journey-timeline',
                        start: 'top 75%',
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
            id="journey"
            style={{
                padding: 'var(--section-padding) clamp(1.5rem, 5vw, 6rem)',
                background: 'var(--off-white)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Header */}
                <div className="journey-header" style={{ textAlign: 'center', marginBottom: '4rem', opacity: 0 }}>
                    <p style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--soft-warm)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-body)',
                    }}>Your Experience</p>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                        color: 'var(--sapphire-deep)',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                    }}>
                        The Patient Journey
                    </h2>

                    <p style={{
                        fontSize: '1.05rem',
                        color: '#666',
                        maxWidth: '500px',
                        margin: '0 auto',
                        fontFamily: 'var(--font-body)',
                    }}>
                        A seamless, guided experience from your first visit to lasting results.
                    </p>
                </div>

                {/* Timeline */}
                <div className="journey-timeline" style={{ position: 'relative', paddingLeft: '3rem' }}>
                    {/* Progress Line */}
                    <div style={{
                        position: 'absolute',
                        left: '15px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'rgba(15,43,91,0.08)',
                        borderRadius: '1px',
                    }}>
                        <div
                            ref={lineRef}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to bottom, var(--soft-warm), var(--sapphire))',
                                borderRadius: '1px',
                                transformOrigin: 'top',
                                transform: 'scaleY(0)',
                            }}
                        />
                    </div>

                    {/* Steps */}
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        return (
                            <div
                                key={i}
                                className="journey-step"
                                style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    marginBottom: i < steps.length - 1 ? '3rem' : 0,
                                    opacity: 0,
                                    position: 'relative',
                                }}
                            >
                                {/* Node */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        left: '-3rem',
                                        top: '0.5rem',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: '#fff',
                                        border: '2px solid var(--soft-warm)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 2,
                                        flexShrink: 0,
                                    }}
                                    whileInView={{ rotate: [0, 10, 0] }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Icon size={14} color="var(--soft-warm)" />
                                </motion.div>

                                {/* Content */}
                                <div style={{
                                    padding: '1.5rem 2rem',
                                    background: '#fff',
                                    borderRadius: '1rem',
                                    boxShadow: '0 2px 15px rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(0,0,0,0.04)',
                                    flex: 1,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateX(5px)'
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(15,43,91,0.06)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateX(0)'
                                        e.currentTarget.style.boxShadow = '0 2px 15px rgba(0,0,0,0.03)'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '0.7rem',
                                        color: 'var(--soft-warm)',
                                        fontWeight: 600,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.5rem',
                                        fontFamily: 'var(--font-body)',
                                    }}>
                                        Step {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.15rem',
                                        color: 'var(--sapphire-deep)',
                                        fontFamily: 'var(--font-heading)',
                                        marginBottom: '0.5rem',
                                        fontWeight: 600,
                                    }}>
                                        {step.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#666',
                                        lineHeight: 1.7,
                                        fontFamily: 'var(--font-body)',
                                    }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
