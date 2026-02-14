import { MessageCircle, Phone, Calendar } from 'lucide-react'

export default function FloatingButtons() {
    return (
        <>
            {/* WhatsApp FAB */}
            <a
                href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                    zIndex: 999,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    textDecoration: 'none',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                    e.currentTarget.style.boxShadow = '0 6px 30px rgba(37, 211, 102, 0.6)'
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)'
                }}
            >
                <MessageCircle size={28} />
            </a>

            {/* Click-to-call on mobile */}
            <a
                href="tel:+91XXXXXXXXXX"
                aria-label="Call us"
                className="mobile-call-btn"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '2rem',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--sapphire) 0%, var(--sapphire-light) 100%)',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 4px 20px rgba(15, 43, 91, 0.4)',
                    zIndex: 999,
                    textDecoration: 'none',
                }}
            >
                <Phone size={24} />
            </a>

            <style>{`
        @media (max-width: 768px) {
          .mobile-call-btn { display: flex !important; }
        }
      `}</style>
        </>
    )
}
