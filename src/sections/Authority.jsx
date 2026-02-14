import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Users, Award, Cpu } from 'lucide-react'

const stats = [
    { icon: Star, value: 5.0, suffix: ' ⭐', label: 'Google Rating', decimals: 1 },
    { icon: Users, value: 677, suffix: '+', label: 'Verified Reviews', decimals: 0 },
    { icon: Award, value: 7, suffix: '+', label: 'Specialities', decimals: 0 },
    { icon: Cpu, value: 100, suffix: '%', label: 'Advanced Technology', decimals: 0 },
]

export default function Authority() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section fade in from dark hero
            gsap.fromTo(sectionRef.current,
                { backgroundColor: '#050b1a' },
                {
                    backgroundColor: '#fafafa',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: 1,
                    }
                }
            )

            // Counter animations
            stats.forEach((stat, i) => {
                const counter = { val: 0 }
                const el = document.querySelector(`#counter-${i}`)

                gsap.to(counter, {
                    val: stat.value,
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    onUpdate: () => {
                        if (el) {
                            el.textContent = stat.decimals > 0
                                ? counter.val.toFixed(stat.decimals) + stat.suffix
                                : Math.floor(counter.val) + stat.suffix
                        }
                    }
                })
            })

            // Fade in stat cards
            gsap.fromTo('.stat-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.stats-grid',
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
            id="authority"
            style={{
                padding: 'var(--section-padding) clamp(1.5rem, 5vw, 6rem)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Section Header */}
            <p style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--soft-warm)',
                fontWeight: 600,
                marginBottom: '1rem',
                fontFamily: 'var(--font-body)',
            }}>Why Choose Us</p>

            <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: 'var(--sapphire-deep)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)',
            }}>
                Trusted by Gangtok
            </h2>

            <p style={{
                fontSize: '1.05rem',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto 4rem',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.7,
            }}>
                Setting the gold standard in dental care with unmatched expertise, cutting-edge technology, and a perfect 5-star reputation.
            </p>

            {/* Stats Grid */}
            <div className="stats-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
                maxWidth: '1100px',
                margin: '0 auto',
            }}>
                {stats.map((stat, i) => {
                    const Icon = stat.icon
                    return (
                        <div
                            key={i}
                            className="stat-card"
                            style={{
                                padding: '2.5rem 2rem',
                                background: '#fff',
                                borderRadius: '1.5rem',
                                boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                opacity: 0,
                                cursor: 'default',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,43,91,0.1)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.04)'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '1rem',
                                background: 'linear-gradient(135deg, rgba(15,43,91,0.08), rgba(15,43,91,0.03))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                            }}>
                                <Icon size={24} color="var(--sapphire)" />
                            </div>

                            <div
                                id={`counter-${i}`}
                                style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    color: 'var(--sapphire-deep)',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                0{stat.suffix}
                            </div>

                            <p style={{
                                fontSize: '0.9rem',
                                color: '#888',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 500,
                            }}>
                                {stat.label}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
