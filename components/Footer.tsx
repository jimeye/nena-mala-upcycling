export default function Footer() {
  return (
    <footer className="p-4 mt-8 border-t text-sm text-gray-500">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <p>© {new Date().getFullYear()} Nena Mala</p>
          <p>Puerto Escondido / Paris / Ibiza</p>
        </div>
        <div className="space-x-4">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
} 