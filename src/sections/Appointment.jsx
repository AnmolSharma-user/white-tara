import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useForm } from 'react-hook-form'
import { Send, Calendar } from 'lucide-react'

export default function Appointment() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header
            gsap.fromTo('.appt-header',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.appt-header',
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Form fields sequential fade in
            gsap.fromTo('.appt-field',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.appt-form',
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            )

            // Button pulse
            gsap.to('.appt-btn', {
                boxShadow: '0 0 40px rgba(196,168,122,0.4)',
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })

            // Background gradient animation
            gsap.to('.appt-bg-orb', {
                x: 80,
                y: -60,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log('Appointment Requested:', data)
        alert('Thank you! We will contact you shortly to confirm your appointment.')
    }

    const inputStyle = {
        width: '100%',
        padding: '1rem 1.25rem',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '0.75rem',
        color: '#fff',
        fontSize: '0.95rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    }

    return (
        <section
            ref={sectionRef}
            id="appointment"
            style={{
                padding: 'var(--section-padding) clamp(1.5rem, 5vw, 6rem)',
                background: 'linear-gradient(135deg, #050b1a 0%, #0f2b5b 50%, #091d40 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background orbs */}
            <div className="appt-bg-orb" style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(196,168,122,0.06) 0%, transparent 70%)',
                top: '-100px',
                right: '-100px',
                pointerEvents: 'none',
            }} />
            <div className="appt-bg-orb" style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(15,43,91,0.15) 0%, transparent 70%)',
                bottom: '-50px',
                left: '-50px',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div className="appt-header" style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0 }}>
                    <p style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--soft-warm)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-body)',
                    }}>
                        Book Now
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                        color: '#fff',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                    }}>
                        Schedule Your Consultation
                    </h2>

                    <p style={{
                        fontSize: '1.05rem',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '500px',
                        margin: '0 auto',
                        fontFamily: 'var(--font-body)',
                    }}>
                        Begin your journey to exceptional dental care. We'll reach out to confirm within 24 hours.
                    </p>
                </div>

                {/* Form Card */}
                <form
                    className="appt-form glass"
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        padding: '2.5rem',
                        borderRadius: '1.5rem',
                        border: '1px solid rgba(196,168,122,0.15)',
                        boxShadow: '0 0 60px rgba(15,43,91,0.2)',
                    }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                        <div className="appt-field" style={{ opacity: 0 }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Full Name *
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                style={inputStyle}
                                onFocus={e => {
                                    e.target.style.borderColor = 'var(--soft-warm)'
                                    e.target.style.boxShadow = '0 0 20px rgba(196,168,122,0.15)'
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.target.style.boxShadow = 'none'
                                }}
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>Required</span>}
                        </div>

                        <div className="appt-field" style={{ opacity: 0 }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                style={inputStyle}
                                onFocus={e => {
                                    e.target.style.borderColor = 'var(--soft-warm)'
                                    e.target.style.boxShadow = '0 0 20px rgba(196,168,122,0.15)'
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.target.style.boxShadow = 'none'
                                }}
                                {...register('phone', { required: true })}
                            />
                            {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>Required</span>}
                        </div>
                    </div>

                    <div className="appt-field" style={{ marginTop: '1.25rem', opacity: 0 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Service Needed
                        </label>
                        <select
                            style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                            {...register('service')}
                        >
                            <option value="" style={{ background: '#111827' }}>Select a service</option>
                            <option value="endodontics" style={{ background: '#111827' }}>Endodontics</option>
                            <option value="implantology" style={{ background: '#111827' }}>Implantology</option>
                            <option value="oral-surgery" style={{ background: '#111827' }}>Oral & Maxillofacial Surgery</option>
                            <option value="prosthodontics" style={{ background: '#111827' }}>Prosthodontics</option>
                            <option value="orthodontics" style={{ background: '#111827' }}>Orthodontics</option>
                            <option value="periodontics" style={{ background: '#111827' }}>Periodontics</option>
                            <option value="pedodontics" style={{ background: '#111827' }}>Pedodontics</option>
                            <option value="general" style={{ background: '#111827' }}>General Checkup</option>
                        </select>
                    </div>

                    <div className="appt-field" style={{ marginTop: '1.25rem', opacity: 0 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Message (Optional)
                        </label>
                        <textarea
                            rows={3}
                            placeholder="Tell us more about your dental needs..."
                            style={{ ...inputStyle, resize: 'vertical' }}
                            onFocus={e => {
                                e.target.style.borderColor = 'var(--soft-warm)'
                                e.target.style.boxShadow = '0 0 20px rgba(196,168,122,0.15)'
                            }}
                            onBlur={e => {
                                e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                                e.target.style.boxShadow = 'none'
                            }}
                            {...register('message')}
                        />
                    </div>

                    <button
                        type="submit"
                        className="appt-btn appt-field"
                        style={{
                            width: '100%',
                            marginTop: '1.5rem',
                            padding: '1rem 2rem',
                            background: 'linear-gradient(135deg, var(--soft-warm) 0%, var(--soft-warm-light) 100%)',
                            color: 'var(--sapphire-deep)',
                            border: 'none',
                            borderRadius: '0.75rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            transition: 'transform 0.3s',
                            opacity: 0,
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <Calendar size={18} />
                        Schedule Your Consultation
                    </button>
                </form>
            </div>
        </section>
    )
}
