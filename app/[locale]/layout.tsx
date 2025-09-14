import '../globals.css';
import type { ReactNode } from 'react';

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: 'en' | 'fr' | 'mx' } }) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}


