export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Test Page - 40 Live Chat Icons</h1>
      
      {/* Grille de 4x10 pour les icônes */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {/* PREMIÈRE RANGÉE - Couleurs originales */}
        
        {/* Icône 1 - Points horizontaux */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points horizontaux</span>
        </div>

        {/* Icône 2 - Points verticaux */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex flex-col space-y-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points verticaux</span>
        </div>

        {/* Icône 3 - Triangle */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black"></div>
          </button>
          <span className="text-sm text-gray-300">Triangle</span>
        </div>

        {/* Icône 4 - Message */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-4 bg-white rounded-sm relative">
              <div className="absolute -bottom-1 left-2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Message</span>
        </div>

        {/* Icône 5 - Cercle avec point central */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </button>
          <span className="text-sm text-gray-300">Point central</span>
        </div>

        {/* Icône 6 - Croix */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Croix</span>
        </div>

        {/* Icône 7 - Étoile */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="text-black text-xl">★</div>
          </button>
          <span className="text-sm text-gray-300">Étoile</span>
        </div>

        {/* Icône 8 - Cœur */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="text-white text-lg">♥</div>
          </button>
          <span className="text-sm text-gray-300">Cœur</span>
        </div>

        {/* Icône 9 - Plus */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-black transform -translate-x-1/2"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Plus</span>
        </div>

        {/* Icône 10 - Question */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-lg">
            <div className="text-white text-lg font-bold">?</div>
          </button>
          <span className="text-sm text-gray-300">Question</span>
        </div>

        {/* Icône 11 - Bulle de chat */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-5 h-3 bg-black rounded-full relative">
              <div className="absolute -bottom-1 left-1 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[3px] border-t-black"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Bulle de chat</span>
        </div>

        {/* Icône 12 - Téléphone */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-6 bg-white rounded-sm relative">
              <div className="absolute top-0 left-1/2 w-2 h-1 bg-white rounded-t-sm transform -translate-x-1/2"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Téléphone</span>
        </div>

        {/* Icône 13 - Enveloppe */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-5 h-3 bg-black border border-black relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
              <div className="absolute top-1 left-0 w-full h-0.5 bg-white"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Enveloppe</span>
        </div>

        {/* Icône 14 - Cercle avec bordure */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </button>
          <span className="text-sm text-gray-300">Cercle bordé</span>
        </div>

        {/* Icône 15 - Points en carré */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points en carré</span>
        </div>

        {/* Icône 16 - Ligne ondulée */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-2 bg-white rounded-full"></div>
          </button>
          <span className="text-sm text-gray-300">Ligne</span>
        </div>

        {/* Icône 17 - Double cercle */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Double cercle</span>
        </div>

        {/* Icône 18 - Points en diagonale */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex space-x-1 transform rotate-45">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points diagonaux</span>
        </div>

        {/* Icône 19 - Cercle avec ligne */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-0.5 bg-black"></div>
          </button>
          <span className="text-sm text-gray-300">Ligne simple</span>
        </div>

        {/* Icône 20 - Cercle avec deux lignes */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="flex flex-col space-y-1">
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Double ligne</span>
        </div>

        {/* DEUXIÈME RANGÉE - Couleurs inversées */}
        
        {/* Icône 21 - Points horizontaux (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points horizontaux (inv)</span>
        </div>

        {/* Icône 22 - Points verticaux (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-lg">
            <div className="flex flex-col space-y-1">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points verticaux (inv)</span>
        </div>

        {/* Icône 23 - Triangle (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white"></div>
          </button>
          <span className="text-sm text-gray-300">Triangle (inv)</span>
        </div>

        {/* Icône 24 - Message (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-4 bg-black rounded-sm relative">
              <div className="absolute -bottom-1 left-2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-black"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Message (inv)</span>
        </div>

        {/* Icône 25 - Cercle avec point central (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
          <span className="text-sm text-gray-300">Point central (inv)</span>
        </div>

        {/* Icône 26 - Croix (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-black transform -translate-x-1/2"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Croix (inv)</span>
        </div>

        {/* Icône 27 - Étoile (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="text-white text-lg">★</div>
          </button>
          <span className="text-sm text-gray-300">Étoile (inv)</span>
        </div>

        {/* Icône 28 - Cœur (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="text-black text-lg">♥</div>
          </button>
          <span className="text-sm text-gray-300">Cœur (inv)</span>
        </div>

        {/* Icône 29 - Plus (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Plus (inv)</span>
        </div>

        {/* Icône 30 - Question (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-lg">
            <div className="text-black text-lg font-bold">?</div>
          </button>
          <span className="text-sm text-gray-300">Question (inv)</span>
        </div>

        {/* Icône 31 - Bulle de chat (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-5 h-3 bg-white rounded-full relative">
              <div className="absolute -bottom-1 left-1 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[3px] border-t-white"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Bulle de chat (inv)</span>
        </div>

        {/* Icône 32 - Téléphone (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-6 bg-black rounded-sm relative">
              <div className="absolute top-0 left-1/2 w-2 h-1 bg-black rounded-t-sm transform -translate-x-1/2"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Téléphone (inv)</span>
        </div>

        {/* Icône 33 - Enveloppe (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-5 h-3 bg-white border border-white relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
              <div className="absolute top-1 left-0 w-full h-0.5 bg-black"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Enveloppe (inv)</span>
        </div>

        {/* Icône 34 - Cercle avec bordure (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-black">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </button>
          <span className="text-sm text-gray-300">Cercle bordé (inv)</span>
        </div>

        {/* Icône 35 - Points en carré (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points en carré (inv)</span>
        </div>

        {/* Icône 36 - Ligne ondulée (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-2 bg-black rounded-full"></div>
          </button>
          <span className="text-sm text-gray-300">Ligne (inv)</span>
        </div>

        {/* Icône 37 - Double cercle (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Double cercle (inv)</span>
        </div>

        {/* Icône 38 - Points en diagonale (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-lg">
            <div className="flex space-x-1 transform rotate-45">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Points diagonaux (inv)</span>
        </div>

        {/* Icône 39 - Cercle avec ligne (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-0.5 bg-white"></div>
          </button>
          <span className="text-sm text-gray-300">Ligne simple (inv)</span>
        </div>

        {/* Icône 40 - Cercle avec deux lignes (inversé) */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex flex-col space-y-1">
              <div className="w-4 h-0.5 bg-black"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </div>
          </button>
          <span className="text-sm text-gray-300">Double ligne (inv)</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-12 text-center">
        <p className="text-gray-300 mb-4">40 icônes de live chat différentes en noir et blanc (20 + 20 inversées)</p>
        <a href="/" className="text-white hover:underline">← Retour à l'accueil</a>
      </div>

      {/* "Fierce by Nature" en bas de l'écran */}
      <div className="absolute bottom-6 left-[15px] z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          <span className="font-bold">F</span>ierce <span className="font-bold">b</span>y <span className="font-bold">N</span>ature
        </h2>
      </div>
    </div>
  );
} 