'use client';

export default function TestTelephonePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb', 
      padding: '48px 16px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1024px', 
        margin: '0 auto' 
      }}>
        <h1 style={{ 
          fontSize: '30px', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '48px',
          color: '#1f2937'
        }}>
          Test Icônes Téléphone
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px'
        }}>
          {/* Icône 1 - Style classique */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Classique</span>
          </div>

          {/* Icône 2 - Style moderne */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 20H7V4H17V20Z"/>
              <path d="M12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18Z"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Moderne</span>
          </div>

          {/* Icône 3 - Style minimaliste */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={1.5}/>
              <line x1="12" y1="18" x2="12" y2="18" strokeWidth={1.5}/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Minimaliste</span>
          </div>

          {/* Icône 4 - Style arrondi */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 20H7V4H17V20ZM12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18Z"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Arrondi</span>
          </div>

          {/* Icône 5 - Style épuré */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Épuré</span>
          </div>

          {/* Icône 6 - Style géométrique */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="2" width="12" height="20" rx="1" strokeWidth={1.5}/>
              <circle cx="12" cy="18" r="1" strokeWidth={1.5}/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Géométrique</span>
          </div>

          {/* Icône 7 - Style simple */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Simple</span>
          </div>

          {/* Icône 8 - Style net */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Net</span>
          </div>

          {/* Icône 9 - Style clean */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="7" y="2" width="10" height="20" rx="1" strokeWidth={1.5}/>
              <circle cx="12" cy="18" r="1" fill="currentColor"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Clean</span>
          </div>

          {/* Icône 10 - Style ultra-minimaliste */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'black', marginBottom: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Ultra-minimaliste</span>
          </div>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', marginBottom: '16px' }}>
            Toutes les icônes sont en noir et style minimaliste
          </p>
          <a 
            href="/" 
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#374151'}
            onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'black'}
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
} 