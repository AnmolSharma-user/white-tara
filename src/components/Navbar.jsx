import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Menu, X, Phone } from 'lucide-react'
import logoImg from '../assets/logo-white-tara.avif'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#hygiene' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#appointment' },
]

export default function Navbar() {
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
        )
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const textColor = isScrolled ? 'rgba(255,255,255,0.85)' : 'var(--sapphire-deep)'
    const textHover = isScrolled ? '#fff' : 'var(--soft-accent)'

    return (
        <nav
            ref={navRef}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                padding: isScrolled ? '0.5rem 1.5rem' : '0.75rem 1.5rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: isScrolled ? 'rgba(10, 14, 26, 0.88)' : 'rgba(250,251,253,0.8)',
                backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(15,43,91,0.06)',
            }}
        >
            <div style={{
                maxWidth: '1400px', margin: '0 auto',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <a href="#" style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    textDecoration: 'none',
                }}>
                    <img
                        src={logoImg}
                        alt="White Tara Dental"
                        style={{
                            height: '40px', width: 'auto', objectFit: 'contain',
                            borderRadius: '6px',
                            filter: isScrolled ? 'brightness(1.2)' : 'none',
                            transition: 'filter 0.3s',
                        }}
                    />
                    <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        fontWeight: 700,
                        color: isScrolled ? '#fff' : 'var(--sapphire-deep)',
                        letterSpacing: '-0.02em', transition: 'color 0.3s',
                    }}>
                        <span style={{ color: 'var(--soft-accent)' }}>White</span> Tara
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{
                    display: 'flex', alignItems: 'center', gap: 'clamp(0.8rem, 2vw, 1.8rem)',
                }}>
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{
                                color: textColor, textDecoration: 'none', fontSize: '0.8rem',
                                fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
                                transition: 'color 0.3s', fontFamily: 'var(--font-body)',
                            }}
                            onMouseEnter={e => e.target.style.color = textHover}
                            onMouseLeave={e => e.target.style.color = textColor}
                        >{link.label}</a>
                    ))}
                    <a href="tel:+91XXXXXXXXXX" style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.5rem 1.2rem',
                        background: isScrolled ? 'linear-gradient(135deg, var(--soft-accent), var(--soft-accent-light))' : 'var(--sapphire-deep)',
                        color: isScrolled ? 'var(--sapphire-deep)' : '#fff',
                        borderRadius: '10px', textDecoration: 'none', fontSize: '0.8rem',
                        fontWeight: 600, transition: 'transform 0.3s, box-shadow 0.3s',
                        fontFamily: 'var(--font-body)',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(15,43,91,0.2)' }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                    ><Phone size={13} /> Call Now</a>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menu" style={{
                        display: 'none', alignItems: 'center', justifyContent: 'center',
                        background: 'none', border: 'none',
                        color: isScrolled ? '#fff' : 'var(--sapphire-deep)',
                        cursor: 'pointer', padding: '0.4rem', transition: 'color 0.3s',
                    }}
                >{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
            </div>

            {/* Mobile Menu */}
            <div style={{
                maxHeight: mobileOpen ? '400px' : '0', overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
                <div style={{
                    padding: mobileOpen ? '1.5rem 0.5rem' : '0 0.5rem',
                    display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'padding 0.3s',
                }}>
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{
                                color: isScrolled ? 'rgba(255,255,255,0.7)' : 'var(--sapphire-deep)',
                                textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
                                letterSpacing: '0.04em', textTransform: 'uppercase',
                                fontFamily: 'var(--font-body)', transition: 'color 0.3s',
                            }}
                        >{link.label}</a>
                    ))}
                    <a href="tel:+91XXXXXXXXXX" style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        gap: '0.4rem', padding: '0.7rem 1.5rem', background: 'var(--sapphire-deep)',
                        color: '#fff', borderRadius: '10px', textDecoration: 'none',
                        fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-body)',
                    }}><Phone size={14} /> Call Now</a>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </nav>
    )
}
