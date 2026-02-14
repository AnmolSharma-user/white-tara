import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Navigation, Clock } from 'lucide-react'

export default function Location() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.location-content',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.location-content',
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Map zoom reveal
            gsap.fromTo('.location-map',
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.location-map',
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Info cards stagger
            gsap.fromTo('.location-info-card',
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.location-info',
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const actionBtnStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.8rem 1.5rem',
        borderRadius: '0.75rem',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: 600,
        fontFamily: 'var(--font-body)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
    }

    return (
        <section
            ref={sectionRef}
            id="location"
            style={{
                padding: 'var(--section-padding) clamp(1.5rem, 5vw, 6rem)',
                background: 'var(--off-white)',
                position: 'relative',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div className="location-content" style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0 }}>
                    <p style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--soft-warm)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-body)',
                    }}>Find Us</p>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                        color: 'var(--sapphire-deep)',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                    }}>
                        Visit Our Clinic
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: '2rem',
                    alignItems: 'start',
                }}>
                    {/* Map */}
                    <div
                        className="location-map"
                        style={{
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            opacity: 0,
                            height: '400px',
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.5!2d88.6126!3d27.3389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIwJzIwLjAiTiA4OMKwMzYnNDUuNCJF!5e0!3m2!1sen!2sin!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="White Tara Dental Clinic Location"
                        />
                    </div>

                    {/* Info */}
                    <div className="location-info" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {/* Address */}
                        <div className="location-info-card" style={{
                            padding: '1.5rem',
                            background: '#fff',
                            borderRadius: '1rem',
                            boxShadow: '0 2px 15px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(0,0,0,0.04)',
                            display: 'flex',
                            gap: '1rem',
                            opacity: 0,
                        }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '0.75rem',
                                background: 'linear-gradient(135deg, rgba(15,43,91,0.08), rgba(15,43,91,0.03))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <MapPin size={20} color="var(--sapphire)" />
                            </div>
                            <div>
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--sapphire-deep)',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: '0.25rem',
                                    fontWeight: 600,
                                }}>Address</h4>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    lineHeight: 1.6,
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    In Hotel Ginger, Bojhogari,<br />
                                    Gangtok, Sikkim 737103
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="location-info-card" style={{
                            padding: '1.5rem',
                            background: '#fff',
                            borderRadius: '1rem',
                            boxShadow: '0 2px 15px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(0,0,0,0.04)',
                            display: 'flex',
                            gap: '1rem',
                            opacity: 0,
                        }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '0.75rem',
                                background: 'linear-gradient(135deg, rgba(15,43,91,0.08), rgba(15,43,91,0.03))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <Clock size={20} color="var(--sapphire)" />
                            </div>
                            <div>
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--sapphire-deep)',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: '0.25rem',
                                    fontWeight: 600,
                                }}>Business Hours</h4>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    lineHeight: 1.6,
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                                    <span style={{ color: '#ef4444' }}>Sunday: Closed</span>
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="location-info-card"
                                style={{
                                    ...actionBtnStyle,
                                    background: 'linear-gradient(135deg, var(--sapphire), var(--sapphire-light))',
                                    color: '#fff',
                                    flex: 1,
                                    justifyContent: 'center',
                                    opacity: 0,
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(15,43,91,0.3)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            >
                                <Phone size={16} /> Call Us
                            </a>

                            <a
                                href="https://maps.google.com/?q=White+Tara+Dental+Clinic+Gangtok"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="location-info-card"
                                style={{
                                    ...actionBtnStyle,
                                    background: 'linear-gradient(135deg, var(--soft-warm), var(--soft-warm-light))',
                                    color: 'var(--sapphire-deep)',
                                    flex: 1,
                                    justifyContent: 'center',
                                    opacity: 0,
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(196,168,122,0.3)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            >
                                <Navigation size={16} /> Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
