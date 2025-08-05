export default function TestPlacementPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/nena-mala-hero-static-acceuil.webp')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">8 Propositions de Placement du Texte</h1>
        
        {/* Proposition 1 - Centré */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>1. Centré</strong> - items-center justify-center
          </div>
        </div>

        {/* Proposition 2 - Haut gauche */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex items-start justify-start p-8">
            <div className="text-white text-left">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>2. Haut gauche</strong> - items-start justify-start
          </div>
        </div>

        {/* Proposition 3 - Haut droite */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex items-start justify-end p-8">
            <div className="text-white text-right">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>3. Haut droite</strong> - items-start justify-end
          </div>
        </div>

        {/* Proposition 4 - Bas gauche */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex items-end justify-start p-8">
            <div className="text-white text-left">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>4. Bas gauche</strong> - items-end justify-start
          </div>
        </div>

        {/* Proposition 5 - Bas droite */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex items-end justify-end p-8">
            <div className="text-white text-right">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>5. Bas droite</strong> - items-end justify-end
          </div>
        </div>

        {/* Proposition 6 - 3/4 hauteur, centré */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex justify-center" style={{ alignItems: '75%' }}>
            <div className="text-white text-center">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>6. 3/4 hauteur, centré</strong> - alignItems: '75%'
          </div>
        </div>

        {/* Proposition 7 - 1/4 hauteur, centré */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex justify-center" style={{ alignItems: '25%' }}>
            <div className="text-white text-center">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>7. 1/4 hauteur, centré</strong> - alignItems: '25%'
          </div>
        </div>

        {/* Proposition 8 - Bas centré */}
        <div className="mb-16 h-96 relative border border-white/30">
          <div className="absolute inset-0 flex items-end justify-center p-8">
            <div className="text-white text-center">
              <p className="text-3xl md:text-5xl font-extralight mb-3 tracking-wide">Upcycling. Crafted. Conscious.</p>
              <button className="text-xl font-light underline hover:no-underline transition-all tracking-wide">
                shop now
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs">
            <strong>8. Bas centré</strong> - items-end justify-center
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-8">
          <a href="/" className="text-white hover:underline">← Retour à l'accueil</a>
        </div>
      </div>
    </div>
  );
} 