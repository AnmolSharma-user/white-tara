import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

const reviews = [
    {
        text: "With the price that I paid for the service, I'm greatly satisfied. The quality of care is exceptional and the clinic is spotlessly clean.",
        author: "Patient Review",
        rating: 5,
    },
    {
        text: "Extremely happy with my treatment... can't make out the tooth restored. It looks completely natural. The doctor's skill is remarkable.",
        author: "Patient Review",
        rating: 5,
    },
    {
        text: "Definitely a go-to place for quality dental services. Professional staff, modern equipment, and very comfortable environment.",
        author: "Patient Review",
        rating: 5,
    },
    {
        text: "Best dental clinic in Gangtok without a doubt. The attention to detail and patient care is on another level entirely.",
        author: "Patient Review",
        rating: 5,
    },
    {
        text: "From consultation to treatment, every step was transparent and painless. Highly recommend White Tara Dental to everyone.",
        author: "Patient Review",
        rating: 5,
    },
]

export default function Testimonials() {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo('.testimonials-header',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.testimonials-header',
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Horizontal scroll
            const track = trackRef.current
            if (!track) return

            const totalWidth = track.scrollWidth - window.innerWidth

            gsap.to(track, {
                x: -totalWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${totalWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            })

            // Star shimmer
            gsap.to('.star-shimmer', {
                backgroundPosition: '200% 0',
                duration: 3,
                repeat: -1,
                ease: 'linear',
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            style={{
                minHeight: '100vh',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #fafafa 0%, #f0efed 100%)',
                position: 'relative',
            }}
        >
            <div style={{
                padding: 'var(--section-padding) clamp(1.5rem, 5vw, 6rem)',
                paddingBottom: '2rem',
            }}>
                {/* Header */}
                <div className="testimonials-header" style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0 }}>
                    <p style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--soft-warm)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-body)',
                    }}>Patient Stories</p>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                        color: 'var(--sapphire-deep)',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                    }}>
                        What Our Patients Say
                    </h2>

                    <p style={{
                        fontSize: '1.05rem',
                        color: '#666',
                        maxWidth: '500px',
                        margin: '0 auto',
                        fontFamily: 'var(--font-body)',
                    }}>
                        677+ verified 5-star reviews and counting.
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div
                ref={trackRef}
                style={{
                    display: 'flex',
                    gap: '2rem',
                    paddingLeft: 'clamp(1.5rem, 5vw, 6rem)',
                    paddingRight: '4rem',
                    willChange: 'transform',
                }}
            >
                {reviews.map((review, i) => (
                    <div
                        key={i}
                        style={{
                            minWidth: 'min(450px, 80vw)',
                            padding: '2.5rem',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(0,0,0,0.06)',
                            borderRadius: '1.5rem',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                            flexShrink: 0,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-5px)'
                            e.currentTarget.style.boxShadow = '0 16px 50px rgba(15,43,91,0.08)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.04)'
                        }}
                    >
                        {/* Stars */}
                        <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                            {[...Array(review.rating)].map((_, j) => (
                                <Star
                                    key={j}
                                    size={18}
                                    fill="var(--soft-warm)"
                                    color="var(--soft-warm)"
                                    className="star-shimmer"
                                    style={{
                                        background: 'linear-gradient(90deg, var(--soft-warm) 0%, var(--soft-warm-light) 50%, var(--soft-warm) 100%)',
                                        backgroundSize: '200% 100%',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                />
                            ))}
                        </div>

                        <Quote size={24} color="var(--sapphire)" style={{ opacity: 0.15, marginBottom: '1rem' }} />

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--sapphire-deep)',
                            lineHeight: 1.8,
                            fontFamily: 'var(--font-body)',
                            marginBottom: '1.5rem',
                            fontWeight: 400,
                        }}>
                            "{review.text}"
                        </p>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--sapphire), var(--sapphire-light))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                fontFamily: 'var(--font-body)',
                            }}>
                                {String.fromCharCode(65 + i)}
                            </div>
                            <div>
                                <p style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'var(--sapphire-deep)',
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    Verified {review.author}
                                </p>
                                <p style={{
                                    fontSize: '0.75rem',
                                    color: '#999',
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    via Google Reviews
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
