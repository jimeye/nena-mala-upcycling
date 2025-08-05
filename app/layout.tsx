import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Nena Mala',
  description: 'Upcycling, pièces limitées - Puerto Escondido / Paris / Ibiza',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-white text-black font-sans">
        {children}
      </body>
    </html>
  );
} 