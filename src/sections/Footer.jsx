import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const treatments = [
    'Endodontics', 'Implantology', 'Oral Surgery',
    'Prosthodontics', 'Orthodontics', 'Periodontics', 'Pedodontics',
]

const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#hygiene' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Book Appointment', href: '#appointment' },
]

export default function Footer() {
    const footerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Gradient lines animation
            gsap.to('.footer-gradient-line', {
                backgroundPosition: '200% 0',
                duration: 4,
                repeat: -1,
                ease: 'linear',
            })

            // Stagger fade in
            gsap.fromTo('.footer-col',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    }
                }
            )
        }, footerRef)

        return () => ctx.revert()
    }, [])

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer
            ref={footerRef}
            style={{
                background: 'linear-gradient(180deg, #0a0e1a 0%, #060912 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated gradient lines */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
            }}>
                <div className="footer-gradient-line" style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, var(--soft-warm), transparent, var(--sapphire-light), transparent)',
                    backgroundSize: '200% 100%',
                }} />
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 6rem) 2rem',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div className="footer-col" style={{ opacity: 0 }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            color: '#fff',
                            marginBottom: '1rem',
                        }}>
                            <span style={{ color: 'var(--soft-warm)' }}>White</span> Tara
                        </h3>
                        <p style={{
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.4)',
                            lineHeight: 1.7,
                            fontFamily: 'var(--font-body)',
                            marginBottom: '1.5rem',
                        }}>
                            Gangtok's most trusted multi-speciality dental authority.
                            5.0⭐ rated with 677+ verified Google reviews.
                        </p>

                        {/* Social */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[Instagram, Facebook].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '0.5rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.4)',
                                        transition: 'background 0.3s, color 0.3s',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'var(--soft-warm)'
                                        e.currentTarget.style.color = 'var(--sapphire-deep)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                                    }}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col" style={{ opacity: 0 }}>
                        <h4 style={{
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: 'var(--soft-warm)',
                            marginBottom: '1.5rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)',
                        }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        style={{
                                            color: 'rgba(255,255,255,0.4)',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontFamily: 'var(--font-body)',
                                            transition: 'color 0.3s, padding-left 0.3s',
                                        }}
                                        onMouseEnter={e => {
                                            e.target.style.color = 'var(--soft-warm)'
                                            e.target.style.paddingLeft = '6px'
                                        }}
                                        onMouseLeave={e => {
                                            e.target.style.color = 'rgba(255,255,255,0.4)'
                                            e.target.style.paddingLeft = '0'
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div className="footer-col" style={{ opacity: 0 }}>
                        <h4 style={{
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: 'var(--soft-warm)',
                            marginBottom: '1.5rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)',
                        }}>Treatments</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {treatments.map((t, i) => (
                                <li key={i} style={{
                                    color: 'rgba(255,255,255,0.4)',
                                    fontSize: '0.9rem',
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col" style={{ opacity: 0 }}>
                        <h4 style={{
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: 'var(--soft-warm)',
                            marginBottom: '1.5rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)',
                        }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <MapPin size={16} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(255,255,255,0.4)',
                                    lineHeight: 1.6,
                                    fontFamily: 'var(--font-body)',
                                }}>
                                    In Hotel Ginger, Bojhogari,<br />
                                    Gangtok, Sikkim 737103
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Phone size={16} color="rgba(255,255,255,0.3)" />
                                <a
                                    href="tel:+91XXXXXXXXXX"
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        fontFamily: 'var(--font-body)',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s',
                                    }}
                                    onMouseEnter={e => e.target.style.color = 'var(--soft-warm)'}
                                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                                >
                                    +91 XXXXX XXXXX
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <p style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.25)',
                        fontFamily: 'var(--font-body)',
                    }}>
                        © {new Date().getFullYear()} White Tara Dental Clinic. All rights reserved.
                    </p>
                    <p style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.25)',
                        fontFamily: 'var(--font-body)',
                    }}>
                        Designed with clinical precision
                    </p>
                </div>
            </div>
        </footer>
    )
}
